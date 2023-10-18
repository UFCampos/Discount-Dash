import Carrousel from "@/components/carrousel/Carrousel";
import style from "./landingCont.module.css"
import LandingPage from "@/components/landingPage/LandingPage";
const home = () => {
	return(
		<main className={style.cont}>
			<LandingPage/>
		</main>
	)
}


export default home;
