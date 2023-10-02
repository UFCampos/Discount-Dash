import Header from "./Header/header"
import Footer from "./Footer/footer"
import Hero from "./Hero/Hero"

const LandingPage = () =>{
    type Items = {
        image: string
            }
    return(
        <div className="h-screen">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    )
} 
export default LandingPage