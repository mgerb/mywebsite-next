<template>
  <div>
    <github-project
      class="item"
      v-for="(project, index) in allProjects"
      v-bind:key="index"
      :project="project"
    ></github-project>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ProjectsService } from "@/services";
import { IAllProjectData } from "@/model/project";
import GithubProject from "@/components/github/GithubProject.vue";
import { mergeMap } from "rxjs/operators";

@Options({
  components: {
    GithubProject,
  },
})
export default class Projects extends Vue {
  public allProjects: IAllProjectData[] = [];
  mounted(): void {
    ProjectsService.getProjects()
      .pipe(
        mergeMap((projects) => {
          return ProjectsService.getAllProjectData(projects || []);
        })
      )
      .subscribe((allProjects) => {
        this.allProjects = allProjects;
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
