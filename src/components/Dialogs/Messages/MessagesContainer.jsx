import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesText: state.dialogsPage.messagesPageTextAreaText,
        messagesArray: state.dialogsPage.MessagesData
    }
}
let mapsDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch({type: 'ADD-NEW-MESSAGE', newText: text})
        },
        messagesPostChange: (text) => {
            dispatch({type: 'UPDATE-MESSAGE-TEXT', newText: text})
        }

    }
}


const MessagesContainer = connect( mapStateToProps, mapsDispatchToProps )( Messages );


export default MessagesContainer;