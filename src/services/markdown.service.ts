import marked from "marked";

class _MarkdownService {
  private renderer = new marked.Renderer();

  constructor() {
    this.renderer.list = (body, ordered) => {
      const tag = ordered ? "ol" : "ul";
      const cl = ordered ? "list-decimal" : "list-disc";
      return `<${tag} class="${cl}">${body}</${tag}>`;
    };
  }

  public render(s: string): string {
    return marked(s, { renderer: this.renderer });
  }
}

export const MarkdownService = new _MarkdownService();
