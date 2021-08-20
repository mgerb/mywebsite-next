<template>
  <div class="about-me">
    <div class="about-me__image-container">
      <img src="../assets/me.jpeg" />
    </div>
    <div class="px-2 mt-2">
      My name is Mitchell and I have a passion for software development. I am
      currently a software engineer and enjoy working on personal projects in my
      free time.
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class AboutMe extends Vue {}
</script>

<style lang="scss" scoped>
.about-me {
  position: relative;
  top: -100px;
  width: 300px;

  &__image-container {
    height: auto;
    width: auto;
    border-radius: 1rem;
    border-width: 4px;
    border-color: white;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
