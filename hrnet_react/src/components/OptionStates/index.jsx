import './index.css'
// hook
import { useDispatch } from 'react-redux'
// action
import { addDepartment } from '../../features/form'

export default function OptionStates({departments}){
    const dispatch = useDispatch()
    return departments ? 
    (
        <select onChange={(e) => dispatch(addDepartment(e.target.value))}>
            {
                departments.map((department, index) => (        
                    <option key={`${department}-${index}`} value={department}>{department}</option>
                ))
            }
        </select>
    ) 
    : ''
}