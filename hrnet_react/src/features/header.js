import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    employeeList : false
}

export const toggleLink = createAction(
    'toggle/link',
    (employeeList) => ({
        payload: employeeList
    }))

export default createReducer(initialState, (builder) => {
    builder
        .addCase(toggleLink, (draft, action) => {
            draft.employeeList = action.payload
        }
    )
})