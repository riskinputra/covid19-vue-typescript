import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { HistoryState } from '@/types/history'
import { RootState } from '@/types/rootState';

export const state: HistoryState = {
  history: {
    nodes: [],
    links: []
  },
  error: false
};

const namespaced = true;

export const historyCaseState: Module<HistoryState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
