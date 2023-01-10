import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer.js"
import {authUser, usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authUser()
            .then(response => {
                // debugger
                    if (response.resultCode === 0) {
                        let {id, login, email} = response.data;
                        this.props.setAuthUserDataAC(id, email, login)
                    }
                }
            )
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
 return{
     login: state.auth.login,
     isAuth: state.auth.isAuth
 }
}

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)