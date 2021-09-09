<template>
  <div>
    <h1 class="text-3xl">Blog</h1>
    <hr class="my-4" />
    <loading-icon />
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { ScrollerComponent } from "@/components/abstract/ScrollerComponent";

@Options({
  components: {
    LoadingIcon,
  },
})
export default class Blog extends ScrollerComponent {
  mounted(): void {
    this.handleScrolling();
  }
}
</script>
