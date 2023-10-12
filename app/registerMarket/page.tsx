
import RegisterMarketsForm from '@/components/forms/registerMarkets/RegistermarketsForm';
import style from './registerMarket.module.css';

const RegisterMarket = () => (
	<main className={style.registerCont}>
		<div className={style.imgCont}>

		</div>
		<div className={style.formCont}>
			<RegisterMarketsForm/>
		</div>
	</main>
);

export default RegisterMarket;
