import './index.css'
//
import WHLOGO from '../../assets/WH_logo.jpg'
//compoants
import ButtonStarted from '../../components/ButtonStarted'

export default function Home(){
    return <section className='home'>
        
        <img src={WHLOGO} alt='Whealth Health logo' className='imgStyle'/>
        <h1>HRnet</h1>
        <p>Welcome to HRnet! This is our company's internal application</p>
        <p>Here you can create and view employee records.</p>
        <ButtonStarted/>
    </section>
}