package api

import (
	"errors"
	"io/ioutil"
	"net/http"
	"path"
	"strings"

	"github.com/gin-gonic/gin"
)

type BlogFileInfo struct {
	FileName string `json:"fileName"`
	FilePath string `json:"filePath"`
	Date     string `json:"date"`
	Intro    string `json:"intro"`
}

func initBlogRoutes(router *gin.RouterGroup) {
	router.GET("/", getBlogFileInfo)
}

func getBlogFileInfo(c *gin.Context) {

	blogFileInfoList, err := readBlogFiles("blog")

	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, blogFileInfoList)
}

func readBlogFiles(dir string) ([]BlogFileInfo, error) {
	blogFileInfoList := []BlogFileInfo{}
	files, err := ioutil.ReadDir(dir)

	if err != nil {
		return nil, err
	}

	for _, file := range files {
		if file.IsDir() {
			nestedBlogFileInfoList, err := readBlogFiles(path.Join(dir, file.Name()))
			if err != nil {
				return nil, err
			}
			blogFileInfoList = append(blogFileInfoList, nestedBlogFileInfoList...)
		} else if strings.HasSuffix(file.Name(), ".md") {
			filePath := path.Join(dir, file.Name())
			intro, err := getBlogMarkdownIntro(filePath)
			if err != nil {
				return nil, err
			}

			bInfo := BlogFileInfo{
				FileName: file.Name(),
				FilePath: filePath,
				Date:     "todo",
				Intro:    intro,
			}
			blogFileInfoList = append(blogFileInfoList, bInfo)
		}
	}

	return blogFileInfoList, nil
}

// get introduction header from markdown file - separated by "---"
func getBlogMarkdownIntro(filePath string) (string, error) {
	bytes, err := ioutil.ReadFile(filePath)
	if err != nil {
		return "", err
	}

	splitStrings := strings.Split(string(bytes), "---")

	if len(splitStrings) < 2 {
		return "", errors.New("error parsing markdown - file must contain a header separated by '---': " + filePath)
	}

	return splitStrings[0], nil
}
