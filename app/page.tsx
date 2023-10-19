import style from "./landingCont.module.css"
import LandingPage from "@/components/landingPage/LandingPage";
const home = () => {
	return(
		<main className={style.mainCont}>
			<LandingPage/>
		</main>
	)
}


export default home;
