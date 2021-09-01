<template>
  <div class="lang-bar mb-2">
    <div
      class="lang-bar__item"
      :key="index"
      v-for="(language, index) in getSortedLangs()"
      :style="{
        width: language.percentage + '%',
        backgroundColor: language.color,
      }"
    ></div>
  </div>

  <div class="-ml-4 flex flex-wrap font-normal" :style="{ width: '250px' }">
    <div
      class="ml-4 flex items-center"
      v-for="(language, index) in project.languages"
      :key="index"
    >
      <div class="flex items-center justify-center mr-1">
        <div
          class="lang-dot"
          v-bind:style="{ background: language.color }"
        ></div>
      </div>
      <span>
        {{ language.name }}
        <span class="font-light text-sm">{{ language.percentage }}%</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { IAllProjectData, IGithubLanguage } from "@/model/project";
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["project"],
})
export default class GithubLanguages extends Vue {
  public project!: IAllProjectData;

  public getSortedLangs(): IGithubLanguage[] {
    return (
      this.project?.languages.sort((a, b) => (a.weight > b.weight ? -1 : 1)) ||
      []
    );
  }
}
</script>

<style lang="scss" scoped>
.lang-bar {
  width: 250px;
  height: 8px;
  display: flex;
  overflow: hidden;
  border-radius: 6px;
  outline: 1px solid transparent;

  &__item {
    outline: 2px solid transparent;

    & + & {
      margin-left: 2px;
    }
  }
}

.lang-dot {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
}
</style>
