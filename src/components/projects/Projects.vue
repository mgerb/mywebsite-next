<template>
  <div>
    <h1 class="text-3xl">Projects</h1>
    <hr class="my-4" />
    <loading-icon v-if="loading" />
    <template v-if="!loading">
      <github-project
        class="item"
        v-for="(project, index) in allProjects"
        v-bind:key="index"
        :project="project"
      ></github-project>
    </template>
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import { ProjectsService } from "@/services";
import { IAllProjectData } from "@/model/project";
import GithubProject from "@/components/github/GithubProject.vue";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { ScrollerComponent } from "@/components/abstract/ScrollerComponent";

@Options({
  components: {
    GithubProject,
    LoadingIcon,
  },
})
export default class Projects extends ScrollerComponent {
  public allProjects: IAllProjectData[] = [];
  public loading = true;

  public mounted(): void {
    ProjectsService.getAllProjectData().subscribe({
      next: (allProjects) => {
        this.allProjects = allProjects;
        this.handleScrolling();
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.item {
  & + & {
    margin-top: 1rem;
  }
}
</style>
