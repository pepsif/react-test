import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator,
    setInitialPageActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";


class UsersApiComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setInitialPage(response.data.totalCount)
                    console.log(response.data.items, this.props.currentPage)
                }
            )
    }
    onPageChanged(pageNumber) {
        // alert(pageNumber)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    console.log(response.data.items, this.props.currentPage)
                }
            )
    }
    render() {
        return <Users currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged.bind(this)}
                      totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}

        />

    }
}

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

const UsersContainer = connect( mapStateToProps, mapDispatchToProps )(UsersApiComponent)

export default  UsersContainer