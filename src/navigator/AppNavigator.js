// @flow

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Header from '../components/parts/Header'
import Home from '../components/screens/Home'
import Profile from '../components/screens/Profile'

const routes = {
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: <Header title={'ホーム'} />
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation: { goBack }}) => ({
            header: <Header title={'プロフィール'} goBack={goBack} />
        })
    }
}

const stackConfig = {
    headerMode: 'screen',
    initialRouteName: 'Home',
}

export default createStackNavigator(routes, stackConfig)