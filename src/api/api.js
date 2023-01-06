import axios from "axios";

export const getUsers = (currentPage, pageSize) => {
    // debugger
   return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
    })
       .then(response => {
        return response.data
   })
}