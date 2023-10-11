import {useGetProductQuery} from '@/lib/redux/service/productsAPI';
import style from './paymentCardModal.module.css';
import {type DetailModalProps} from '@/utils/types';

const DetailModal: React.FC<DetailModalProps> = ({isOpen, setIsOpen, id}) => {
	const {data, isLoading} = useGetProductQuery({id});

	const handleCLose = () => {
		setIsOpen(false);
	};

	if (isOpen) {
		return (
			<aside className={style.modalPayment}>
				<div className={style.cardPayment}>
					<button className={style.closeButton} onClick={handleCLose}>X</button>
					<img className={style.img} src={data?.image}/>
					<h2 className={style.description}>{data?.name}</h2>
					<p>{data?.brand}</p>
					<p className={style.price}>$ {data?.price}</p>
				</div>
			</aside>
		);
	}
};

export default DetailModal;
