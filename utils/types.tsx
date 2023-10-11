export type Product = {
	name: string;
	price: number;
	stock: number;
	image: string;
	brand: string;
	category: string;
	nameToLowerCase: string;
};

export type CartProduct = {
	name: string;
	price: number;
	stock: number;
	image: string;
	category: string;
	quantity: number;
	id: string;
};

export type Categories = {
	category: string;
	order: string;
	price: string;
	establecimiento: string;
};

export type Item = {
	itemId?: string;
	name: string;
	image: string;
	price: string;
	brand: string;
	id: string;
	stock: string;
	normalPrice: string;
};

export type CardProduct = {
	name: string;
	image: string;
	price: string;
	brand: string;
	itemId: string;
	stock: string;
	normalPrice: string;
};

export type DetailModalProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	id: string;
};
