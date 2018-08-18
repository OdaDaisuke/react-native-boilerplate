import { AsyncStorage } from 'react-native'

export class Storage {
    constructor() {
    }

    async isAppOpened() {
        return await AsyncStorage.getItem('opened')
    }
}