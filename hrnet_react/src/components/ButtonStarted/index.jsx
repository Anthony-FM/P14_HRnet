import { Link } from 'react-router-dom'
//css
import './index.css'
// // action
// import { toggleLink } from '../../features/header'
// // hook
// import { useDispatch, useSelector } from 'react-redux'
// // selector
// import { selectHeader } from '../../utils/redux/selector'

export default function ButtonStarted(){
//     const dispatch = useDispatch()
//     const headerState = useSelector(selectHeader).employeeList

    return <div className='buttonStart'>
        <Link to="/CreateEmployee" className='linkStart' >Let's started</Link>
    </div>
}