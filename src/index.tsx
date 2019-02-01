import * as React from 'react'
import Expo from 'expo'
import { NavigationProp } from 'react-navigation'
import { lifecycle, compose } from 'recompose'
import { observer, Provider, inject } from 'mobx-react/native'
import { firebaseInit } from './infra/firebase'
import AppNavigator from './navigator/AppNavigator'
import { stores } from './stores'

const enhance = compose(
    inject("application", "appNavigation"),
    lifecycle({
        async componentDidMount() {
            firebaseInit()
        }
    }),
    observer,
)

const App = enhance(({application, appNavigation}: any) => {
    return <AppNavigator />
})

export default Expo.registerRootComponent(() => <Provider {...stores}><App /></Provider>)