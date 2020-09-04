import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {NOTES} from 'notesApp/data/dummy'

const NoteScreen = (props) => {
  const noteId = props.navigation.getParam('noteId')
  const noteData = NOTES.find((nt) => nt.id === noteId)

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

NoteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('noteTitle'),
  }
}

const styles = StyleSheet.create({
  note: {
    flex: 1,
    width: '100%',
  },
})

export default NoteScreen
