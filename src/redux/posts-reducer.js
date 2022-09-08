const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
    posts: [
        {name: "stepa", message: "hi, what  hapened?", like: 1},
        {name: "you", message: "yo, its olright", like: 3}
    ],
    newPostText: "first rendering"
}

export const postsReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            const newPost = {name: "you", message: action.newText, like: 18};
            state.posts.push(newPost)
            return state;
        default:
            return state

    }
}

    export default postsReducer


