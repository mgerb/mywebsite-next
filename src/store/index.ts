import { createStore } from "vuex";

export class Mutations {
  static TOGGLE_ABOUT_ME = "toggleAboutMe";
  static SET_PROJECT_PAGE_SCROLL_TOP = "setProjectPageScrollTop";
}

export default createStore({
  state: {
    aboutMeOpen: false,
    projectPageScrollTop: 0,
  },
  mutations: {
    [Mutations.TOGGLE_ABOUT_ME](state, open) {
      state.aboutMeOpen = open !== undefined ? open : !state.aboutMeOpen;
    },
    [Mutations.SET_PROJECT_PAGE_SCROLL_TOP](state, scrollTop) {
      state.projectPageScrollTop = scrollTop;
    },
  },
  actions: {},
  modules: {},
  getters: {},
});
