import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {NOTES} from '../../data/dummy'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {NOTE_COLORS} from '../../constants/colors'

const NotesScreen = (props) => {
  return (
    <View style={styles.notesList}>
      {NOTES.map((note, index) => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Note')
          }}>
          <View
            key={`note-${index}`}
            style={{
              ...styles.noteCard,
              ...{backgroundColor: NOTE_COLORS[note.color]},
            }}>
            <Text>{note.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  notesList: {
    flex: 1,
    width: '100%',
  },
  noteCard: {
    width: '100%',
    padding: 20,
  },
})

export default NotesScreen
