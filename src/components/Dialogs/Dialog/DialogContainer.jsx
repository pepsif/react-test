import React from "react";
import Dialog from "./Dialog";
import {connect} from "react-redux";

const mapStateToProps =( state ) => {
    return {
        dialogData: state.dialogsPage.DialogData
    }
}
const mapsDispatchToProps = ( dispatch ) => {
    return{
    }
}

const DialogContainer = connect( mapStateToProps, mapsDispatchToProps )( Dialog );

export default DialogContainer

