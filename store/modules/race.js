const race = {
  namespaced: true,
  state: {
    tours: [
      {index:1, m: 1000, tourLength: "1000m" },
      {index:2,  m: 1500, tourLength: "1500m" },
      {index:3,  m: 2000, tourLength: "2000m" },
      {index:4,  m: 2500, tourLength: "2500m" },
      {index:5,  m: 3000, tourLength: "3000m" },
    ],
    currentTour: 1,
    raceStatus: "not started",
    running:false
  },
  mutations: {
    addCar(state, car) {
      state.cars.push(car);
    },
    next(state) {
      state.currentTour++;
    },
    changeRaceStatus(state, status) {
      state.raceStatus = status;
    },
    changeRunning(state, status) {
      state.running = status;
    },
  },
  actions: {
    nextTour({ commit }) {
      commit("next");
    },
    changeRaceStatus({ commit }, status) {
      commit("changeRaceStatus", status);
    },
    changeRunning({ commit }, status) {
      commit("changeRunning", status);
    },
  },
  getters: {
    getTours(state) {
      return state.tours;
    },
    currentTour(state) {
      return state.currentTour;
    },
    raceStatus(state) {
      return state.raceStatus;
    },
  },
};

export default race;