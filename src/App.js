// @flow

import React from 'react'
import Expo from 'expo'
import addNavigationHelpers from 'react-navigation/src/addNavigationHelpers'
import { lifecycle, compose } from 'recompose'
import { observer, Provider, inject } from 'mobx-react/native'
import AppNavigator from './navigator/AppNavigator'
import { stores } from './stores'

const enhancer = compose(
    inject("application", "appNavigator"),
    lifecycle({
        async componentDidMount() {
            // 何か処理
        }
    }),
    observer,
)

const App = enhancer(({application, appNavigator}: Object) => {
    const navigation = addNavigationHelpers({
        addListener: () => {},
        dispatch: appNavigator.dispatch,
        state: appNavigator.navigationState,
    })

    return <AppNavigator navigation={navigation} />

})

export default Expo.registerRootComponent(() => <Provider {...stores}><App /></Provider>)