const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const messagesReducer = ( state, action ) => {
    if (action.type === UPDATE_MESSAGE_TEXT) {
        state.messagesPageTextAreaText = action.newText;
    } else if (action.type === ADD_NEW_MESSAGE) {
        const newMessage = {id: 2, name: "You", message: action.newText, like: 24};
        state.MessagesData.push(newMessage);

    }
    return state
}

export default messagesReducer