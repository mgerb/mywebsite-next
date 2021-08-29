package util

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

type Project struct {
	Name        *string
	Description *string
	// optional
	MarkdownFile *string
}

func ParseProjects() []Project {
	j, err := ioutil.ReadFile("./projects/index.json")

	var p []Project

	if err != nil {
		log.Println(err)
		return p
	}

	err = json.Unmarshal(j, &p)

	if err != nil {
		log.Println(err)
		return p
	}

	return p
}
