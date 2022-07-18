import { deleteRequest, getRequest, postRequest, putRequest } from "./request"

export const getdoctordata = () => {
    return getRequest('doctor')
}

export const postdoctordata = (data) => {
    return postRequest('doctor', data)
}

export const putdoctordata = (data) => {
    return putRequest('doctor/', data)
}

export const deletedoctordata = (id) => {
    return deleteRequest('doctor/', id)
}