const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export const postsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    } else if (action.type === ADD_POST) {
        const newPost = {name: "you", message: action.newText, like: 18};
    }
    return state
}

export default postsReducer


