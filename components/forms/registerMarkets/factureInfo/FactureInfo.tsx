import React from 'react';

type factureInfo = {
	valueState: {
		typePerson: string;
		cuit_cuil: string;
		ownerName: string;
		IVA_condition: string;
		facture_type: string;
		dni: string;
		date: string;
		nationality: string;
	};
	handleChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};
const FactureInfo: React.FC<factureInfo> = ({valueState, handleChange}) => (
	<div>
		<h1>Billing information</h1>
		<p>This information will appear on sales invoices.</p>
		<div>
			<label htmlFor='typePerson'>Type of person</label>
			<select value={valueState.typePerson} name='typePerson' onChange={handleChange}>
				<option value=''>Select an option</option>
				<option value='Physical person'>Physical person</option>
				<option value='legal person'>legal person</option>
			</select>
		</div>
		<div>
			<label htmlFor='cuit_cuil'>CUIT / CUIL</label>
			<input type='text' name='cuit_cuil' value={valueState.cuit_cuil} onChange={handleChange}/>
		</div>
		<div>
			<label htmlFor='ownerName'>Name and Surname</label>
			<input type='text' name='ownerName' value={valueState.ownerName} onChange={handleChange}/>
		</div>
		<div>
			<label htmlFor='IVA_condition'>IVA condition</label>
			<select name='IVA_condition' value={valueState.IVA_condition} onChange={handleChange}>
				<option value=''>select an option</option>
				<option value='simplified-monotax regime'>simplified-monotax regime</option>
				<option value='registered responsible'>registered responsible</option>
				<option value='exempt'>exempt</option>
				<option value='final consumer'>final consumer</option>
			</select>
		</div>
		<div>
			<label htmlFor='facture_type'>invoice type</label>
			<select name='facture_type' value={valueState.facture_type} onChange={handleChange}>
				<option value='A'>A</option>
				<option value='B'>B</option>
				<option value='C'>C</option>
				<option value='E'>E</option>
				<option value='T'>T</option>
				<option value='M'>M</option>
			</select>
		</div>
		<div>
			<label htmlFor='dni'>Document number</label>
			<input type='text' name='dni' value={valueState.dni} onChange={handleChange}/>
		</div>
		<div>
			<label htmlFor='date'>Birthdate</label>
			<input type='date' name='date' value={valueState.date} onChange={handleChange}/>
		</div>
		<div>
			<label htmlFor='nationality'>Nationality</label>
			<input type='text' name='nationality' value={valueState.nationality} onChange={handleChange}/>
		</div>
	</div>
);

export default FactureInfo;
