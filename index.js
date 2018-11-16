import React from 'react'
import Expo from 'expo'
import App from './App'
import Root from './src'

export default Expo.registerRootComponent(() => <App><Root /></App>)