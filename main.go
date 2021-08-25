package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Static("/css", "./dist/css")
	router.Static("/js", "./dist/js")
	router.Static("/img", "./dist/img")
	router.StaticFile("/favicon.ico", "./dist/favicon.ico")

	api := router.Group("/api")

	api.GET("/test", func(c *gin.Context) {
		c.JSON(http.StatusOK, map[string]int{"test": 123})
	})

	router.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})

	router.Run(":8080")
}
