// @flow

import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { observer } from 'mobx-react/native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import { compose } from 'recompose'
import Button from '../parts/Button'
import CardGrid from '../parts/CardGrid'
import SectionHead from '../parts/SectionHead'
import LatestCarousel from '../parts/LatestCarousel'
import ArtistListSection from '../parts/ArtistListSection'
import styles from '../../styles/Container'

const enhance = compose(
    observer,
)

export default enhance( ( props: Object ) => {
    return (
        <ScrollView>
            <View>
                <LatestCarousel />
                <View style={styles.container}>
                    <SectionHead>ジャンル</SectionHead>
                    <CardGrid cols={2} />
                </View>
                <LinearGradient
                    colors={['#d6c335', '#fda085']} 
                    start={{x: 0.0, y: 1}} 
                    end={{x: 1, y: 1}}
                    style={styles.sectionGrad}
                >
                    <SectionHead isWhite centered>オススメのアーティスト</SectionHead>
                    <ArtistListSection />
                </LinearGradient>
                <View style={styles.container}>
                    <Button onPress={() => props.navigation.navigate('Profile')}>
                        <Ionicons
                            name="md-checkmark-circle"
                            size={16}
                            color="white"
                        />
                        <Text style={styles.pl1}>ギフトを受け取る</Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
})