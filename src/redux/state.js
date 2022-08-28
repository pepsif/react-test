let store = {
    _state: {
        dialogsPage: {
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
            ]
        },
        postsPage: {
            posts: [
                {name: "stepa", message: "hi, what  hapened?", like: 1},
                {name: "you", message: "yo, its olright", like: 3}
            ],
            newPostText: "enter you message"
        }
    },
    renderListener() {
        console.log('state is changed')
    },
    setRenderListener( renderListener ) {
        this.renderListener = renderListener;
        console.log('setRenderListener')
    },
    getState() {
        return this._state
    },
    dispatch( action ) {
        // debugger
        if (action.type === "UPDATE-NEW-POST-TEXT") {
            // console.log('update post text')
            this._state.postsPage.newPostText = action.newText;
            this.renderListener( this.getState() )
            console.log(store._state.postsPage.newPostText)
        }
        if (action.type === "ADD-POST") {
            // console.log('add text')
            const newPost = {name: "you", message: action.newText, like: 18};
            this._state.postsPage.posts.push(newPost)
            this.renderListener( this.getState() )
            console.log(store._state.postsPage.posts)
        }
    }

}

export default store;
window.store = store;


