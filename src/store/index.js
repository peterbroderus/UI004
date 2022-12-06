import { createStore } from "vuex";
import lager from "./modules/lager";
import crestron from "./plugins/crestron";

export default createStore({
  state() {
    return {
      systemName: "",
    };
  },
  mutations: {
    setSystemName(state, systemName) {
      state.systemName = systemName;
    },
  },
  modules: {
    lager: lager,
    //counter: counter,
    //displays: displays,
  },
  plugins: [crestron()],
});
