'use client'
import { useState } from "react"
import { useNewPostMutation } from '@/lib/redux/service/productsAPI'
import { uploadFile } from "@/firebase/config"
import "./createProducts.css"
import React from 'react';

const CreateProducts = () => {
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category:"",
    brand: "",
  });
  const [file, setFile] = useState(null);

  const categories=["dairy", "drinks", "meats", "dressings", "store", "frozen", "snacks", "leguemes", "preserves", "others"]
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
  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewProduct({
      ...newProduct,
      category:event.target.value
    })

  };
  

  const [mutate, { data }] = useNewPostMutation();

  const handleSend = async (event: any) => {

    event.preventDefault();

    const urlImage = await uploadFile(file);

    mutate({
      name: newProduct.name,
      price: newProduct.price,
      image: urlImage,
      stock: newProduct.stock,
      category:newProduct.category,
      brand: newProduct.brand,
    }),

    setFile(null);
    
    setNewProduct({
      name: "",
      price: "",
      stock: "",
      category:"",
      brand: "",
    });
    setTimeout(()=>{
      location.reload()
    }, 3000)
  };
  return (
    <div className="form-product-cont flex flex-col justify-center items-center">
      <form
        onSubmit={handleSend}
        className="form flex flex-col justify-center items-center"
      >
        <div className="form-title flex flex-col justify-center items-center">
          <h1 className="text-4xl">Create Product</h1>
        </div>
        <div className="form-info flex flex-col items-center justify-evenly">
          <input
            className="input-text"
            placeholder="Product name"
            type="text"
            value={newProduct.name}
            name="name"
            onChange={handleChange}
          />
          
          <div  className="input-file flex flex-row items-center justify-between">
            <input type="file" name="image" onChange={handleFileChange} />
            <select
              value={newProduct.category}
              className="select-category"
              onChange={handleChangeSelect}
            >
              <option value="" disabled>categorias</option>
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>

          </div>
          <input
            className="input-text"
            placeholder="Brand"
            type="text"
            value={newProduct.brand}
            name="brand"
            onChange={handleChange}
          />
          <input
            className="input-text"
            placeholder="price"
            type="price"
            value={newProduct.price}
            name="price"
            onChange={handleChange}
          />
          <input
            className="input-text"
            placeholder="stock"
            type="text"
            value={newProduct.stock}
            name="stock"
            onChange={handleChange}
          />
          

          

          <button type="submit" className="send">Send</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts
