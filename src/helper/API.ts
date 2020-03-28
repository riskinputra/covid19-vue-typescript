import axios from 'axios'

const API_DEFAULT: any = axios.create({
  baseURL: 'https://covid19.mathdro.id',
  headers: {
    'Content-Type': 'application/json'
  }
})

const API_HISTORY: any = axios.create({
  baseURL: 'https://louislugas.github.io/covid_19_cluster/json/kasus-corona-indonesia.json',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  API_DEFAULT,
  API_HISTORY
}