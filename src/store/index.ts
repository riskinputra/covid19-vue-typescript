import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/types/rootState';
import { globalCase } from './modules/globalCase/index';
import { historyCaseState } from './modules/history/index';
import { countriesCaseState } from './modules/countries/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
      version: '1.0.0' // a simple property
  },
  modules: {
    globalCase,
    history: historyCaseState,
    countries: countriesCaseState
  }
};

export default new Vuex.Store<RootState>(store);
