import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator,
    setInitialPageActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import UsersClass from "./UsersClass";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
     follow: (userId) => {
         dispatch(followActionCreator(userId))
     },
     unfollow: (userId) => {
        dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersActionCreator(users))
    },
    setInitialPage: (totalCount) => {
     dispatch(setInitialPageActionCreator(totalCount))
    },
    setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageActionCreator(currentPage))
    }
    }

}

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )(UsersClass)

export default  UsersContainer