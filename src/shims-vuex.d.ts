import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    aboutMeOpen: boolean;
    scrollTop: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
