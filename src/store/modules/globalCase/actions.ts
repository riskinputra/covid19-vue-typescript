import { ActionTree } from 'vuex';
import { result } from 'lodash'

import { GlobalCaseState } from '@/types/globalCase'
import { RootState } from '@/types/rootState';

import API_SERVIES from '@/services'

import formatDate from '@/helper/formatDate'
import numberWithCommas from '@/helper/numberWithCommas'

export const actions: ActionTree<GlobalCaseState, RootState> = {
  async getGlobalCase({ commit }) {
    return new Promise((resoleve, reject) => {
      API_SERVIES.globalCaseAPI.getGlobalCase()
        .then((res: any) => {
          res.data.lastUpdate = formatDate(result(res.data, 'lastUpdate'))
          res.data.confirmed.value = numberWithCommas(result(res.data, 'confirmed.value'))
          res.data.recovered.value = numberWithCommas(result(res.data, 'recovered.value'))
          res.data.deaths.value = numberWithCommas(result(res.data, 'deaths.value'))
          commit('setStateGlobal', res.data)
          resoleve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }
};
