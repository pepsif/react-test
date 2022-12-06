import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
     follow: (userId) => {
         dispatch(followActionCreator(userId))
     }
    }

}

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )(Users)

export default  UsersContainer