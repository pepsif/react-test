const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";

const initialState = {
  users: [
    
  ]
};

const usersReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, follow: true };
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
            return { ...user, follow: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users ]}
    }
    default:
      return state;
  }
};
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;
