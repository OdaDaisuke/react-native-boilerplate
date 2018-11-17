import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './components/parts/button'

export default class Root extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button>Press me</Button>
                <Text>Hello React Native.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})