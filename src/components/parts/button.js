import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../../styles/button.scss'

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity className={styles.button} onPress={this.props.onPress}>
      	<Text>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }

}
