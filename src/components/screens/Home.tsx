import React, { FunctionComponent } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo'
import { compose, lifecycle } from 'recompose'
import LottieView from 'lottie-react-native'
const loading = require('../../animations/favorite_app_icon.json')
import Button from '../parts/Button'
import CardGrid from '../parts/CardGrid'
import SectionHead from '../parts/SectionHead'
import LatestCarousel from '../parts/LatestCarousel'
import ArtistListSection from '../parts/ArtistListSection'
const styles = require('../../styles/Container')

const enhance = compose(
    lifecycle({
        componentDidMount() {
        }
    })
)

export default enhance( ( props: any ) => {
    return (
        <ScrollView>
            <View>
                <LatestCarousel />
                <View style={styles.container}>
                    <SectionHead isWhite>ジャンル</SectionHead>
                    <CardGrid cols={2} />
                </View>
                <LinearGradient
                    colors={['#d6c335', '#fda085']} 
                    start={[0.0, 1]} 
                    end={[1, 1]}
                    style={styles.sectionGrad}
                >
                    <SectionHead isWhite centered>オススメのアーティスト</SectionHead>
                    <ArtistListSection />
                </LinearGradient>
                <View style={styles.container}>
                <LottieView
                    ref={(refs) => {
                        // this.loadingAnimation = refs;
                    }}
                    source={loading}
                />
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