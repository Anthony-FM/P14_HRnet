import './index.css'
//action
import { toggleModal } from '../../features/modal'
import { toggleCounterData } from '../../features/form'
// store
import store from '../../utils/redux/store'

export function closeModal(){
    const dispatch = store.dispatch
    dispatch(toggleModal(false))
    dispatch(toggleCounterData())
}


export default function Modal(){
    return <div className='modalcontainer' onClick={() => closeModal()}> 
        <div className='modal'> Employee created !! </div>    
    </div>
}