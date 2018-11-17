import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Header from '../components/parts/Header'
import Home from '../components/screens/Home'

const routes = {
    Home: {
        screen: Home,
        navigationOptions: () => ({
            header: <Header title={'Home'} />
        })
    }
}

const stackConfig = {
    headerMode: 'screen',
    initialRouteName: 'Home',
}

export default createStackNavigator(routes, stackConfig)