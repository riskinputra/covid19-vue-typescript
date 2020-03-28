import { MutationTree } from 'vuex';

import { HistoryState, HistoryTypes } from '@/types/history'

export const mutations: MutationTree<HistoryState> = {
  setStateHistory(state, payload: HistoryTypes) {
        state.error = false;
        state.history = payload;
    }
};