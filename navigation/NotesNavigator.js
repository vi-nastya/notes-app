import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {Platform} from 'react-native'
import NotesScreen from '../components/screens/NotesScreen'
import NoteScreen from '../components/screens/NoteScreen'
import {colors} from '../constants/colors'

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  // headerTitleStyle: {
  //   fontFamily: 'open-sans-bold'
  // },
  // headerBackTitleStyle: {
  //   fontFamily: 'open-sans'
  // },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
}

const NotesNavigator = createStackNavigator(
  {
    NotesList: NotesScreen,
    Note: NoteScreen,
  },
  {defaultNavigationOptions: defaultNavOptions},
)

export default createAppContainer(NotesNavigator)
