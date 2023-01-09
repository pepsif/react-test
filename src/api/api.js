import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "14b83656-c8fd-40a9-86e9-e9c5c1b96848"
    }
})
export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const authUser = () => {
    return instance.get(`auth/me`)
        .then(response => {
            // debugger
            return response.data
        })
}
export const getUserProfile = (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}

