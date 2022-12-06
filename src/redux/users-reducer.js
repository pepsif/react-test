const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
   users: [
       { id: 1, placefolder: "users-reducer", follow: false, name: "Stepan S", message: "Hy friends from user-reducer!!!", country: "Ukraine", city: "Kiev" },
       { id: 2, follow: true, name: "Alena K", message: "Hellooo!!!", country: "Sweden", city: "Pillou" },
       { id: 3, follow: false, name: "Anatoliy S", message: "Job well done", country: "Ukraine", city: "Ternopil" }
   ]
}

const usersReducer = ( state = initialState, action ) => {
    // debugger
   switch ( action.type) {
       case FOLLOW:
        console.log("follow")
           let stateCopy = {
               ...state,
           users: state.users.map( user => {
              if(user.id === action.userId) {
                  alert(user.id)
              }
               return user
           })
           }
           return stateCopy;

          

       default:
           return state
   }


    
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId })


export default usersReducer