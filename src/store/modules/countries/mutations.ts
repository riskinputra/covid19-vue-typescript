import { MutationTree } from 'vuex';

import { CountriesState, CountriesList, CountryCaseType } from '@/types/countries'

export const mutations: MutationTree<CountriesState> = {
  setListCountry(state, payload: CountriesList) {
    state.error = false;
    state.countries = payload;
  },
  setCaseByCountry(state, payload: CountryCaseType) {
    state.countryCase = payload;
  }
};