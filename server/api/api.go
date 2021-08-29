package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/mgerb/mywebsite-next/server/util"
)

func Init(router *gin.Engine) {
	router.Static("/css", "./dist/css")
	router.Static("/js", "./dist/js")
	router.Static("/img", "./dist/img")
	router.Static("/markdown", "./projects/markdown")
	router.StaticFile("/favicon.ico", "./dist/favicon.ico")

	api := router.Group("/api")

	api.GET("/projects", func(c *gin.Context) {
		c.JSON(http.StatusOK, util.ParseProjects())
	})

	router.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})
}
