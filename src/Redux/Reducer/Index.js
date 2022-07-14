import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reducer";
import { medicinereducer } from "./medicine.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    Medicinesdata: medicinereducer,
})