import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer.js"

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                // debugger
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data;
                        this.props.setAuthUserDataAC(id, email, login)
                        // console.log(id,login,email)
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