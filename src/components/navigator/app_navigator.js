import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from '../screens/home'

const routes = {
    Home: {
        screen: Home,
    }
}

const stackConfig = {
    headerMode: 'screen',
    initialRouteName: 'Home',
}

export default createStackNavigator(routes, stackConfig)