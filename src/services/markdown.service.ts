import hljs from "highlight.js";
import marked from "marked";

class _MarkdownService {
  constructor() {
    marked.setOptions({
      highlight: (code, lang) => {
        return lang
          ? hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
          : code;
      },
    });
  }

  public render(s: string): string {
    return marked(s);
  }
}

export const MarkdownService = new _MarkdownService();
