import React, {useState, useEffect, useCallback, useReducer} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import Input from 'notesApp/components/ui/Input'
import {colors} from 'notesApp/constants/colors'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    }
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let updatedFormIsValid = true
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    }
  }
  return state
}

const addNote = (noteData) => {
  console.log('Save note', noteData)
}

const NoteFormScreen = (props) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: '',
      text: '',
      color: '',
    },
    inputValidities: {
      title: false,
      text: false,
      color: false,
    },
    formIsValid: false,
  })

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      })
    },
    [dispatchFormState],
  )

  const submitHandler = () => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        {text: 'Okay'},
      ])
      return
    }

    // todo
    addNote({
      title: formState.inputValues.title,
      text: formState.inputValues.text,
      color: formState.inputValues.color,
      id: Date.now().toString(),
      date: Date.now(),
    })

    props.navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={30}>
      <ScrollView>
        <View style={styles.form}>
          <Input
            id="title"
            label="Title"
            errorText="Please enter a title"
            required
            keyboardType="default"
            autoCorrect
            initialValue=""
            onInputChange={inputChangeHandler}
          />
          <Input
            id="text"
            label="Text"
            errorText="Please enter note text"
            required
            keyboardType="default"
            autoCorrect
            initialValue=""
            onInputChange={inputChangeHandler}
          />
          <Input
            id="color"
            label="Color"
            errorText="Please enter note text"
            required
            keyboardType="default"
            initialValue=""
            onInputChange={inputChangeHandler}
          />
          <View style={styles.submitBtn}>
            <Button
              title="Add note"
              onPress={submitHandler}
              color={colors.primary}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

NoteFormScreen.navigationOptions = (navData) => ({
  headerTitle: 'Add Note',
})

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  submitBtn: {
    marginTop: 30,
  },
})

export default NoteFormScreen
