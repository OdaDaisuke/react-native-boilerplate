import axios, { AxiosError, AxiosInstance } from "axios"

export default class APIClient {
    authToken: string | null = null
    axios: AxiosInstance

    constructor(baseURL: string) {
        this.axios = axios.create({ baseURL, })

        this.interceptSetting()
    }

    setAuthToken(authToken: string) {
        this.authToken = authToken
    }

    async testApiConnection() {
        return await this.axios.get('/sample_endpoint')
    }

    /*
     * private methods
     */
    interceptSetting() {
        this.axios.interceptors.request.use((req) => {
            if (this.authToken) {
                const header = {
                    Authorization: `Bearer ${ this.authToken }`
                }
                req.headers = Object.assign({}, req.headers, header )
            }
            return req
        })

        this.axios.interceptors.response.use((res) => {
            return res
        }, (error) => {
            this.onError(error)
        })
    }

    onError( error: AxiosError | Error ) {
        throw error
    }
}