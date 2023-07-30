import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    filter : []
}

export const filterData = createAction(
    'filter/data',
    (data) => ({
        payload : data
    })
)

export default createReducer(initialState, (builder) =>
    builder
        .addCase(filterData, (draft, action) => {
            draft.filter = action.payload
        })
)