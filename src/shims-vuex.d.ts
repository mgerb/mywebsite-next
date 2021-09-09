import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    aboutMeOpen: boolean;
    projectPageScrollTop: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
