import { ActionTree } from 'vuex';

import { HistoryState } from '@/types/history'
import { RootState } from '@/types/rootState';

import API_SERVIES from '@/services'


export const actions: ActionTree<HistoryState, RootState> = {
  async getHistory({ commit }) {
    return new Promise((resoleve, reject) => {
      API_SERVIES.historyAPI.getHistory()
        .then((res: any) => {
          commit('setStateHistory', res.data)
          resoleve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }
};
