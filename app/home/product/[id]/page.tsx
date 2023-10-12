import Detail from '@/components/product/detail/Detail';
import './detailHome.css';
const DetailProduct = ({params}: {params: {id: string}}) => {
	const {id} = params;
	return (
		<div className='detail-cont flex flex-col justify-center items-center'>
			<Detail id={id}/>
		</div>
	);
};

export default DetailProduct;
