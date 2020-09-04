import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {NOTES} from '../../data/dummy'

const NoteScreen = (props) => {
  const noteData = NOTES[0]
  return (
    <View style={styles.note}>
      <Text>{noteData.title}</Text>
      <Text>{noteData.date}</Text>
      <View>
        <Text>{noteData.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  note: {
    flex: 1,
    width: '100%',
  },
})

export default NoteScreen
