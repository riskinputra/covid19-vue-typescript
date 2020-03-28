import { MutationTree } from 'vuex';

import { GlobalCaseState, GlobalCaseTypes } from '@/types/globalCase'

export const mutations: MutationTree<GlobalCaseState> = {
  setStateGlobal(state, payload: GlobalCaseTypes) {
        state.error = false;
        state.globalCase = payload;
    }
};