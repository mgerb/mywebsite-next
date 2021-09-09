/**
 * All data combined to make useful for UI.
 */
export interface IAllProjectData {
  githubProject: IGithubProject;
  languages: IGithubLanguage[];
  project: IProject;
}

/**
 * Project structure defined from json file on back end.
 */
export interface IProject {
  description: string;
  markdownFile?: string;
  name: string;
}

/**
 * Public data from Github's API. There's much more data in this object than listed below.
 */
export interface IGithubProject {
  clone_url: string;
  description: string;
  forks: number;
  full_name: string;
  html_url: string;
  id: number;
  language: string;
  name: string;
  size: number;
  stargazers_count: number;
  url: string;
}

export interface IGithubLanguage {
  color: string;
  name: string;
  percentage: number;
  weight: number;
}
