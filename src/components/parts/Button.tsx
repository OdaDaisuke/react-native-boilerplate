import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo'
const styles = require('../../styles/Button.scss')

type ButtonProps = {
  onPress: () => void,
  children?: any
}

export default (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']} 
        start={[0.0, 1]} 
        end={[1, 1]}
        style={styles.innerGrad}
      >
        <Text style={styles.buttonLabel}>{props.children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
