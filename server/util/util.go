package util

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"path"
	"regexp"
	"strings"

	"github.com/mgerb/mywebsite-next/server/model"
)

const blogFolderPath = "static/blog"
const projectsFilePath = "static/projects/index.json"

func ParseProjects() []model.Project {
	j, err := ioutil.ReadFile(projectsFilePath)

	var p []model.Project

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

func ReadBlogFiles() ([]model.BlogFileInfo, error) {
	return readBlogFiles(blogFolderPath)
}

func readBlogFiles(dir string) ([]model.BlogFileInfo, error) {

	blogFileInfoList := []model.BlogFileInfo{}
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
			title, description, err := parseBlogMarkdown(filePath)

			if err != nil {
				return nil, err
			}

			dateString, err := parseBlogDate(file.Name())

			if err != nil {
				return nil, err
			}

			bInfo := model.BlogFileInfo{
				FilePath:    strings.TrimPrefix(strings.TrimSuffix(filePath, ".md"), "static/"),
				Date:        dateString,
				Title:       title,
				Description: description,
			}
			blogFileInfoList = append(blogFileInfoList, bInfo)
		}
	}

	return blogFileInfoList, nil
}

func parseBlogDate(fileName string) (string, error) {

	r, err := regexp.Compile(`([\d]{4}-[\d]{2}-[\d]{2})`)

	if err != nil {
		return "", err
	}

	return r.FindString(fileName), nil
}

// return first line (title) and third line (description)
func parseBlogMarkdown(filePath string) (string, string, error) {
	bytes, err := ioutil.ReadFile(filePath)
	if err != nil {
		return "", "", err
	}

	splitStrings := strings.Split(string(bytes), "\n")

	if len(splitStrings) < 2 {
		return "", "", errors.New("error parsing markdown - file must contain a header separated by '---': " + filePath)
	}

	// remove leading # from title (this is for markdown header)
	return strings.TrimPrefix(splitStrings[0], "# "), splitStrings[2], nil
}
