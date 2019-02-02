import { AsyncStorage } from 'react-native'

/*
 * 認証管理
 */
const KEY = 'user'

export default class AuthStorage {
  async loadUser() {
    return await AsyncStorage.getItem(KEY)
  }

  async saveUser(user: Object) {
    await AsyncStorage.setItem(KEY, JSON.stringify(user))
  }
}
