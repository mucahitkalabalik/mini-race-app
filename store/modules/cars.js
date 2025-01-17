const race = {
  namespaced: true,
  state: {
    cars: [
      { id: 1, name: "Ferrari F1", color: "red", speed: 80 },
      { id: 2, name: "McLaren P1", color: "blue", speed: 95 },
      { id: 3, name: "Lamborghini", color: "green", speed: 65 },
      { id: 4, name: "Porsche", color: "yellow", speed: 90 },
      { id: 5, name: "Bugatti", color: "purple", speed: 75 },
      { id: 6, name: "Pagani", color: "orange", speed: 85 },
      { id: 7, name: "Ford GT", color: "black", speed: 70 },
      { id: 8, name: "Dodge Viper", color: "cadetblue", speed: 60 },
      { id: 9, name: "Nissan GT-R", color: "pink", speed: 95 },
      { id: 10, name: "Bmw M5", color: "brown", speed: 80 },
      { id: 11, name: "Chevrolet", color: "gray", speed: 85 },
      { id: 12, name: "Mercedes AMG", color: "cyan", speed: 90 },
    ],
    selectedCars: [],
    start: false,
    program: [],
    results: [],
  },
  mutations: {
    selectRandomCars(state) {
      const selected = [];
      const shuffled = [...state.cars].sort(() => Math.random() - 0.5);
      selected.push(...shuffled.slice(0, 6));
      state.selectedCars = selected;
    },
    start(state, value) {
      state.start = value;
    },
    programCreated(state, rootState) {
      console.log(rootState, "rootState");

      const raceProgram = [];

      rootState.race.tours.forEach((tour, index) => {
        const tourInfo = {
          tourNumber: index + 1,
          tourLength: tour.tourLength,
          selectedCars: rootState.cars.selectedCars,
        };

        raceProgram.push(tourInfo);
      });
      state.program = raceProgram;
    },
    addResult(state, rootState) {
      // state.program'daki verinin derin kopyasını al
      const selectedCars = JSON.parse(JSON.stringify(state.program[rootState.race.currentTour - 2]));
    
      if (selectedCars) {
        // Speed değerine göre azalan sırayla sıralama
        const sortedCars = selectedCars.selectedCars.sort((a, b) => b.speed - a.speed);
    
        // Sıralanmış arabaları işlemden geçirme
        sortedCars.forEach((car) => {
          console.log(`Car Name: ${car.name}, Speed: ${car.speed}`);
          // İlgili işlemleri burada yapabilirsiniz
        });
    
        // Sıralanmış diziyi results içine ekle
        selectedCars.selectedCars = sortedCars;
        state.results.push(selectedCars);
      }
    }
    
  },
  actions: {
    selectRandomCars({ commit, rootState }) {
      commit("selectRandomCars", rootState);
    },
    startRace({ commit }, value) {
      commit("start", value);
    },
    setProgram({ commit, rootState }) {
      commit("programCreated", rootState);
    },
    setReults({ commit, rootState }) {
      commit("addResult", rootState);
    },
  },
  getters: {
    getCars(state) {
      return state.cars;
    },
    selectedCars: (state) => state.selectedCars,
    raceStatus: (state) => state.start,
    program: (state) => state.program,
    getResult: (state) => state.results,
  },
};

export default race;
