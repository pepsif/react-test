const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 3,
  currentPage: 1,
  isFetching: false,
  followingProgress: false


};

const usersReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {...state, users: [...action.users ]}
    }
    case SET_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount}
    }
    case SET_CURRENT_PAGE: {
     return {...state, currentPage: action.currentPage}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {...state, followingProgress: action.isFetching}
    }
    default:
      return state;
  }
};
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setInitialPageActionCreator = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const buttonFollowingProgressAC = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching})

export default usersReducer;
