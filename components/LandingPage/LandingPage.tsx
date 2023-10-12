
import Footer from './Footer/footer';
import Hero from './Hero/Hero';

const LandingPage = () => {
    type Items = {
        image: string
            }
    return(
        <div>
            <Hero/>
            <Footer/>
        </div>
    )
} 
export default LandingPage