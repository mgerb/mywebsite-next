import { createStore } from "vuex";

export class Mutations {
  static TOGGLE_ABOUT_ME = "toggleAboutMe";
}

export default createStore({
  state: {
    aboutMeOpen: false,
  },
  mutations: {
    [Mutations.TOGGLE_ABOUT_ME](state, open) {
      state.aboutMeOpen = open !== undefined ? open : !state.aboutMeOpen;
    },
  },
  actions: {},
  modules: {},
  getters: {},
});
