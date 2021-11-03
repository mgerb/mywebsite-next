<template>
  <div
    v-if="markdownData"
    class="prose max-w-none mb-6"
    v-html="markdownData"
  ></div>
</template>

<script lang="ts">
import { BlogService } from "@/services";
import { MarkdownService } from "@/services/markdown.service";
import { Vue } from "vue-class-component";

export default class BlogPost extends Vue {
  public markdownData?: string;

  data(): any {
    return {
      markdownData: undefined,
    };
  }

  public mounted(): void {
    const { folder, name }: any = this.$route.params;
    BlogService.getBlogPost(folder, name).subscribe((blogPost) => {
      if (blogPost) {
        this.markdownData = MarkdownService.render(blogPost, true);
      }
    });
  }
}
</script>
