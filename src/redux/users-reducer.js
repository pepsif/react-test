const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
   users: [
       { id: 1, placefolder: "users-reducer", follow: false, name: "Stepan S", message: "Hy friends!!!", country: "Ukraine", city: "Kiev" },
       { id: 2, follow: true, name: "Alena K", message: "Hellooo!!!", country: "Sweden", city: "Pillou" },
       { id: 3, follow: false, name: "Anatoliy S", message: "Job well done", country: "Ukraine", city: "Ternopil" }
   ]
}

const usersReducer = ( state = initialState, action ) => {
    // debugger
   switch ( action.type) {
       case FOLLOW: {
           let stateCopy = {...state}
           stateCopy.users = {...state.usersPage}

           return stateCopy;
       }
       case
           UNFOLLOW: {

           return ;
       }
       default:
           return state
   }


    return state
}

export const followActionCreator = () => ({type: FOLLOW })
export const unfollowActionCreator = () => ({type: UNFOLLOW })


export default usersReducer