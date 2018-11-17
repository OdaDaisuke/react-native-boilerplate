import React from 'react'
import Expo from 'expo'
import AppNavigator from './navigator/AppNavigator'
import { lifecycle, compose } from 'recompose'
import { observer, Provider, inject } from 'mobx-react/native'
import { stores } from './stores'

const enhancer = compose(
    inject("application"),
    lifecycle({
        async componentDidMount() {
            // 何か処理
        }
    }),
    observer,
)

const App = enhancer(() => {
    return (
        <Provider {...stores}>
            <AppNavigator />
        </Provider>
    )
})

export default Expo.registerRootComponent(() => <App />)