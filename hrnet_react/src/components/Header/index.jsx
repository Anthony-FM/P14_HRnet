import './index.css'
// react-router
import { Link } from 'react-router-dom'
// hook
import { useSelector,  useDispatch} from 'react-redux'
// selector
import { selectHeader } from '../../utils/redux/selector'
// action
import { toggleLink } from '../../features/header'
import React from 'react'


/**
 * 
 * @returns {React.JSX.Element}
 */
export default function Header(){
    const dispatch = useDispatch()
    const headerState = useSelector(selectHeader).employeeList

    // Récupération du path de l'URL
    let location = window.location.href
    location.includes("EmployeesList") ?? dispatch(toggleLink(true))

    return <header>
        <div>
            <Link to="/" className='logo' onClick={() => dispatch(toggleLink(false))}>HRnet</Link>
        </div>
        <div className='linkContainer'>
            { 
                headerState ? 
                (<Link to="/EmployeesList" className='link' onClick={() => dispatch(toggleLink(false))}>View Current Employees</Link>) 
                : 
                (<Link to="/CreateEmployee" className='link' onClick={() => dispatch(toggleLink(true))}>Create Employee</Link>)                
                
            }     
        </div>
    </header>
}