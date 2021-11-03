<template>
  <div>
    <div v-for="(intro, index) in blogIntros" v-bind:key="index" class="mb-6">
      <div class="flex justify-between">
        <h1 class="text-3xl mb-2 mr-2">{{ intro.title }}</h1>
        <span class="text-xs whitespace-nowrap">{{ intro.date }}</span>
      </div>
      <p class="mb-2" v-html="intro.descriptionHTML"></p>
      <div>
        <router-link :to="'/' + intro.filePath" class="link">
          continue reading...
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { ScrollerComponent } from "@/components/abstract/ScrollerComponent";
import { BlogService } from "@/services";
import { IBlogIntro } from "@/model/blog";

@Options({
  components: {
    LoadingIcon,
  },
})
export default class Blog extends ScrollerComponent {
  public blogIntros: IBlogIntro[] = [];

  mounted(): void {
    BlogService.getBlogIntroductions().subscribe((blogIntros) => {
      this.blogIntros = blogIntros || [];
      this.handleScrolling();
    });
  }
}
</script>
