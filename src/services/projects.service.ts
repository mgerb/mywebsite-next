import { IAllProjectData, IGithubLanguage, IProject } from "@/model/project";
import { combineLatest, Observable, of } from "rxjs";
import { map, mergeMap, tap } from "rxjs/operators";
import { HttpService } from "./http.service";

class _ProjectsService {
  private readonly GITHUB_USERNAME = "mgerb";
  private allProjectCache?: IAllProjectData[];

  public getProjects(): Observable<IProject[] | undefined> {
    return HttpService.get("/api/projects");
  }

  public getMarkdown(fileName: string): Observable<string | undefined> {
    return HttpService.get<string>(`/static/markdown/${fileName}`);
  }

  public getGithubColors(): Observable<
    | {
        [key: string]: { color: string; url: string };
      }
    | undefined
  > {
    return HttpService.get("/api/github/colors");
  }

  /**
   * Path e.g. mgerb/mywebsite-next/languages
   */
  public getGithubProject<T>(
    userName: string,
    projectName: string,
    additionalInfo?: string
  ): Observable<T | undefined> {
    const path = [userName, projectName, additionalInfo]
      .filter((n) => !!n)
      .join("/");
    return HttpService.get<T>(`/api/github/${path}`);
  }

  public getAllProjectData(): Observable<IAllProjectData[]> {
    if (this.allProjectCache) {
      return of(this.allProjectCache);
    }

    const getProjectData = (projects: any[]) =>
      projects.map((p) =>
        combineLatest([
          of(p),
          this.getGithubProject(this.GITHUB_USERNAME, p.name),
          this.getGithubProject<{ [key: string]: number }>(
            this.GITHUB_USERNAME,
            p.name,
            "languages"
          ),
        ])
      );

    return combineLatest([this.getProjects(), this.getGithubColors()]).pipe(
      mergeMap(([projects, colors]) => {
        return combineLatest(getProjectData(projects || [])).pipe(
          map((p) => {
            return p.map(([project, githubProject, languages]) => ({
              project,
              githubProject,
              languages: this.processLanguages(languages!, colors!),
            }));
          })
        );
      }),
      tap((allProjectData) => {
        this.allProjectCache = allProjectData as any;
      })
    ) as any;
  }

  /**
   * Parse languages and colors into usable format
   */
  private processLanguages(
    languages: { [key: string]: number },
    colors: { [key: string]: { color: string } }
  ): IGithubLanguage[] {
    const totalWeight = Object.values(languages).reduce((a, b) => a + b, 0);
    return Object.keys(languages).map((k) => ({
      name: k,
      weight: languages[k],
      color: colors[k]?.color,
      percentage: +((languages[k] / totalWeight) * 100).toFixed(2),
    }));
  }
}

export const ProjectsService = new _ProjectsService();
