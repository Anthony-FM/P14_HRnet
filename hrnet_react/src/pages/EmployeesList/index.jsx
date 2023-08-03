import './index.css'
// hook
import { useSelector } from 'react-redux'
// selector
import { selectForm } from '../../utils/redux/selector'
//component
import Table from '../../components/Table'

/**
 * Create a Current Employees Page's
 * With the component Table
 * 
 * 
 * @returns {React.JSX.Element}
 */
export default function EmployeesList(){
    const data = useSelector(selectForm).datas    

    return  <section className='employeeList'>
        <h1>Current Employees</h1>
        
        <Table data={data} />
        
    </section>
}