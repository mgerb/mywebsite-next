<template>
  <span class="inline-block flex items-center text-xs">
    <a
      v-bind:href="project.githubProject.html_url"
      class="flex items-center star-button"
      target="_blank"
    >
      <github-star />
      <span class="color ml-2">Star</span>
    </a>
    <span class="star-count">
      {{ project.githubProject.stargazers_count }}
    </span>
  </span>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GithubStar from "@/components/icons/GithubStar.vue";
import { IAllProjectData } from "@/model/project";

@Options({
  components: {
    GithubStar,
  },
  props: ["project"],
})
export default class GithubStarButton extends Vue {
  public project!: IAllProjectData;
}
</script>

<style lang="scss" scoped>
$padding: 2px 10px;
$radius: 6px;
$border: 1px solid #d3d5d6;

a {
  color: black;
}

.star-count {
  padding: $padding;
  border: $border;
  border-left: none;
  border-top-right-radius: $radius;
  border-bottom-right-radius: $radius;
}

.star-button {
  padding: $padding;
  background: #f6f8fa;
  border: $border;
  border-top-left-radius: $radius;
  border-bottom-left-radius: $radius;

  &:hover {
    background: #f3f4f6;
  }
}
</style>
