"use client";
import { useState } from "react";
import { useNewPostMutation } from "@/lib/redux/service/productsAPI";
import "./createProducts.css";
const CreateProducts = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    brand: "",
  });
  const [file, setFile] = useState(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files[0]);
  };
  const [mutate, { data }] = useNewPostMutation();

  const handleSend = async (event: any) => {
    event.preventDefault();
    const urlImage = await uploadFile(file);
    console.log(urlImage);
    mutate({
      name: newProduct.name,
      price: newProduct.price,
      image: urlImage,
      stock: newProduct.stock,
      brand: newProduct.brand,
    }),
      setNewProduct({
        name: "",
        price: "",
        stock: "",
        brand: "",
      });
    setFile(null);
  };
  return (
    <div className="form-product-cont">
      <form
        onSubmit={handleSend}
        className=" flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl">Create Product</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={newProduct.name}
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="image">Image </label>
        <input type="file" name="image" onChange={handleFileChange} />

        <label htmlFor="price">Price: </label>
        <input
          type="text"
          value={newProduct.price}
          name="price"
          onChange={handleChange}
        />

        <label htmlFor="stock">stock: </label>
        <input
          type="text"
          value={newProduct.stock}
          name="stock"
          onChange={handleChange}
        />

        <label htmlFor="brand">Brand: </label>
        <input
          type="text"
          value={newProduct.brand}
          name="brand"
          onChange={handleChange}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CreateProducts;
