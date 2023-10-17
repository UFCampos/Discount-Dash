import Carrousel from "@/components/carrousel/Carrousel";
import style from "./landingCont.module.css"
const home = () => {
	return(
		<main className={style.cont}>
			<Carrousel/>
		</main>
	)
}


export default home;
