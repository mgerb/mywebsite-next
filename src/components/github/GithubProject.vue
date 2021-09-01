<template>
  <div class="mb-12">
    <div class="flex mb-2 justify-between">
      <div>
        <h1 class="text-2xl mb-2">
          <a
            v-bind:href="project.githubProject.clone_url"
            target="_blank"
            class="link"
          >
            {{ project.githubProject.full_name }}
          </a>
        </h1>
        <div class="mb-2">
          <github-languages v-bind:project="project" />
        </div>
        <github-star-button v-bind:project="project" />
      </div>

      <div>{{ project.githubProject.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { IAllProjectData } from "@/model/project";
import { Options, Vue } from "vue-class-component";
import GithubStarButton from "@/components/github/GithubStarButton.vue";
import GithubLanguages from "@/components/github/GithubLanguages.vue";

@Options({
  props: ["project"],
  components: {
    GithubStarButton,
    GithubLanguages,
  },
})
export default class GithubProject extends Vue {
  public project!: IAllProjectData;
}
</script>
