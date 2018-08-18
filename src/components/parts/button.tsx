import * as React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

interface IButtonProps {
  onPress: any
}

export class Button extends React.Component<IButtonProps, any> {
  render() {
    return (
      <TouchableOpacity style={this.styles.button} onPress={this.props.onPress}>
	<Text style={this.styles.label}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }

  get styles() {
    return StyleSheet.create({
      button: {
	backgroundColor: 'rgb(7, 71, 166)',
	margin: 5,
	paddingVertical: 7,
	paddingHorizontal: 12
      },
      label: {
	color: '#ffffff',
      },
    })
  }
}
