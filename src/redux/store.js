
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
            MessagesData: [
                {id: 1, name: "Stepa", message: "Hello my friends"},
                {id: 2, name: "You", message: "bla bla bla bla ", like: 3},
                {id: 2, name: "Janka", message: "Who is Stepa?))", like: 24}
            ],
            messagesPageTextAreaText: 'entxer you message'
        },
        postsPage: {
            posts: [
                {id: 1, name: "stepa", message: "hi, what  hapened?", like: 1},
                {id: 2, name: "you", message: "yo, its olright", like: 3}
            ],
            newPostText: "enter you message"
        } 
      
    },
    // _callSubscriber() {
    //     console.log('state is changed')
    // },
    // subscribe( observer ) {
    //     this._callSubscriber = observer;
    // },
    getState() {
        return this._state
    }

}
    //  --POST-ACTION-CREATORS----

export let addPostActionCreator = (text) => {
    return ({type: 'ADD-POST', newText: text})
}
export let updatePostTextActionCreator = (text) => {
    return ({type: 'UPDATE-NEW-POST-TEXT', newText: text})
}

export default store;
window.store = store;


