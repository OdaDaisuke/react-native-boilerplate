import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default ( { title, goBack } ) => {

  return (
    <View>
        {(() => {
            return goBack ?
            (
                <TouchableOpacity onPress={() => goBack()}>
                </TouchableOpacity>
            ) : null
        })()}

        <Text>
            {title}
        </Text>
    </View>
  )
}
