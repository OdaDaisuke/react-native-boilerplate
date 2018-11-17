// @flow

import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react/native'
import { compose } from 'recompose'
import Button from '../parts/Button'
import CardList from '../parts/CardList'
import SectionHead from '../parts/SectionHead'
import styles from '../../styles/Container'

const enhancer = compose(
    observer,
)

export default enhancer( ( {navigation}: Object) => {
    const { navigate } = navigation
    return (
        <View style={styles.container}>
            <Button onPress={() => navigate('Profile')}>Press me</Button>
            <SectionHead>ジャンル</SectionHead>
            <CardList cols={2} />
        </View>
    )
})