import Vuex from 'vuex';
import cars from './modules/cars';
import race from './modules/race';

export default () => {
  return new Vuex.Store({
    modules: {
      cars,
      race,
    },
  });
};
