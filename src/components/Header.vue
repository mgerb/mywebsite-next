<template>
  <div class="header">
    <div class="absolute left-1 bottom-1 text-gray-400 text-xs">
      Moab, Utah
      <br />
      Mesa Arch - April 2021
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  background: url(../assets/background.jpeg);
  background-size: cover;
  height: 30em;
  background-position: 50% 50%;

  &__text {
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    color: gray;
  }
}
</style>
