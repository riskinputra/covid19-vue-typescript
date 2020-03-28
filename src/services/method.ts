import API_SETUP from '@/helper/API'
import { globalCaseTypes } from '@/types/globalCase'

const GET_API_GLOBAL = (path: string) => {
  const promise = new Promise((resolve, reject) => {
    API_SETUP.API_DEFAULT.get(path)
      .then((result: globalCaseTypes) => {
        resolve(result)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
  return promise
}

const GET_API_HISTORY = (path: string) => {
  const promise = new Promise((resolve, reject) => {
    API_SETUP.API_HISTORY.get(path)
      .then((result: any) => {
        resolve(result)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
  return promise
}


const methods = {
  GET_API_GLOBAL,
  GET_API_HISTORY
}

export default methods