package model

type BlogFileInfo struct {
	FilePath    string `json:"filePath"`
	Date        string `json:"date"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

type Project struct {
	Name        *string `json:"name"`
	Description *string `json:"description"`
	// optional
	MarkdownFile *string `json:"markdownFile"`
}
