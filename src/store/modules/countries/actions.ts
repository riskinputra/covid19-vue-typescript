import { ActionTree } from 'vuex';
import { result } from 'lodash'

import { CountriesState } from '@/types/countries'
import { RootState } from '@/types/rootState';

import API_SERVIES from '@/services'

import formatDate from '@/helper/formatDate'
import numberWithCommas from '@/helper/numberWithCommas'

export const actions: ActionTree<CountriesState, RootState> = {
  async getCountries({ commit }) {
    return new Promise((resoleve, reject) => {
      API_SERVIES.globalCaseAPI.getCountries('')
        .then((res: any) => {
          commit('setListCountry', res.data)
          resoleve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  },

  async getCountriesCase({ commit }, country) {
    return new Promise((resoleve, reject) => {
      API_SERVIES.globalCaseAPI.getCountries(`${country}`)
        .then((res: any) => {
          res.data.lastUpdate = formatDate(result(res.data, 'lastUpdate'))
          res.data.confirmed.value = numberWithCommas(result(res.data, 'confirmed.value'))
          res.data.recovered.value = numberWithCommas(result(res.data, 'recovered.value'))
          res.data.deaths.value = numberWithCommas(result(res.data, 'deaths.value'))
          commit('setCaseByCountry', res.data)
          resoleve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }
};
