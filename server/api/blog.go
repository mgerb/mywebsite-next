package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/mgerb/mywebsite-next/server/util"
)

func initBlogRoutes(router *gin.RouterGroup) {
	router.GET("/", getBlogFileInfo)
}

func getBlogFileInfo(c *gin.Context) {

	blogFileInfoList, err := util.ReadBlogFiles()

	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, blogFileInfoList)
}
