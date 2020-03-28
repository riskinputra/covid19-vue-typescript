import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { GlobalCaseState } from '@/types/globalCase'
import { RootState } from '@/types/rootState';

export const state: GlobalCaseState = {
  globalCase: {
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
    dailySummary: '',
    dailyTimeSeries: {
      pattern: '',
      example: ''
    },
    image: '',
    source: '',
    countries: '',
    countryDetail: {
      pattern: '',
      example: ''
    },
    lastUpdate: ''
  },
  error: false
};

const namespaced = true;

export const globalCase: Module<GlobalCaseState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
