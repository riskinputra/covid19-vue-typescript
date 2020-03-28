import methods from '../method'

const getGlobalCase = () => methods.GET_API_GLOBAL('/api')
const getCountries = (country: string) => methods.GET_API_GLOBAL(`/api/countries/${country}`)

export default {
  getGlobalCase,
  getCountries
}