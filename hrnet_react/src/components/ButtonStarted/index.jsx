import { Link } from 'react-router-dom'
import './index.css'

export default function ButtonStarted(){
    return <div className='buttonStart'>
        <Link to="/CreateEmployee" className='linkStart'>Let's started</Link>
    </div>
}