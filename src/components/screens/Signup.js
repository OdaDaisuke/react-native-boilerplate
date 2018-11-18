// @flow

import React from 'react'
import { Alert, View } from 'react-native'
import { observer, inject } from 'mobx-react/native'
import { compose } from 'recompose'
import Input from '../parts/Input'
import Button from '../parts/Button'
import styles from '../../styles/Container'

const enhancer = compose(
    inject("application"),
    observer,
)

export default enhancer( ( { application } : Object ) => {
    return (
        <View style={styles.container}>
            <View style={styles.signupInner}>
                <View style={styles.signupForm}>
                    <Input
                        label="メールアドレス"
                        onChangeText={(text) => Alert.alert(text)}
                    />
                    <Input
                        label="パスワード"
                        onChangeText={(text) => Alert.alert(text)}
                    />
                </View>
                <Button onPress={() => application.accountService.signup()}>さっそく始める</Button>
            </View>
        </View>
    )
})