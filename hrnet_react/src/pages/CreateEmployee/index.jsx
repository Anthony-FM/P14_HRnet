import './index.css'
// composant
import OptionStates from '../../components/OptionStates'
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
    addState,
    addZipCode,
    addDepartment, 
    addDatas} from '../../features/form'
// Datas
import { stateData, departmentDatas} from '../../data'
// Store
import store from '../../utils/redux/store'
// date picker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export function saveData(e, datas){
    e.preventDefault()
    const dispatch = store.dispatch
    dispatch(addDatas(datas))          
}

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
                        // showMonthYearDropdown
                        // selected={dateOfBirth}
                    />
                    {/* <input id="dateOfBirth" type="date"  onChange={(e) => dispatch(addDateOfBirth(e.target.value))} /> */}
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
                        // selected={startDate}
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
                    <select onChange={(e) => dispatch(addState(e.target.value))}>
                        {states.map((state, index) => (
                            <OptionStates 
                                value={state.abbreviation}
                                name={state.name}
                                key={`${state}-${index}`}
                            />
                            ))
                        }
                    </select>           
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
                <select onChange={(e) => dispatch(addDepartment(e.target.value))}>
                    {departments.map((department, index) => (
                        <OptionStates 
                            value={department}
                            name={department}
                            key={`${department}-${index}`}
                        />
                        ))
                    }
                </select>           
            </div>
        </div>
        
        
        <button onClick={(e) => saveData(e, datas )} className="saveButton">Save</button>  
        {counterData === true ? (<Modal/>) : ''}
        
    </section>
}