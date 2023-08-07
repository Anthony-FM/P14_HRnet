import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    employeeList : true
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