import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { CountriesState } from '@/types/countries'
import { RootState } from '@/types/rootState';

export const state: CountriesState = {
  countryCase: {
    confirmed: {
      value: 0,
      detail: ''
    },
    recovered: {
      value: 0,
      detail: ''
    },
    deaths: {
      value: 0,
      detail: ''
    },
    lastUpdate: ''
  },
  countries: [],
  error: false
};

const namespaced = true;

export const countriesCaseState: Module<CountriesState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
