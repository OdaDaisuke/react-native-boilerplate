// @flow

import React from 'react'
import Navigation, { createStackNavigator } from 'react-navigation'
import Header from '../components/parts/Header'
import Home from '../components/screens/Home'
import Profile from '../components/screens/Profile'
import Signup from '../components/screens/Signup'

type NavigationOptionsProps = {
    goBack: any
}

const routes = {
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: <Header title="ホーム" />
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: ( navigation: NavigationOptionsProps ) => ({
            header: <Header title="プロフィール" goBack={navigation.goBack} />
        })
    },
    Signup: {
        screen: Signup,
        navigationOptions: () => ({
            header: <Header title="サインアップ" />
        })
    },
}

const stackConfig: Navigation.StackNavigatorConfig = {
    headerMode: 'screen',
}

export default createStackNavigator(routes, stackConfig)