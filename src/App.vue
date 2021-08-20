<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "./views/Home.vue";

@Options({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
