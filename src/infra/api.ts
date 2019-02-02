import axios, { AxiosError, AxiosInstance } from 'axios'

export default class APIClient {
  authToken: string | null = null
  axios: AxiosInstance

  constructor(baseURL: string) {
    this.axios = axios.create({ baseURL })

    this.setIntercept()
  }

  setAuthToken(authToken: string) {
    this.authToken = authToken
  }

  async testConnection() {
    return await this.axios.get('/sample_endpoint')
  }

  private setIntercept() {
    this.axios.interceptors.request.use(req => {
      if (this.authToken) {
        const header = {
          Authorization: `Bearer ${this.authToken}`
        }
        req.headers = Object.assign({}, req.headers, header)
      }

      return req
    })
  }

  onError(error: AxiosError | Error) {
    throw error
  }
}
