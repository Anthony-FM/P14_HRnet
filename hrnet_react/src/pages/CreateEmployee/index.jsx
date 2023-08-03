import './index.css'
// composant
import Options from '../../components/Options'
import Modal from '../../components/Modal'
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
    addDatas} from '../../features/form'
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
import React from 'react'

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
    dispatch(addDatas(datas))          
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
    
   

    return <section className='create-employee'>
        <h1 className='title'>  Create Employee </h1>
        <div className='divContainer'>
            <div className='inputContainer'>
                
                <div className='input-wrapper'>
                    <label className="label" htmlFor="firstname">First Name</label>
                    <input id="firstname" type="text"  onChange={(e) => dispatch(addFirstName(e.target.value))} />
                </div>
                <div className='input-wrapper'>
                    <label className="label" htmlFor="lastname">Last Name</label>
                    <input id="lastname" type="text"  onChange={(e) => dispatch(addLastName(e.target.value))} />
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
        {counterData === true ? (<Modal/>) : ''}
        
    </section>
}