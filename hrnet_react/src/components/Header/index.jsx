import './index.css'
//
import { Link } from 'react-router-dom'

export default function Header(){
    return <header>
        <div>
            <Link to="/" className='logo'>HRnet</Link>
        </div>
        <div className='linkContainer'>
            <Link to="/CreateEmployee" className='link'>Create Employee</Link>
            <Link to="/EmployeesList" className='link'>View Current Employees</Link>
        </div>
    </header>
}