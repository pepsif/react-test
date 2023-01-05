import {connect} from 'react-redux';
import './UsersContainer.css'
import {
    followActionCreator, setCurrentPageActionCreator,
    setInitialPageActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator,
    unfollowActionCreator
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import preloader from '../../icons/preloader.gif';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                    this.props.toggleFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setInitialPage(response.data.totalCount)
                    // console.log(this.props.isFetching)
                }
            )
    }

    onPageChanged(pageNumber) {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                    this.props.toggleFetching(false)
                    this.props.setUsers(response.data.items)
                    // console.log(response.data.items, this.props.currentPage)
                }
            )
    }

    render() {
        return <>
            {
                    (this.props.isFetching === true ?
                    <div className="preloader-wrapper">
                     <img className="preloader-img" src={preloader}/>
                    </div>
                    :
                    null)
            }
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged.bind(this)}
                   totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)

export default UsersContainer