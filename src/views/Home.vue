<template>
  <Header />

  <div class="home__body ml-auto mr-auto md:relative flex pr-2 pl-2">
    <div class="p-4 flex-1 min-w-0">
      <router-view class="mt-2" />
    </div>

    <about-me />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AboutMe from "@/components/AboutMe.vue";
import Header from "@/components/Header.vue";

@Options({
  components: {
    AboutMe,
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  &__body {
    max-width: 1200px;
  }
}
</style>
