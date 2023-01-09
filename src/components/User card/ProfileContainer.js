import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { getUserProfile } from "../../api/api";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        getUserProfile(userId)
            .then(response => {
                    this.props.setUserProfileAC(response.data)
                    // console.log(response.data)
                }
            )
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent)