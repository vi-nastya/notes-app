import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {NOTES} from '../../data/dummy'
import {TouchableOpacity} from 'react-native-gesture-handler'

const NotesScreen = (props) => {
  return (
    <View style={styles.notesList}>
      <Text>Notes list</Text>
      {NOTES.map((note, index) => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Note')
          }}>
          <View key={`note-${index}`} style={styles.noteCard}>
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
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default NotesScreen
