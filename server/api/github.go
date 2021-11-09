package api

// This is just basically a proxy to Github's servers with a caching layer.
// Cache clears every 12 hours.

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/mgerb/mywebsite-next/server/config"
)

const GITHUB_PROJECT_BASE = "https://api.github.com/repos/"

var github_project_cache map[string]map[string]interface{} = map[string]map[string]interface{}{}
var color_cache map[string]interface{} = map[string]interface{}{}

func initGithubRoutes(router *gin.RouterGroup) {
	router.GET("/colors", func(c *gin.Context) {
		colors, err := getGithubColors()

		if err != nil {
			c.Error(err)
			return
		}

		c.JSON(http.StatusOK, colors)
	})

	router.GET("/:userName/:projectName", githubProjectHandler)
	router.GET("/:userName/:projectName/:additionalInfo", githubProjectHandler)
}

func githubProjectHandler(c *gin.Context) {
	userName, _ := c.Params.Get("userName")
	projectName, _ := c.Params.Get("projectName")
	additionalInfo, _ := c.Params.Get("additionalInfo")

	project, err := getGithubProject(userName, projectName, additionalInfo)

	if err != nil {
		c.Error(err)
		return
	}

	c.JSON(http.StatusOK, project)
}

func getGithubColors() (map[string]interface{}, error) {

	if len(color_cache) != 0 {
		return color_cache, nil
	}

	resp, err := http.Get("https://raw.githubusercontent.com/mgerb/github-colors/master/colors.json")

	if err != nil {
		return color_cache, err
	}

	defer resp.Body.Close()
	bytes, err := io.ReadAll(resp.Body)

	if err != nil {
		return color_cache, err
	}

	err = json.Unmarshal(bytes, &color_cache)

	if err != nil {
		return color_cache, err
	}

	return color_cache, nil
}

func getGithubProject(user, projectName, additionalInfo string) (map[string]interface{}, error) {
	mapKey := user + projectName + additionalInfo
	project := github_project_cache[mapKey]

	if len(project) > 0 {
		return project, nil
	}

	url := GITHUB_PROJECT_BASE + user + "/" + projectName

	if additionalInfo != "" {
		url += "/" + additionalInfo
	}

	request, err := http.NewRequest("GET", url, nil)

	if err != nil {
		return project, err
	}

	request.SetBasicAuth(config.Config.GithubUsername, config.Config.GithubPassword)

	client := http.Client{}

	resp, err := client.Do(request)

	if err != nil {
		return project, err
	}

	defer resp.Body.Close()
	bytes, err := io.ReadAll(resp.Body)

	if err != nil {
		return project, err
	}

	err = json.Unmarshal(bytes, &project)

	if err != nil {
		return project, err
	}

	github_project_cache[mapKey] = project

	return project, nil
}
