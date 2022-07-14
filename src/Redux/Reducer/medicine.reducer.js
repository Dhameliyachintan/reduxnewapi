import * as ActionType from "../ActionType"

const initialState = {
    isLoading: false,
    medicine: [],
    errors: ''
}

export const medicinereducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionType.REMOVE_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine: state.medicine.filter((d, i) => d.id !== action.payload),
                errors: ''
            };
        case ActionType.UPDATAS_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine: state.medicine.map((d) => {
                    if (d.id === action.payload.id) {
                        return action.payload
                    } else {
                        return d;
                    }
                }),
                errors: ''
            };
        case ActionType.LOADING_MEDICINES:
            return {
                ...state,
                isLoading: true,
                errors: ''
            }
        case ActionType.GET_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine: action.payload,
                errors: ''
            }
        case ActionType.ADD_MEDICINES:
            return {
                ...state,
                isLoading: false,
                medicine: state.medicine.concat(action.payload),
                errors: ''
            }

        case ActionType.MEDICINES_ERROES:
            return {
                ...state,
                isLoading: false,
                medicine: [],
                errors: action.payload
            }
        default:
            return state
    }
}