import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import NotesScreen from '../components/screens/NotesScreen'
import NoteScreen from '../components/screens/NoteScreen'

const NotesNavigator = createStackNavigator({
  NotesList: NotesScreen,
  Note: NoteScreen,
})

export default createAppContainer(NotesNavigator)
