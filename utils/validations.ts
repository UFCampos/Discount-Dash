interface productInput {
  name: string;
  brand: string;
  price: any;
  normalPrice: string;
  stock: string;
  expiration: string;
  category: string;
  description: string;
}

const isFutreDate = (dateString: string) => {
  const expirationDate = new Date(dateString);
  const currentDate = new Date();
  return expirationDate > currentDate;
};

const validation = (input: productInput, description:string) => {
  let errors: Partial<productInput & {description: string}> = {};

  if (!input.name) {
    errors.name = "Name is necessary";
  }
  if (!input.brand) {
    errors.brand = "Brand is necessary";
  }
  if (!input.price) {
    errors.price = "Price needs a value";
  } else if (input.price < 0) {
    errors.price = "Price must be positive";
  } else if (input.price > 5000) {
    errors.price = "Price must be under $5000";
  }
  if (!input.normalPrice) {
    errors.normalPrice = "Original price needs a value";
  } else if (+input.normalPrice < 0) {
    errors.normalPrice = "Must be positive";
  } else if (+input.normalPrice < +input.price) {
    errors.normalPrice = "Must be higher than Price";
  }
  if (!input.stock) {
    errors.stock = "At least one product";
  } else if (+input.stock > 10) {
    errors.stock = "Must be under 10 products";
  } else if (+input.stock < 1) {
    errors.stock = "At least one product";
  }
  if (!input.expiration) {
    errors.expiration = "There has to be a date";
  } else if (!isFutreDate(input.expiration)) {
    errors.expiration = "Date is not valid";
  }
  if (!input.category) {
    errors.category = "Choose one category";
  }
  if (!input.description) {
    errors.description = "Description is necessary";
  } else if (input.description.length <= 20) {
    errors.description = "Description must be at least 20 characters long";
  } else if (input.description.length >= 500) {
    errors.description = "Description cannot exceed 500 characters";
  }
 
  return errors;
};

export default validation;