import { createAction, createReducer } from "@reduxjs/toolkit";
//State
const initialState = {
    modalState : false
}

// Action

export const toggleModal = createAction(
    'toggle/modal',
    (modalState) => ({
        payload : modalState
    })
)

//reducer

export default createReducer(initialState, (builder) => 
    builder
        .addCase(toggleModal, (draft, action) => {
            draft.modalState = action.payload    
        })
)