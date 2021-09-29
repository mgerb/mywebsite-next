import hljs from "highlight.js";
import marked from "marked";

class _MarkdownService {
  private renderer = new marked.Renderer();
  constructor() {
    marked.setOptions({
      highlight: (code, lang) => {
        return lang
          ? hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
          : code;
      },
    });

    // open links in new tab and add our link class
    this.renderer.link = (href, title, text) => {
      const hrefString = href ? `href="${href}"` : null;
      const titleString = title ? `title="${title}"` : null;
      return `<a ${hrefString} ${titleString} class="link" target="_blank">${text}</a>`;
    };
  }

  public render(s: string, useRenderer = false): string {
    const options = useRenderer ? { renderer: this.renderer } : undefined;
    return marked(s, options);
  }
}

export const MarkdownService = new _MarkdownService();
