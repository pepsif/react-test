const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
    posts: [
        { id:1, name: "stepa", message: "hi, what  hapened?", like: 1 },
        { id:2, name: "you", message: "yo, its olright", like: 3 }
    ],
    newPostText: "first rendering from reducer"
}

export const postsReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {

            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
    }
        case ADD_POST: {
            const newPost = {name: "you", message: action.newText, like: 18};
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            return stateCopy;
    }
        default:
            return state

    }
}

    export default postsReducer


