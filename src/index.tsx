import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Expo from 'expo'
import { lifecycle, compose } from 'recompose'
import { PersistGate } from 'redux-persist/integration/react'
import { firebaseInit } from './infra/firebase'
import AppNavigator from './navigator/AppNavigator'
import configureStore from './stores/store'
import Loading from './components/screens/Loading'

const { persistor, store } = configureStore()

const enhance = compose(
    lifecycle({
        async componentDidMount() {
            firebaseInit()
        }
    }),
)

const App = enhance( (props: any) => {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<Loading />}
                onBeforeLift={ () => {} }
                persistor={persistor}
            >
                <SafeAreaView>
                    <AppNavigator />
                </SafeAreaView>
            </PersistGate>
        </Provider>
    )
})

export default Expo.registerRootComponent(() => <App />)