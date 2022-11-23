const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
   users: [
       { id: 1, name: "Stepan S", message: "Hy friends!!!", country: "Ukraine", city: "Kiev" },
       { id: 2, name: "Alena K", message: "Hellooo!!!", country: "Sweden", city: "Pillou" },
       { id: 3, name: "Anatoliy S", message: "Job well done", country: "Ukraine", city: "Ternopil" }
   ]
}

const usersReducer = ( state = initialState, action ) => {
    // debugger
   switch ( action.type) {
       case FOLLOW: {

           let stateCopy = {...state}
           stateCopy.messagesPageTextAreaText = action.newText;
           return stateCopy;
       }
       case
           UNFOLLOW: {
           const newMessage = {id: 2, name: "You", message: action.newText, like: 24};
           let stateCopy = {...state}
           stateCopy.MessagesData = [...state.MessagesData]
           stateCopy.MessagesData.push(newMessage);
           return stateCopy;
       }
       default:
           return state
   }


    return state
}

export default usersReducer