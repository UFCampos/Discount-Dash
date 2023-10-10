"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from '@/lib/redux/hooks';
import { useGetCategoriesQuery } from '@/lib/redux/service/categoriesAPI';
import { useNewPostMutation } from '@/lib/redux/service/productsAPI';
import { uploadFile } from '@/firebase/config';
import { setCategories } from '@/lib/redux/features/filterSlice';
import { toggleMenu } from '@/lib/redux/features/menuSlice';
import Link from 'next/link';
import './createProducts.css';

const CreateProducts: React.FC = () => {

  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.menu.isOpen);
  const { data: dataCategories } = useGetCategoriesQuery(null);
  const {id : idProfile} = useSelector((state) => state.userProfile);

  const [newProduct, setNewProduct] = useState({
    name: '',
    normalPrice: '',
    price: '',
    stock: '',
    expiration: '',
    category: '',
    brand: '',
  });

  const [file, setFile] = useState<File | null>(null);

  const [description, setDescription] = useState('');

  const category = dataCategories?.map(
    ({category}, index) => <option key={index} value={category}>{category}</option>
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewProduct({
      ...newProduct,
      category: event.target.value,
    });
  };

  const [mutate, { data: mutationData }] = useNewPostMutation();

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(newProduct);
    console.log(idProfile);
    
    

    if (!file) {
      return;
    }

    const urlImage = await uploadFile(file);

    mutate({
      name: newProduct.name,
      price: newProduct.price,
      normalPrice: newProduct.normalPrice,
      description: description,
      expiration: newProduct.expiration,
      image: urlImage,
      stock: newProduct.stock,
      category: newProduct.category,
      brand: newProduct.brand,
      shopId: idProfile
    });
    

    setFile(null);

    setNewProduct({
      name: '',
      price: '',
      stock: '',
      normalPrice: '',
      expiration: '',
      category: '',
      brand: '',
    });

    setDescription('');

    alert('Product created successfully');

  };

  useEffect(() => {
    if (isOpen) {
      dispatch(toggleMenu());
    }
  }, [dispatch, isOpen]);

  return (
    <div className="form-product-cont flex flex-col justify-center items-center">
      <div className="back">
        <Link href={'/home'} className="flex items-center text-center">
          <span className="material-symbols-outlined">arrow_back </span> Home
        </Link>
      </div>
      <h1 className="text-3xl p-4">Create Product</h1>
      <form onSubmit={handleSend} className="form flex flex-col justify-end items-center">
        <div className="form-info flex flex-col items-center justify-between">
          <div className="sup flex flex-col justify-center items-center">
            <div className="sections-form">
              <div className="name-brand flex flex-col items-start justify-center">
                <label htmlFor="name">Product name</label>
                <input
                  className="input-text"
                  placeholder="Product name"
                  type="text"
                  value={newProduct.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="name-brand flex flex-col items-end justify-center">
                <label htmlFor="brand">Brand</label>
                <input
                  className="input-text"
                  placeholder="Brand"
                  type="text"
                  value={newProduct.brand}
                  name="brand"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sections-form">
              <div className="price flex flex-col items-start justify-center">
                <label htmlFor="price">Price</label>
                <input
                  className="input-text"
                  placeholder="price"
                  type="number"
                  value={newProduct.price}
                  name="price"
                  onChange={handleChange}
                />
              </div>
              <div className="price flex flex-col items-end justify-center">
                <label htmlFor="normalPrice">Original price</label>
                <input
                  className="input-text"
                  placeholder="original Price"
                  type="number"
                  value={newProduct.normalPrice}
                  name="normalPrice"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sections-form">
              <div className="stock-expiration flex flex-col items-start justify-center">
                <label htmlFor="stock">Stock</label>
                <input
                  className="input-text"
                  placeholder="stock"
                  type="number"
                  value={newProduct.stock}
                  name="stock"
                  onChange={handleChange}
                />
              </div>
              <div className="stock-expiration flex flex-col items-end justify-center">
                <label htmlFor="expiration">Expiration date</label>
                <input
                  className="input-text"
                  type="date"
                  value={newProduct.expiration}
                  name="expiration"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-file flex flex-row items-center justify-between">
              <input type="file" name="image" onChange={handleFileChange} />
              <select
                value={newProduct.category}
                className="select-category"
                onChange={handleChangeSelect}
              >
                <option value="" disabled>
                  category
                </option>
                {
                  category
                }
              </select>
            </div>
          </div>
          <div className="description-cont flex flex-col items-center justify-between">
            <label htmlFor="description">Description</label>
            <textarea
              className="text-area"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <button type="submit" className="send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
