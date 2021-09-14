<template>
  <div>
    <github-project v-if="project" :project="project" disable-link="true" />

    <template v-if="markdownData">
      <hr />

      <div v-html="markdownData" class="prose"></div>
    </template>
  </div>
</template>

<script lang="ts">
import { IAllProjectData } from "@/model/project";
import { ProjectsService } from "@/services";
import { Options, Vue } from "vue-class-component";
import GithubProject from "@/components/github/GithubProject.vue";
import { MarkdownService } from "@/services/markdown.service";

@Options({
  components: {
    GithubProject,
  },
})
export default class ProjectDescription extends Vue {
  public project?: IAllProjectData;
  public markdownData?: string;

  data(): any {
    return {
      project: undefined,
      markdownData: undefined,
    };
  }

  public mounted(): void {
    ProjectsService.getAllProjectData().subscribe((data) => {
      this.project = data.filter(
        (d) => d.project.name === this.$route.params.projectName
      )?.[0];

      if (this.project?.project.markdownFile) {
        ProjectsService.getMarkdown(
          this.project?.project.markdownFile
        ).subscribe((markdownData) => {
          if (markdownData) {
            this.markdownData = MarkdownService.render(markdownData);
          }
        });
      }
    });
  }
}
</script>
