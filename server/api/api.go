package api

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/mgerb/mywebsite-next/server/util"
)

func Init(router *gin.Engine) {

	// clear cache every 12 hours
	go func() {
		for {
			time.Sleep(time.Hour * 12)
			clearCache()
		}
	}()

	initStatic(router)

	api := router.Group("/api")

	api.GET("/projects", func(c *gin.Context) {
		c.JSON(http.StatusOK, util.ParseProjects())
	})

	initBlogRoutes(api.Group("/blog"))
	initGithubRoutes(api.Group("/github"))

	router.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})
}

func initStatic(router *gin.Engine) {
	router.Static("/css", "./dist/css")
	router.Static("/js", "./dist/js")
	router.Static("/img", "./dist/img")
	router.Static("/markdown", "./projects/markdown")
	router.StaticFile("/favicon.ico", "./dist/favicon.ico")
}

func clearCache() {
	color_cache = map[string]interface{}{}
	github_project_cache = map[string]map[string]interface{}{}
}
