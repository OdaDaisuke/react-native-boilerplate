import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/button.scss'

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
      	<Text style={styles.buttonLabel}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }

}
