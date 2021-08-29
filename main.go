package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mgerb/mywebsite-next/server/api"
	"github.com/mgerb/mywebsite-next/server/util"
)

func main() {
	router := gin.Default()
	api.Init(router)
	util.ParseProjects()
	router.Run(":8081")
}
