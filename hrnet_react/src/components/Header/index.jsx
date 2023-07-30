import './index.css'
// react-router
import { Link } from 'react-router-dom'
// hook
import {  useDispatch} from 'react-redux'
// action
import { toggleLink } from '../../features/header'

export default function Header(){
    const dispatch = useDispatch()

    // Récupération du path de l'URL
    let location = window.location.href
    console.log(location.includes("EmployeesList"))

    return <header>
        <div>
            <Link to="/" className='logo' onClick={() => dispatch(toggleLink(false))}>HRnet</Link>
        </div>
        <div className='linkContainer'>
            { 
                location.includes("CreateEmployee") ? 
                    (<Link to="/EmployeesList" className='link' onClick={() => dispatch(toggleLink(false))}>View Current Employees</Link>) 
                    : 
                    (<Link to="/CreateEmployee" className='link' onClick={() => dispatch(toggleLink(true))}>Create Employee</Link>)
            }     
        </div>
    </header>
}