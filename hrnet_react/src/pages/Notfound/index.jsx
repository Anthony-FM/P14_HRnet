import './index.css'
// assest
import WHLOGO from '../../assets/WH_logo.jpg'

/**
 * Create a component Home * 
 * 
 * @returns {React.JSX.Element}
 */
export default function NotFound(){
    return <section className='home'>
        
        <img src={WHLOGO} alt='Whealth Health logo' className='imgStyle'/>
        <h1 className='notFound'>Error 404</h1>
        <p>Oops! What you're looking for no longer exists...</p>
    </section>
}