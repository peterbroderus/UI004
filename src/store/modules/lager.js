/* eslint-disable no-unused-vars */
const lager = {
  namespaced: true,
  state() {
    return {
      lagerList: {
        slider_1: {
          id: "lagerSlide_1",
          name: "Utleverans",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        slider_2: {
          id: "lagerSlide_2",
          name: "Retur",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        slider_3: {
          id: "lagerSlide_3",
          name: "Pack",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        slider_4: {
          id: "lagerSlide_4",
          name: "Inleverans",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        slider_5: {
          id: "lagerSlide_5",
          name: "Lager Nya",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        slider_6: {
          id: "lagerSlide_6",
          name: "Lager Kontor",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
      },
    };
  },
  mutations: {
    setPowerFeedback(state, { id, power }) {
      state.lagerList[id].power = power;
    },
    setPower(state, { id, power }) {
      // Empty mutation for Vuex
    },
  },
  actions: {},
  getters: {},
};

export default lager;
