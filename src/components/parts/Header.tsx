import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo'
import { Ionicons } from '@expo/vector-icons'
const styles = require('../../styles/Header')

export default ( { title, goBack }: any ) => {

  return (
    <LinearGradient 
        colors={['#4c669f', '#3b5998', '#192f6a']} 
        start={[0.0, 1]} 
        end={[1, 1]}
        style={styles.header}
    >
        <GoBack onPress={goBack} />
        <Text style={styles.label}>{title}</Text>
    </LinearGradient>
  )
}

const GoBack = ({ onPress }: any) => {
    if(!onPress) {
        return null
    }
    return (
        <TouchableOpacity style={styles.backIconContainer} onPress={() => onPress()}>
            <Ionicons name='ios-arrow-back' style={styles.backIcon}/>
        </TouchableOpacity>
    )
}