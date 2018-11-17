/*
 * 認証管理
 */
const AUTH_STATUS_KEY = "auth_status"
const AUTH_TOKEN_KEY = "auth_token"

export class Auth {
    storage = localStorage

    constructor() {
    }

    /*
     * Auth status
     */
    saveAuthStatus(authStatus) {
        this.save(AUTH_STATUS_KEY, JSON.stringify(authStatus))
    }

    loadAuthStatus() {
        return this.load(AUTH_STATUS_KEY)
    }

    destroyAuthStatus() {
        this.storage.removeItem(AUTH_STATUS_KEY)
    }

    /*
     * Auth token
     */
    saveAuthToken(authToken) {
        this.save(AUTH_STATUS_KEY, JSON.stringify(authToken))
    }

    loadAuthToken() {
        return this.load(AUTH_TOKEN_KEY)
    }

    destroyAuthToken() {
        this.storage.removeItem(AUTH_TOKEN_KEY)
    }

    /*
     * private methods
     */
    load(key) {
        try {
            const v = this.storage.getItem(key)
            if(v) {
                return JSON.parse(v)
            }
            return null
        } catch {
            return null
        }
    }

    save(key, content) {
        this.storage.setItem(key, content)
    }
}