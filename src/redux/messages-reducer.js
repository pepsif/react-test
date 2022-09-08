const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    MessagesData: [{id: 1, name: "Stepa", message: "Hello my friends"},
        {id: 2, name: "You", message: "bla bla bla bla ", like: 3},
        {id: 2, name: "Janka", message: "Who is Stepa?))", like: 24}
    ],
    messagesPageTextAreaText: 'enter you message'
}

const messagesReducer = ( state = initialState, action ) => {
    // debugger
   switch ( action.type) {
       case UPDATE_MESSAGE_TEXT:
           state.messagesPageTextAreaText = action.newText;
           return state;
       case ADD_NEW_MESSAGE:
           const newMessage = {id: 2, name: "You", message: action.newText, like: 24};
           state.MessagesData.push(newMessage);
           return state;
       default:
           return state
   }


    return state
}

export default messagesReducer