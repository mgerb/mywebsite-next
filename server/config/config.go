package config

import (
	"log"
	"os"
)

type _config struct {
	GithubUsername string
	GithubPassword string
}

var Config _config

func Init() {
	Config.GithubUsername = os.Getenv("GITHUB_USERNAME")

	if Config.GithubUsername == "" {
		log.Fatal("GITHUB_USERNAME env variable must be set")
	}

	Config.GithubPassword = os.Getenv("GITHUB_PASSWORD")

	if Config.GithubPassword == "" {
		log.Fatal("GITHUB_PASSWORD env variable must be set")
	}
}
