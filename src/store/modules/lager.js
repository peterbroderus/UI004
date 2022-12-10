/* eslint-disable no-unused-vars */
const lager = {
  namespaced: true,
  state() {
    return {
      lagerList: [
        {
          id: "lagerSlide_1",
          name: "Utleverans",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_2",
          name: "Retur",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_3",
          name: "Pack",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_4",
          name: "Inleverans",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_5",
          name: "Lager Nya",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_6",
          name: "Lager Kontor",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
      ],
    };
  },
  mutations: {
    setPowerFeedback(state, { id, power }) {
      state.lagerList[id].power = power;
    },
    setPower(state, { id, power }) {
      // Empty mutation for Vuex
    },
    setPlayer1(state, { id, mediaplayer_1 }) {
      //
    },
    setPlayer2(state, { id, mediaplayer_2 }) {
      //
    },
  },
  actions: {},
  getters: {},
};

export default lager;
