<template>
  <div class="about-me" :class="{ 'about-me--open': $store.state.aboutMeOpen }">
    <menu-icon
      class="menu-icon md:hidden cursor-pointer text-gray-200"
      v-on:click="menuClick"
    />
    <div class="about-me__image-container">
      <img src="../assets/me.jpeg" />
    </div>
    <div class="px-2 mt-2">
      <div class="flex justify-between">
        <div>
          <p class="flex items-center">
            <home-icon />
            <router-link
              to="/projects"
              class="link ml-1"
              v-on:click="onLinkClick"
            >
              Home
            </router-link>
          </p>
          <p class="flex items-center">
            <atom-icon />
            <router-link to="/blog" class="link ml-1" v-on:click="onLinkClick">
              Blog
            </router-link>
          </p>
        </div>
        <div class="flex flex-col items-end">
          <p class="flex items-center">
            <a
              href="https://github.com/mgerb"
              class="link mr-1"
              target="_blank"
            >
              Github
            </a>
            <github-icon />
          </p>
          <p class="flex items-center">
            <a href="mailto:mgerb42@gmail.com" class="link mr-1">Email</a>
            <mail-icon />
          </p>
          <p class="flex items-center">
            <a
              href="https://www.linkedin.com/in/mitchell-gerber-125391b3/"
              class="link mr-1"
              target="_blank"
            >
              LinkedIn
            </a>
            <linkedin-icon />
          </p>
        </div>
      </div>
      <p>
        My name is Mitchell and I have a passion for software development. I am
        currently a software engineer and enjoy working on personal projects in
        my free time.
      </p>
      <p>
        Check out the source code for this site
        <a
          href="https://github.com/mgerb/mywebsite-next"
          class="link"
          target="_blank"
        >
          here.
        </a>
      </p>
    </div>
  </div>
  <div
    class="overlay"
    v-if="$store.state.aboutMeOpen"
    v-on:click="menuClick"
  ></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import { Mutations } from "@/store";
import AtomIcon from "@/components/icons/AtomIcon.vue";

@Options({
  components: {
    GithubIcon,
    HomeIcon,
    MailIcon,
    LinkedinIcon,
    MenuIcon,
    AtomIcon,
  },
})
export default class AboutMe extends Vue {
  menuClick(): void {
    this.$store.commit(Mutations.TOGGLE_ABOUT_ME);
  }
  onLinkClick(): void {
    this.$store.commit(Mutations.SET_SCROLL_TOP, 0);
    this.$store.commit(Mutations.TOGGLE_ABOUT_ME, false);
  }
}
</script>

<style lang="scss" scoped>
.menu-icon {
  position: absolute;
  left: -54px;
}

.about-me {
  z-index: 1;
  position: relative;
  top: -100px;
  right: 0;
  max-width: 275px;

  @media (max-width: 768px) {
    top: 0;
    position: absolute;
    min-height: 100%;
    background: white;
    transform: translateX(275px);
    transition: transform 0.4s ease-out;

    &--open {
      transform: translateX(0px);
    }
  }

  &__image-container {
    height: auto;
    width: 100%;
    border-radius: 1rem;
    border-width: 4px;
    border-color: white;
    overflow: hidden;
  }
}

.overlay {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
