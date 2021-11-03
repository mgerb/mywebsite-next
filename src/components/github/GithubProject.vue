<template>
  <div class="md:flex flex-wrap justify-between">
    <div class="mb-4 md:w-60">
      <h2 class="text-2xl mb-2">
        <a
          v-bind:href="project.githubProject.html_url"
          target="_blank"
          class="link"
        >
          {{ project.githubProject.name }}
        </a>
      </h2>
      <div class="mb-2">
        <github-languages v-bind:project="project" />
      </div>
      <github-star-button v-bind:project="project" />
    </div>

    <div class="flex-1 md:max-w-md md:text-right mb-2">
      <div v-bind:class="{ 'mb-2': !disableLink }">
        {{ project.project.description }}
      </div>
      <div v-if="!!project.project.markdownFile && !disableLink">
        <router-link
          :to="'/projects/' + project.githubProject.name"
          class="link break-all"
        >
          read more...
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IAllProjectData } from "@/model/project";
import { Options, Vue } from "vue-class-component";
import GithubStarButton from "@/components/github/GithubStarButton.vue";
import GithubLanguages from "@/components/github/GithubLanguages.vue";

@Options({
  props: ["project", "disable-link"],
  components: {
    GithubStarButton,
    GithubLanguages,
  },
})
export default class GithubProject extends Vue {
  public project!: IAllProjectData;
  public disableLink!: boolean;
}
</script>
