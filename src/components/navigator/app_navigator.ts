import * as React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { DomainFactory } from '../../domain'
import { ScreenProvider } from '../screens'

const domainFactory = new DomainFactory()
const screenProvider = new ScreenProvider(domainFactory)

const routes = () => {
    Home: {
        screen: screenProvider.Home(),
        header: () => ({
            header: <View />
        })
    }
}

const stackConfig = {
    headerMode: 'screen',
    navigationOptions: ({ navigation: { } }) => ({
      gesturesEnabled: false,
      cardStyle: {
        backgroundColor: '#fff'
      }
    })
}

export default createStackNavigator(routes, stackConfig)