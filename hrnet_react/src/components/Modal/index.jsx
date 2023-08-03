import './index.css'
//action
import { toggleModal } from '../../features/modal'
import { toggleCounterData } from '../../features/form'
// store
import store from '../../utils/redux/store'
import React from 'react'

/**
 * 
 * function allow to close the Modal
 * @function
 */
export function closeModal(){
    const dispatch = store.dispatch
    dispatch(toggleModal(false))
    dispatch(toggleCounterData())
}

/**
 * 
 * @returns {React.JSX.Element}
 */
export default function Modal(){
    return <div className='modalcontainer' onClick={() => closeModal()}> 
        <div className='modal'> Employee created !! </div>    
    </div>
}