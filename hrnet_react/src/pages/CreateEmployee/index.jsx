import './index.css'
// composant
import OptionStates from '../../components/OptionStates'
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
import { stateData, departmentDatas} from '../../data'

export default function CreateEmployee(){
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

    
    return <section>
        <h1>  Create Employee </h1>
        <div className='input-wrapper'>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text"  onChange={(e) => dispatch(addFirstName(e.target.value))} />
        </div>
        <div className='input-wrapper'>
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text"  onChange={(e) => dispatch(addLastName(e.target.value))} />
        </div>
        <div className='input-wrapper'>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input id="dateOfBirth" type="date"  onChange={(e) => dispatch(addDateOfBirth(e.target.value))} />
        </div>
        <div className='input-wrapper'>
            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" type="date"  onChange={(e) => dispatch(addStartDate(e.target.value))} />
        </div>
        <div className='input-wrapper'>
            <label htmlFor="street">Street</label>
            <input id="street" type="text"  onChange={(e) => dispatch(addStreet(e.target.value))} />
        </div>
        <div className='input-wrapper'>
            <label htmlFor="city">City</label>
            <input id="city" type="text"  onChange={(e) => dispatch(addCity(e.target.value))} />
        </div>
        <div className='input-wrapper'>
            <label htmlFor="state">State</label>
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
            <label htmlFor="zipCode">Zip code</label>
            <input id="zipCode" type="number"  onChange={(e) => dispatch(addZipCode(e.target.value))} />
        </div>        
        <div className='input-wrapper'>
            <label htmlFor="state">Derpatment</label>
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
        <button onClick={() => dispatch(addDatas(datas))}>Save</button>
       
       
        
    </section>
}