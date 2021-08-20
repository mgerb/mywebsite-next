<template>
  <div>Languages</div>
  <div>{{ name }}</div>
  <div>{{ count }}</div>
  <button v-on:click="increment">Increment</button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Languages extends Vue {
  name = "test";
  count = 0;

  increment(): void {
    this.count++;
  }
}
</script>
