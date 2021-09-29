import { createStore } from "vuex";

export class Mutations {
  static TOGGLE_ABOUT_ME = "toggleAboutMe";
  static SET_SCROLL_TOP = "setScrollTop";
}

export default createStore({
  state: {
    aboutMeOpen: false,
    scrollTop: 0,
  },
  mutations: {
    [Mutations.TOGGLE_ABOUT_ME](state, open) {
      state.aboutMeOpen = open !== undefined ? open : !state.aboutMeOpen;
    },
    [Mutations.SET_SCROLL_TOP](state, scrollTop) {
      state.scrollTop = scrollTop;
    },
  },
  actions: {},
  modules: {},
  getters: {},
});
