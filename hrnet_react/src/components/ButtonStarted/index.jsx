import { Link } from 'react-router-dom'
//css
import './index.css'
// action
import { toggleLink } from '../../features/header'
// hook
import { useDispatch } from 'react-redux'

export default function ButtonStarted(){
    const dispatch = useDispatch()
    return <div className='buttonStart'>
        <Link to="/CreateEmployee" className='linkStart' onClick={() => dispatch(toggleLink(true))}>Let's started</Link>
    </div>
}