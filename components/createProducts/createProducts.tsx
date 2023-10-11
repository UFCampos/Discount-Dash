"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import { categoriesAPI, useGetCategoriesQuery } from "@/lib/redux/service/categoriesAPI";
import { useNewPostMutation } from "@/lib/redux/service/productsAPI";
import { uploadFile } from "@/firebase/config";
import { setCategories } from "@/lib/redux/features/filterSlice";
import { toggleMenu } from "@/lib/redux/features/menuSlice";
import Link from "next/link";
import validation from "@/utils/validations";
import "./createProducts.css";

const CreateProducts: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  const { data: dataCategories } = useGetCategoriesQuery(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    normalPrice: "",
    price: "",
    stock: "",
    expiration: "",
    category: "",
    brand: "",
  });
  interface ProductInput {
    name: string;
    brand: string;
    price: string;
    normalPrice: string;
    stock: string
    expiration:string;
    category: string;
    image : null;
  }

  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Partial<ProductInput>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
    setErrors(
      validation({
        ...newProduct,
        [name]: value,
      })
    );
  };


  const hasErrors = Object.keys(errors).length > 0;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewProduct({
      ...newProduct,
      category: event.target.value,
    });
    if (!dataCategories || !dataCategories.some((category) => category.category === event.target.value)) {
      setErrors({
        ...errors,
        category: "Invalid category",
      });
    } else {
      const updatedErrors = { ...errors };
      delete updatedErrors.category;
      setErrors(updatedErrors);
    }
  
  };


  const [mutate, { data: mutationData }] = useNewPostMutation();

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    });

    setFile(null);

    setNewProduct({
      name: "",
      price: "",
      stock: "",
      normalPrice: "",
      expiration: "",
      category: "",
      brand: "",
    });

    setDescription("");

    setTimeout(() => {
      location.reload();
    }, 3000);
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(toggleMenu());
    }
    if (dataCategories) {
      dispatch(setCategories(dataCategories));
    }
  }, [dispatch, dataCategories, isOpen]);

  console.log("hola" + newProduct.category.length);
  
  return (
    <div className="form-product-cont flex flex-col justify-center items-center">
      <div className="back">
        <Link href={"/home"} className="flex items-center text-center">
          <span className="material-symbols-outlined">arrow_back </span> Home
        </Link>
      </div>
      <h1 className="text-3xl p-4">Create Product</h1>
      <form
        onSubmit={handleSend}
        className="form flex flex-col justify-end items-center"
      >
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
                {errors.name && <p style={{ color: "red" }}>{errors.name} </p>}
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
                {errors.brand && (
                  <p style={{ color: "red" }}>{errors.brand} </p>
                )}
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
                {errors.price && (
                  <p style={{ color: "red" }}>{errors.price} </p>
                )}
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
                {errors.normalPrice && (
                  <p style={{ color: "red" }}>{errors.normalPrice} </p>
                 )}
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
                 {errors.stock && (
                  <p style={{ color: "red" }}>{errors.stock} </p>
                 )}
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
                {errors.expiration && (
                  <p style={{ color: "red" }}>{errors.expiration} </p>
                 )}
              </div>
            </div>
            <div className="input-file flex flex-row items-center justify-between">
              <input type="file" name="image" onChange={handleFileChange} />
              <select
                value={newProduct.category}
                className="select-category"
                onChange={(event)=>handleChangeSelect(event)}
              >
                <option value="" disabled>
                  categorias
                </option>
                {dataCategories?.map(({ category }, index) => {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-file flex flex-row items-center justify-between">
              <div className="mr-2">
            {errors.image && (
              <p style={{ color: "red",}}>{errors.image} </p>
              )}
              </div>
              <div>
                   {errors.category && (
                     <p style={{ color: "red",  }}>{errors.category} </p>
                     )}
                     </div> 
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
            {errors.price && (
                  <p style={{ color: "red" }}>{errors.price} </p>
                 )}
          </div>

          <button type="submit" className="send" disabled={hasErrors}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
