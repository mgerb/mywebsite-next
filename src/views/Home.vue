<template>
  <Header />

  <div class="home__body ml-auto mr-auto relative flex pr-2 pl-2">
    <div class="mr-2 mt-6 text-right">
      <router-link to="projects" class="block text-3xl mb-2">
        Projects
      </router-link>
      <router-link to="blog" class="block text-3xl mb-2">Blog</router-link>
    </div>

    <div class="p-2 flex-1">
      <router-view class="mt-2" />
    </div>

    <AboutMe />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Languages from "@/components/Languages.vue";
import AboutMe from "@/components/AboutMe.vue";
import Header from "@/components/Header.vue";

@Options({
  components: {
    AboutMe,
    Header,
    Languages,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  &__body {
    max-width: 1100px;
  }
}
</style>
