import React from "react";
import styles from "./Users.module.css"
import axios from "axios";

class UsersClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setInitialPage(response.data.totalCount)
                    console.log(response.data.items, this.props.currentPage)
                }
            )
    }
    onPageChanged (pageNumber) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                console.log(response.data.items, this.props.currentPage)
                }
            )
    }
    render() {
        // let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];
        for (let i = 1; i <= 8; i++) {
            pages.push( i
                // (i === 5 || i === 6 || i === 7 ? "." : i)
            )
        }
        return <div className={styles.users_section}>
            <h2 className={styles.users_title}>Users</h2>
            <div className={styles.pagination}>
                {
                    pages.map(el => {
                        return <span key={el} className={(this.props.currentPage === el ? styles.selectedPage : '')}
                                     onClick={(event) => { this.onPageChanged(el)  }}>
                                    {(el === 8 ? this.props.totalUsersCount : el)}
                             </span>

                    })
                }
            </div>
            {
                this.props.users.map((el) => {
                    return <div className={styles.user_block} key={el.id}>
                        <div className={styles.follow_block}>
                            <img className={styles.follow_image} src={require("../../icons/avatar-icon.jpg")}
                                 alt="user foto"></img>
                            {
                                (el.followed) ? <button className={styles.follow_button} onClick={() => {
                                        this.props.unfollow(el.id)
                                    }}>Unfollow</button>
                                    : <button className={styles.follow_button} onClick={() => {
                                        this.props.follow(el.id)
                                    }}>Follow</button>
                            }
                        </div>
                        <div className={styles.user_info_block}>
                            <span className={styles.user_name}>{el.name}</span>
                            <span className={styles.user_message}>{el.message}</span>
                            <span className={styles.user_country}>{el.country}</span>
                            <span className={styles.user_city}>{el.city}</span>
                        </div>
                    </div>
                })
            }

            <div className={styles.users_block}>
                {/*{this.UsersElements}*/}
            </div>
            <button onClick={this.getUsers}>GET USERS</button>
        </div>

    }
}

export default UsersClass