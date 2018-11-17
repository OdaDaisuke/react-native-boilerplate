import React from 'react'
import Expo from 'expo'
import AppNavigator from './navigator/AppNavigator'

export default Expo.registerRootComponent(() => <AppNavigator />)