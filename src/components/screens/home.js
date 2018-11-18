// @flow

import React from 'react'
import { View, ScrollView } from 'react-native'
import { observer } from 'mobx-react/native'
import { compose } from 'recompose'
import Button from '../parts/Button'
import CardGrid from '../parts/CardGrid'
import SectionHead from '../parts/SectionHead'
import LatestCarousel from '../parts/LatestCarousel'
import styles from '../../styles/Container'

const enhance = compose(
    observer,
)

export default enhance( ( props: Object ) => {
    return (
        <ScrollView>
            <LatestCarousel />
            <View style={styles.container}>
                <SectionHead>ジャンル</SectionHead>
                <CardGrid cols={2} />
                <Button onPress={() => props.navigation.navigate('Profile')}>プロフィールへ</Button>
            </View>
        </ScrollView>
    )
})