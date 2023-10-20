"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import {
  categoriesAPI,
  useGetCategoriesQuery,
} from "@/lib/redux/service/categoriesAPI";
import { useNewPostMutation } from "@/lib/redux/service/productsAPI";
import { uploadFile } from "@/firebase/config";
import { setCategories } from "@/lib/redux/features/filterSlice";
import { toggleMenu } from "@/lib/redux/features/menuSlice";
import validation from "@/utils/validations";
import style from "./createProducts.module.css";

const CreateProducts: React.FC = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.menu.isOpen);
  const { data: dataCategories } = useGetCategoriesQuery(null);
  const { id: idProfile } = useSelector((state) => state.userProfile);

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
    stock: string;
    expiration: string;
    category: string;
    description: string;
  }

  const [file, setFile] = useState<File | undefined>(undefined);

  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Partial<ProductInput>>({});

  const category = dataCategories?.map(({ category }, index) => (
    <option key={index} value={category}>
      {category}
    </option>
  ));

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
        description,
      })
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;
    setDescription(event.target.value);
    const descriptionErrors = validation({
      ...newProduct,
      description: newDescription,
    });
    setErrors({ ...errors, ...descriptionErrors });
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewProduct({
      ...newProduct,
      category: event.target.value,
    });
    if (
      !dataCategories ||
      !dataCategories.some(
        (category) => category.category === event.target.value
      )
    ) {
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
      description,
      expiration: newProduct.expiration,
      image: urlImage,
      stock: newProduct.stock,
      category: newProduct.category,
      brand: newProduct.brand,
      shopId: idProfile,
    });

    setFile(undefined);

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

    alert("Product created successfully");
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(toggleMenu());
    }
    if (dataCategories) {
      dispatch(setCategories(dataCategories));
    }
  }, [dispatch, dataCategories, isOpen]);

  const allFieldsAreValid =
    Object.values(newProduct).every(
      (value) => value.trim() !== ""
    ) && Object.keys(errors).length  > 0 
    console.log(Object.keys(errors));
    
    
  return (
    <div className={style.formProductCont}>
      <h1 className="text-2xl p-4">Create Product</h1>
      <form
        onSubmit={handleSend}
        className={style.form}
      >
        <div className={style.formInfo}>
          <div className={style.sup}>
            <div className={style.sectionsForm}>
              <div className={style.nameBrand}>
                <label htmlFor="name">Product name</label>
                <input
                  className={style.inputText}
                  placeholder="Product name"
                  type="text"
                  value={newProduct.name}
                  name="name"
                  onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name} </p>}
              </div>
              <div className={style.nameBrandRigth}>
                <label htmlFor="brand">Brand</label>
                <input
                  className={style.inputText}
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
            <div className={style.sectionsForm}>
              <div className={style.price}>
                <label htmlFor="price">Price</label>
                <input
                  className={style.inputText}
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
              <div className={style.priceLeft}>
                <label htmlFor="normalPrice">Original price</label>
                <input
                  className={style.inputText}
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
            <div className={style.sectionsForm}>
              <div className={style.stockExpiration}>
                <label htmlFor="stock">Stock</label>
                <input
                  className={style.inputText}
                  placeholder="stock"
                  type="number"
                  value={newProduct.stock}
                  name="stock"
                  onChange={handleChange}
                />
              </div>
              <div className={style.stockExpirationRigth}>
                <label htmlFor="expiration">Expiration date</label>
                <input
                  className={style.inputText}
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
            <div className={style.inputFile}>
              <input type="file" name="image" onChange={handleFileChange} />
              <select
                value={newProduct.category}
                className={style.selectCategory}
                onChange={(event) => handleChangeSelect(event)}
              >
                <option value="" disabled>
                  category
                </option>
                {category}
              </select>
            </div>
            <div className={style.inputFile}>
              <div className="mr-2"></div>
              <div>
                {errors.category && (
                  <p style={{ color: "red" }}>{errors.category} </p>
                )}
              </div>
            </div>
          </div>
          <div className={style.descriptionCont}>
            <label htmlFor="description">Description</label>
            <textarea
              className={style.textArea}
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            {description.length < 20 && (
              <p style={{ color: "red" }}>
                Description must be at least 20 characters long
              </p>
            )}
            {description.length >= 20 && description.length > 500 && (
              <p style={{ color: "red" }}>
                Description cannot exceed 500 characters
              </p>
            )}
          </div>
          <button type="submit" className={style.send} disabled={!allFieldsAreValid}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
