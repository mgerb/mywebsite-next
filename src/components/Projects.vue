<template>
  <div>
    <div class="item" v-for="(item, index) in projects" :key="index">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ProjectsService } from "@/services";
import { IProject } from "@/model/project";

export default class Projects extends Vue {
  public projects: IProject[] = [];
  mounted(): void {
    ProjectsService.getProjects().then((projects) => {
      this.projects = projects;
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
