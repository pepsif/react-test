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
            MessagesData: [{id: 1, name: "Stepa", message: "igo gooo igoo gooo"},
                {id: 2, name: "You", message: "bla bla bla bla koniku", like: 3},
                {id: 2, name: "Janka", message: "guliat hto bude?", like: 24}
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
    callSubscriber() {
        console.log('state is changed')
    },
    subscriber(observer) {
        this.callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch( action ) {
        // debugger
        if (action.type === "UPDATE-NEW-POST-TEXT") {
            console.log('update post text')
            store._state.postsPage.newPostText = action.newText;
            this.subscriber( this._state)
        } else if (action.type === "ADD-POST") {
            console.log('add text')
            const newPost = {name: "you", message: action.newText, like: 18};
            this._state.postsPage.posts.push(newPost)
            this.subscriber( this._state)
        }
    }

}

export default store;
window.store = store;


