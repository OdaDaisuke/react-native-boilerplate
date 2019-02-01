import React from 'react'
import { View, Text } from 'react-native'
const styles = require('../../styles/SectionHead.scss')

type SectionHeadProps = {
  isWhite: boolean,
  children?: any,
  centered?: boolean
}

export default (props: SectionHeadProps) => {
  const wrapperStyle = (props.centered) ? styles.centeredContainer: {}
  const style = (props.isWhite) ? styles.whiteLabel : styles.label
  return (
    <View style={wrapperStyle}>
      <Text style={style}>{props.children}</Text>
    </View>
  )
}
