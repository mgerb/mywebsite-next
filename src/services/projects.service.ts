import { IProject } from "@/model/project";
import Axios from "axios";

class _ProjectsService {
  public getProjects(): Promise<IProject[]> {
    return new Promise((resolve) => {
      Axios.get<IProject[]>("/api/projects").then((resp) => {
        resolve(resp.data);
      });
    });
  }

  public getGithubColors(): Promise<any> {
    return new Promise((resolve) => {
      Axios.get("/api/github/colors").then((resp) => {
        resolve(resp.data);
      });
    });
  }

  /**
   * Path e.g. mgerb/mywebsite-next/languages
   */
  public getGithubProject(
    userName: string,
    projectName: string,
    additionalInfo?: string
  ): Promise<any> {
    const path = [userName, projectName, additionalInfo]
      .filter((n) => !!n)
      .join("/");
    return new Promise((resolve) => {
      Axios.get(`/api/github/${path}`).then((resp) => {
        resolve(resp.data);
      });
    });
  }
}

export const ProjectsService = new _ProjectsService();
