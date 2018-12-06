// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo'
import styles from '../../styles/Button.scss'

type ButtonProps = {
  onPress: () => void
}

export default (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']} 
        start={{x: 0.0, y: 1}} 
        end={{x: 1, y: 1}}
        style={styles.innerGrad}
      >
        <Text style={styles.buttonLabel}>{props.children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
