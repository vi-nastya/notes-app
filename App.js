import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
import 'react-native-gesture-handler'
import NavigationContainer from 'notesApp/navigation/NotesNavigator'

import notesReducer from 'notesApp/ducks/notes'

const rootReducer = combineReducers({
  notes: notesReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  )
}

const styles = StyleSheet.create({})

export default App
