
import { deletedoctordata, getdoctordata, postdoctordata, putdoctordata } from "../../commene/api/doctor.api";
import { BASE_URL } from "../../Share/baseurl";
import * as ActionType from "../ActionType"


// getMedicines
export const getDoctor = () => (dispatch) => {
    console.log("asdaasdasdasdasd");
    try {

        getdoctordata()
            .then((data) => dispatch({ type: ActionType.GET_DOCTOR, payload: data.data }))
        // dispatch(loadingdoctor())
        // setTimeout(function () {
        //     fetch(BASE_URL + "doctor")
        //         .then(response => {
        //             if (response.ok) {
        //                 return response;
        //             } else {
        //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //                 error.response = response;
        //                 throw error;
        //             }
        //         },
        //             error => {
        //                 var errmess = new Error(error.message);
        //                 throw errmess;
        //             })
        //         .then(response => response.json())
        //         .then(medicines => dispatch(({ type: ActionType.GET_DOCTOR, payload: medicines })))
        //         .catch(error => dispatch(errordoctor(error.message)));
        // }, 2000)

    } catch (error) {
        dispatch(errordoctor(error))
        console.log(error);
    }
}

// addmedicinedata
export const adddoctordata = (data) => (dispatch) => {
    try {
        setTimeout(function () {
            return postdoctordata(data)
                .then((data) => dispatch({ type: ActionType.ADD_DOCTOR, payload: data.data }))
                .catch((error) => dispatch(errordoctor(error.message)))
        }, 2000)
        // dispatch(loadingdoctor())
        // setTimeout(function () {
        //     return fetch(BASE_URL + "doctor", {
        //         method: 'POST', // or 'PUT'
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data),

        //     })

        //         .then(response => {
        //             if (response.ok) {
        //                 return response;
        //             } else {
        //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //                 error.response = response;
        //                 throw error;
        //             }
        //         },
        //             error => {
        //                 var errmess = new Error(error.message);
        //                 throw errmess;
        //             })
        //         .then(response => response.json())
        //         .then(medicines => dispatch(({ type: ActionType.ADD_DOCTOR, payload: medicines })))
        //         // .catch(error => dispatch(errormedicines(error.message)));
        //         .catch((error) => dispatch(errordoctor(error.message)))
        // }, 2000)

    } catch (error) {
        dispatch(errordoctor(error.message))
    }
}

// updatemedicine

export const updatedoctor = (data) => (dispatch) => {
    console.log(data);
    try {
        putdoctordata(data)
        .then((data) => dispatch({ type: ActionType.UPDATAS_DOCTOR, payload: data.data}))
        .catch((error) => dispatch(errordoctor(error.message)))
        // dispatch(loadingdoctor())
        // setTimeout(function () {
        //     return fetch(BASE_URL + 'doctor/' + data.id, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data)

        //     })
        //         .then(response => {
        //             if (response.ok) {
        //                 return response;
        //             } else {
        //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //                 error.response = response;
        //                 throw error;
        //             }
        //         },
        //             error => {
        //                 var errmess = new Error(error.message);
        //                 throw errmess;
        //             }
        //         )
        //         .then(response => response.json())
        //         .then(medicine => dispatch({ type: ActionType.UPDATAS_DOCTOR, payload: medicine }))
        //         .catch((error) => dispatch(errordoctor(error.message)))
        // }, 2000)
    } catch (error) {
        dispatch(errordoctor(error.message));
    }
}

// Deletemedicine

export const Deletedoctor = (id) => (dispatch) => {
    try {
        dispatch(loadingdoctor())
        deletedoctordata(id)
            .then(dispatch({ type: ActionType.REMOVE_DOCTOR, payload: id }))
            .catch((error) => dispatch(errordoctor(error.message)))
        // setTimeout(function () {
        //     return fetch(BASE_URL + "doctor/" + id, {
        //         method: 'Delete', // or 'PUT'
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },

        //     })

        //         .then(response => {
        //             if (response.ok) {
        //                 return response;
        //             } else {
        //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
        //                 error.response = response;
        //                 throw error;
        //             }
        //         },
        //             error => {
        //                 var errmess = new Error(error.message);
        //                 throw errmess;
        //             })
        //         .then(response => response.json())
        //         .then(medicines => dispatch(({ type: ActionType.REMOVE_DOCTOR, payload: id })))
        //         .catch((error) => dispatch(errordoctor(error.message)))
        // }, 2000)

    } catch (error) {
        dispatch(errordoctor(error.message))
    }
}



export const loadingdoctor = () => (dispatch) => {
    dispatch({ type: ActionType.LOADING_DOCTOR })
}

export const errordoctor = (error) => (dispatch) => {
    dispatch({ type: ActionType.DOCTOR_ERROES, payload: error })
} 