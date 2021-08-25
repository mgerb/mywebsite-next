<template>
  <Header />

  <div class="home__body ml-auto mr-auto md:relative flex pr-2 pl-2">
    <div class="p-4 flex-1">
      <div class="flex space-between items-center">
        <div class="flex-1">
          <router-link to="projects" class="link text-3xl">
            Projects
          </router-link>
          <router-link to="blog" class="link text-3xl ml-6">Blog</router-link>
        </div>
        <a href class="link text-xl md:hidden" v-on:click="aboutMeClick">
          About Me
        </a>
      </div>
      <hr class="my-4" />
      <router-view class="mt-2" />
    </div>

    <about-me />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Languages from "@/components/Languages.vue";
import AboutMe from "@/components/AboutMe.vue";
import Header from "@/components/Header.vue";
import { Mutations } from "@/store";

@Options({
  components: {
    AboutMe,
    Header,
    Languages,
  },
})
export default class Home extends Vue {
  aboutMeClick(e: any): void {
    e.preventDefault();
    this.$store.commit(Mutations.TOGGLE_ABOUT_ME);
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__body {
    max-width: 1200px;
  }
}
</style>
