import CreateProducts from '@/components/dashboardStore/sectionsDashboard/createProducts/createProducts';
import './addProduct.css';

const addProduct = () => (
	<main className='main-create flex flex-col justify-center items-center'>
		<div className='form-cont'>
			<CreateProducts />
		</div>
	</main>
);

export default addProduct;
