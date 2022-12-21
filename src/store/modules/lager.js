/* eslint-disable no-unused-vars */
const lager = {
  namespaced: true,
  state() {
    return {
      lagerList: [
        {
          id: "lagerSlide_1",
          name: "Test 1",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_2",
          name: "Test 2",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_3",
          name: "Test 3",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_4",
          name: "Test 4",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_5",
          name: "Test 5",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_6",
          name: "Test 6",
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
      state.lagerList.filter((x) => x.id === id)[0].power = power;
    },
    setPlayer1(state, { id, mediaplayer_1 }) {
      //
    },
    setPlayer2(state, { id, mediaplayer_2 }) {
      //
    },
  },
  actions: {
    setSlider(state, { id, slider }) {
      console.log("setSlider");
    },
    setPowerByAction(context, { id, power }) {
      context.commit("setPower", { id, power });
    },
  },
  getters: {
    getLager(state) {
      return state.lagerList;
    },
  },
};

export default lager;
