import React from 'react'
import { Alert, View } from 'react-native'
import { compose } from 'recompose'
import Input from '../parts/Input'
import Button from '../parts/Button'
const styles = require('../../styles/Container')

export default () => {
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
                <Button>さ っそく始める</Button>
            </View>
        </View>
    )
}