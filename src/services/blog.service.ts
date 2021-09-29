import { IBlogIntro } from "@/model/blog";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpService } from "./http.service";
import { MarkdownService } from "./markdown.service";

class _BlogService {
  public getBlogIntroductions(): Observable<IBlogIntro[] | undefined> {
    return HttpService.get<IBlogIntro[] | undefined>("/api/blog").pipe(
      map((blogIntros) => {
        return blogIntros
          ?.map((intro) => ({
            ...intro,
            descriptionHTML: MarkdownService.render(intro.description, true),
          }))
          .sort((a, b) =>
            new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1
          );
      })
    );
  }

  public getBlogPost(
    folder: string,
    name: string
  ): Observable<string | undefined> {
    return HttpService.get(`/static/blog/${folder}/${name}.md`);
  }
}

export const BlogService = new _BlogService();
