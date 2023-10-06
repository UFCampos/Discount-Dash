import Cards from "@/components/cards/cards";
import HomeRigth from "@/components/home-rigth-section/HomeRigth";
import "./home.css"
import HomeLeft from "@/components/home-left-section/HomeLeft";
const Home = () => {
    return (
        <main className="home-cont flex flex-row">
            <HomeLeft/>
            <Cards/>
            <HomeRigth/>
        </main>
    )
}

export default Home