<template>
  <div class="flex flex-wrap mb-12 justify-between">
    <div class="mb-4" :style="{ width: '250px' }">
      <h2 class="text-2xl mb-2">
        <router-link
          v-if="!disableLink"
          :to="'/projects/' + project.githubProject.name"
          class="link break-all"
        >
          {{ project.githubProject.name }}
        </router-link>
        <a
          v-if="disableLink"
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

    <div>
      {{ project.project.description }}
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
