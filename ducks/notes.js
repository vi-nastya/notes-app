import {NOTES} from 'notesApp/data/dummy'

const CREATE_NOTE = 'CREATE_NOTE'
const UPDATE_NOTE = 'UPDATE_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const SET_NOTES = 'SET_NOTES'

// action creators
const createNote = (title, text, color) => {
  const dateCreated = new Date()
  return {
    type: CREATE_NOTE,
    noteData: {
      title: title,
      text: text,
      color: color,
      date: dateCreated.toString(),
      id: dateCreated.toString(),
    },
  }
}

const updateNote = (noteId, title, text, color) => {
  const dateCreated = new Date()
  return {
    type: CREATE_NOTE,
    noteData: {
      title: title,
      text: text,
      color: color,
      date: dateCreated.toString(),
      id: noteId,
    },
  }
}

const deleteNote = (noteId) => {
  return {
    type: DELETE_NOTE,
    noteId: noteId,
  }
}

const setNotes = (notes) => {
  return {
    type: SET_NOTES,
    notes: notes,
  }
}

const initialState = {
  allNotes: NOTES,
}

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES: {
      return {
        allNotes: action.notes,
      }
    }
    case CREATE_NOTE: {
      return {
        ...state,
        allNotes: [...state.allNotes, action.noteData],
      }
    }
    case UPDATE_NOTE: {
      return {
        ...state,
        allNotes: state.allNotes.map((nt) =>
          nt.id === action.noteData.id ? action.noteData : nt,
        ),
      }
    }
    case DELETE_NOTE: {
      return {
        ...state,
        allNotes: state.allNotes.filter((nt) => nt.id !== action.id),
      }
    }
  }
  return state
}
