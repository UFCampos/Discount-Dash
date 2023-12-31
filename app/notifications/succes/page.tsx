import Link from 'next/link';
import style from './succes.module.css';

const SuccessPayment = () => (
	<div className={style.succes}>
		<h1 className={style.title}>La compra se realizo con exito!</h1>
		<div className={style.back}>
			<Link href={'/home'} className='flex items-center text-center'><span className='material-symbols-outlined'>arrow_back </span> Home</Link>
		</div>
	</div>
);

export default SuccessPayment;
