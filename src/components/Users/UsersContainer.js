import React from "react";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }

}

const UsersContainer = connect( mapStateToProps )(Users)

export default  UsersContainer