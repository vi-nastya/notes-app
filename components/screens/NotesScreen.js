import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {NOTES} from 'notesApp/data/dummy'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {NOTE_COLORS} from 'notesApp/constants/colors'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

const NotesScreen = (props) => {
  const selectItemHandler = (id, title) => {
    props.navigation.navigate('Note', {
      noteId: id,
      noteTitle: title,
    })
  }
  return (
    <FlatList
      data={NOTES}
      renderItem={(itemData) => (
        <TouchableOpacity
          onPress={() =>
            selectItemHandler(itemData.item.id, itemData.item.title)
          }>
          <View
            style={{
              ...styles.noteCard,
              ...{backgroundColor: NOTE_COLORS[itemData.item.color]},
            }}>
            <Text>{itemData.item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

NotesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Notes',
    headerRight: () => (
      <HeaderButtons
        HeaderButtonComponent={() => <View style={styles.headerBtn} />}>
        <Item
          title="Add"
          onPress={() => navData.navigation.navigate('NoteForm')}
        />
      </HeaderButtons>
    ),
  }
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
  headerBtn: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
  },
})

export default NotesScreen
