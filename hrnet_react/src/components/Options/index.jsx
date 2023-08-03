import './index.css'
// hook
import { useDispatch } from 'react-redux'
// action
import { addDepartment, addState } from '../../features/form'
import React from 'react'

/**
 * Create a Select react component with two parameter:
 * 
 * @param {string[]} department
 
 * @param {Object[]} states
 * @param {string} states[].name
 * @param {string} states[].abbreviation
 * 
 * @returns {React.JSX.select}
 */
export default function Option({departments, states}){
    const dispatch = useDispatch()
    return departments ? 
    (
       
        <select onChange={(e) => dispatch(addDepartment(e.target.value))} aria-label='department'>
            {
                departments.map((department, index) => (        
                    <option key={`${department}-${index}`} value={department}>{department}</option>
                    ))
                }
        </select>
        
    ) 
    :    
    
    states ? 
    (
        <select onChange={(e) => dispatch(addState(e.target.value))} aria-label='states'>
            {
                states.map((state, index) => (        
                   
                    <option key={`${state.name}-${index}`} value={state.abbreviation}>
                       {state.name}
                    </option>
                ))
            }
        </select>
    ) 
    : ''
}