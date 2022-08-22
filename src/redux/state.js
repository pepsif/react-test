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
                {name: "stepa", message: "hi, what  hapened?",like : 1},
                {name: "you", message: "yo, its olright", like: 3}
            ],
            newPostText: "enter you message"
        }
    },
       getState() {
        return this._state
       },
    _callSubscribe() {
        console.log('state is changed')
    },
    addPost(postMessage) {
        const newPost = { name: "you", message: postMessage, like: 18 };
        this._state.postsPage.posts.push( newPost )
        this._callSubscribe( this._state )
    },
    updateNewPostText( newText ) {
        console.log('update post text')
        this._state.postsPage.newPostText =  newText;
        this._callSubscribe( this._state )
    },
    subscriber(observer) {
        this._callSubscribe = observer
    }
}

export default store;
window.store = store;


