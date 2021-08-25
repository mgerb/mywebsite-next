<template>
  <div>
    <div class="item" v-for="(item, index) in projects" :key="index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ProjectsService } from "@/services";

export default class Projects extends Vue {
  projects = [
    {
      title: "projects",
      description: "project decription",
    },
    {
      title: "projects",
      description: "project decription",
    },
    {
      title: "projects",
      description: "project decription",
    },
    {
      title: "projects",
      description: "project decription",
    },
    {
      title: "projects",
      description: "project decription",
    },
    {
      title: "projects",
      description: "project decription",
    },
    {
      title: "projects",
      description: "project decription",
    },
    {
      title: "projects",
      description: "project decription",
    },
  ];
}
</script>

<style lang="scss" scoped>
.item {
  & + & {
    margin-top: 1rem;
  }
}
</style>
