package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mgerb/mywebsite-next/server/api"
)

func main() {
	router := gin.Default()
	api.Init(router)
	router.Run(":8081")
}
