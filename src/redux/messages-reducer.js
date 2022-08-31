const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const messagesReducer = ( state, action ) => {
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