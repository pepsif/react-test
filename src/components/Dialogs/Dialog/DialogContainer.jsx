import Dialog from "./Dialog";
import {connect} from "react-redux";

const mapStateToProps =( state ) => {
    return {
        dialogData: state.dialogsPage.DialogData
    }
}


const DialogContainer = connect( mapStateToProps )( Dialog );

export default DialogContainer

