// @flow

import React from 'react'
import Expo from 'expo'
import addNavigationHelpers from 'react-navigation/src/addNavigationHelpers'
import { lifecycle, compose } from 'recompose'
import { observer, Provider, inject } from 'mobx-react/native'
import { firebaseInit } from './infra/firebase'
import AppNavigator from './navigator/AppNavigator'
import { stores } from './stores'

const enhancer = compose(
    inject("application", "appNavigation"),
    lifecycle({
        async componentDidMount() {
            firebaseInit()
        }
    }),
    observer,
)

const App = enhancer(({application, appNavigation}: Object) => {
    const navigation = addNavigationHelpers({
        addListener: () => {},
        dispatch: appNavigation.dispatch,
        state: appNavigation.navigationState,
    })

    appNavigation.setNavigation(navigation)

    return <AppNavigator navigation={navigation} />

})

export default Expo.registerRootComponent(() => <Provider {...stores}><App /></Provider>)