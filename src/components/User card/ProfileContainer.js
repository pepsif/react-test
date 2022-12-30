import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12`)
            .then(response => {

                this.props.setUserProfileAC(response.data)
                    console.log(response.data)
                }
            )
    }
    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({
 profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfileAC}) (ProfileContainer)