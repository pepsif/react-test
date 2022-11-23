const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const initialState = {
    DialogData: [
        {name: "Stepa", id: 1},
        {name: "Vsevolod", id: 2},
        {name: "Karamultuk", id: 3},
        {name: "Nikolaj", id: 4},
        {name: "Janka", id: 5}
    ],
    MessagesData: [{id: 1, name: "Stepa", message: "Hello my friends"},
        {id: 2, name: "You", message: "bla bla bla bla ", like: 3},
        {id: 2, name: "Janka", message: "Who is Stepa?))", like: 24}
    ],
    messagesPageTextAreaText: 'enter you message'
}

const messagesReducer = ( state = initialState, action ) => {
    // debugger
   switch ( action.type) {
       case UPDATE_MESSAGE_TEXT: {

           let stateCopy = {...state}
           stateCopy.messagesPageTextAreaText = action.newText;
           return stateCopy;
       }
       case
           ADD_NEW_MESSAGE: {
           const newMessage = {id: 2, name: "You", message: action.newText, like: 24};
           let stateCopy = {...state}
           stateCopy.MessagesData = [...state.MessagesData]
           stateCopy.MessagesData.push(newMessage);
           return stateCopy;
       }
       default:
           return state
   }
    return state
}

export default messagesReducer