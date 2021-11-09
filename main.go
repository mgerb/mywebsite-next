package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mgerb/mywebsite-next/server/api"
	"github.com/mgerb/mywebsite-next/server/config"
)

func init() {
	config.Init()
}

func main() {
	router := gin.Default()
	api.Init(router)
	router.Run(":8081")
}
