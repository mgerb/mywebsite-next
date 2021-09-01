/**
 * All data combined to make useful for UI.
 */
export interface IAllProjectData {
  project: IProject;
  githubProject: IGithubProject;
  languages: IGithubLanguage[];
}

/**
 * Project structure defined from json file on back end.
 */
export interface IProject {
  name: string;
  description: string;
  markdownFile?: string;
}

/**
 * Public data from Github's API. There's much more data in this object than listed below.
 */
export interface IGithubProject {
  stargazers_count: number;
  size: number;
  id: number;
  language: string;
  forks: number;
  description: string;
  full_name: string;
  url: string;
  clone_url: string;
  html_url: string;
}

export interface IGithubLanguage {
  name: string;
  weight: number;
  color: string;
  percentage: number;
}
