import './index.css'
// composant
import Options from '../../components/Options'
// import Modal from '../../components/Modal'
import { Modal } from 'p14-modal-plugin-afm/dist'
// hook
import { useDispatch, useSelector } from 'react-redux'
// selector
import { selectForm } from '../../utils/redux/selector'
// actions
import { 
    addFirstName, 
    addLastName, 
    addDateOfBirth, 
    addStartDate,
    addStreet,
    addCity,
    addZipCode, 
    addDatas,
    toggleCounterData,
    addErrorFirstname,
    addErrorLastname
} from '../../features/form'
// Datas
import { stateData, departmentDatas} from '../../data'
// Store
import store from '../../utils/redux/store'

/**
 *  For using this npm package react-datepicker
 *  use npm in terminal and install with:
 *  npm i react-datepicker 
 *  command
 */
// date picker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {  useRef } from 'react'
// import React, { useState } from 'react'

/**
 * @param { Object } datas
 * @param { string } datas.firstname - firstname
 * @param { string } datas.lastname - lasstname
 * @param { Object.<number> } datas.dateOfBirth - dateOfBirth
 * @param { Object.<number> } datas.startDate - startDate
 * @param { string } datas.street - street
 * @param { string } datas.city - city
 * @param { string } datas.state - state
 * @param { number } datas.zipCode - zipCode
 * @param { string } datas.department - department
 * @param {*} e - click of the save button
 */
export function saveData(e, datas){
    e.preventDefault()
    const dispatch = store.dispatch
    if(datas.firstname.match(/\d/g) || datas.lastname.match(/\d/g)){
        return dispatch(addErrorFirstname(true))
    }
    dispatch(addDatas(datas))    
    dispatch(addErrorFirstname(false))      
}



const modalContainer = {
    width: '100vw',
    height: 'calc(100vh + 77px)',
    position: 'fixed',
    top: '-77px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(90,111,8, 0.8)',
    cursor: 'pointer'
}

const modal = {
    fontFamily: '"Roboto", Helvetica, sans-serif',
    width: '50%',
    height: '10%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    border: '#6B8118 solid 3px',
    color: '#6B8118',
    fontSize: '1.3rem',
    fontWeight: '600',
    position: 'relative'
}

const crossContainer = {
    backgroundColor: '#2b3404',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '-25px',
    top: '-25px',
    cursor: 'pointer'
}

const leftCross = {    
    width: '5px',
    height: '15px',
    backgroundColor: '#fff',
    transform: 'rotate(45deg) ',
    position: 'absolute'
}
const rigthCross = {    
    width: '5px',
    height: '15px',
    backgroundColor: '#fff',
    transform: 'rotate(315deg)',
    position: 'absolute'
}
const crossContainerHover = {
    backgroundColor: '#2b3404',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '-25px',
    top: '-25px',
    cursor: 'pointer',
    transform: 'scale(1.05)'
}

/**
 * Create a React component Create Employee Page's
 * using de npm package React components react-datepicker
 * and the component Options 
 * 
 * @returns {React.JSX.Element}
 */
export default function CreateEmployee(){
    const counterData = useSelector(selectForm).counterData
    const dispatch = useDispatch()
    const states = stateData
    const departments = departmentDatas
    const datas = {      
        firstname: useSelector(selectForm).firstname,
        lastname: useSelector(selectForm).lastname,
        dateOfBirth: useSelector(selectForm).dateOfBirth,
        startDate: useSelector(selectForm).startDate,
        street: useSelector(selectForm).street,
        city: useSelector(selectForm).city,
        state: useSelector(selectForm).state,
        zipCode: useSelector(selectForm).zipCode,
        department: useSelector(selectForm).department
      }     
    const dateOfBirth = useSelector(selectForm).dateOfBirth
    const startDate = useSelector(selectForm).startDate  
    const errorInputFirstname = useSelector(selectForm).errorFirstnameInput
    const errorInputLastname = useSelector(selectForm).errorLastnameInput
    const inputFirstname = useRef()
    const inputLastname = useRef()

    function handlerInputFirstame(e){
        const dispatch = store.dispatch
        if(e.target.value.match(/\d/g)){
            dispatch(addErrorFirstname(true))
            inputFirstname.current.style.border = 'red 1px solid'
            inputFirstname.current.style.color = 'red'
            return
        }
        inputFirstname.current.style.border = ''
        inputFirstname.current.style.color = ''
        dispatch(addFirstName(e.target.value))
        dispatch(addErrorFirstname(false))
    }
    function handlerInputLastame(e){
        const dispatch = store.dispatch
        if(e.target.value.match(/\d/g)){
            dispatch(addErrorLastname(true))
            inputLastname.current.style.border = 'red 1px solid'
            inputLastname.current.style.color = 'red'
            return
        }
        inputLastname.current.style.border = ''
        inputLastname.current.style.color = ''
        dispatch(addLastName(e.target.value))
        dispatch(addErrorLastname(false))
    }

    return <section className='create-employee'>
        <h1 className='title'>  Create Employee </h1>
        <div className='divContainer'>
            <div className='inputContainer'>
                
                <div className='input-wrapper'>
                    <label className="label" htmlFor="firstname">First Name</label>
                    <input id="firstname" type="text" ref={inputFirstname} onChange={(e) => handlerInputFirstame(e)} />
                    {errorInputFirstname ? <p className='inputError'>Number are not allowed</p> : ''}
                </div>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="lastname">Last Name</label>
                    <input id="lastname" type="text" ref={inputLastname} onChange={(e) => handlerInputLastame(e)} />
                    {errorInputLastname ? <p className='inputError'>Number are not allowed</p> : ''}
                    
                </div>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="dateOfBirth">Date of Birth</label>
                    <DatePicker 
                        onChange={(e) => dispatch(addDateOfBirth(e.toLocaleDateString("en-US")))} 
                        className="datePicker" 
                        value={dateOfBirth} 
                        dateFormat='dd/MM/yyyy'
                        showIcon
                        isClearable={true}
                        showYearDropdown
                        title='calendar'
                    />
                </div>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="startDate">Start Date</label>
                    <DatePicker 
                        onChange={(e) => dispatch(addStartDate(e.toLocaleDateString("en-US")))} 
                        className="datePicker" 
                        value={startDate} 
                        dateFormat='dd/MM/yyyy'
                        showIcon
                        isClearable
                        title='calendar'
                    />
                </div>
            </div>
            <fieldset className='inputContainer'>
                <legend>Address</legend>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="street">Street</label>
                    <input id="street" type="text"  onChange={(e) => dispatch(addStreet(e.target.value))} />
                    
                </div>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="city">City</label>
                    <input id="city" type="text"  onChange={(e) => dispatch(addCity(e.target.value))} />
                </div>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="state">State</label>
                    <Options states={states}/>          
                </div>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="zipCode">Zip code</label>
                    <input id="zipCode" type="number"  onChange={(e) => dispatch(addZipCode(e.target.value))} />
                </div>        
            </fieldset>
        </div>
        <div className="divContainer">
            <div className='input-wrapper'>
                <label className="department" htmlFor="state">Derpatment</label>
                <Options departments={departments}/>         
            </div>
        </div>
        
        
        <button onClick={(e) => saveData(e, datas )} className="saveButton">Save</button>  
        {counterData === true ? 
            (
                <Modal 
                    message="my message"
                    modalContainer={modalContainer}
                    modal={modal}
                    crossContainer={crossContainer}
                    crossContainerHover={crossContainerHover}
                    leftCross={leftCross}
                    rigthCross={rigthCross}
                    setModalState={() => dispatch(toggleCounterData())} 
                />
            )
            : ''
        }
        
    </section>
}