'use client'
import { useState } from "react"
import { useNewPostMutation } from '@/lib/redux/service/productsAPI'
import "./createProducts.css"
const CreateProducts = () => {
    const dispatch=useDispatch()
    const [newProduct, setNewProduct] = useState({
        name: '',
        image: '',
        price: '',
        stock: '',
        brand: '',
    })
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    }

    const [mutate, { data }] = useNewPostMutation()
    
    const handleSend = () => {
        mutate({
            name: newProduct.name,
            image: newProduct.image,
            price: newProduct.price,
            stock: newProduct.stock,
            brand: newProduct.brand
        }),

        
        setNewProduct({
            name: '',
            image: '',
            price: '',
            stock: '',
            brand: '',
        })
    }
    return (
        <div className="form-product-cont">
            <form onSubmit={handleSend} className=" flex flex-col justify-center items-center">
                <h1 className="text-4xl">Create Product</h1>
                <label htmlFor="name">Name: </label>
                <input type="text" value={newProduct.name} name="name" onChange={handleChange} />

                <label htmlFor="image">Image </label>
                <input type="file" name="image" value={newProduct.image} onChange={handleChange} />

                <label htmlFor="price">Price: </label>
                <input type="text" value={newProduct.price} name="price" onChange={handleChange} />

                <label htmlFor="stock">stock: </label>
                <input type="text" value={newProduct.stock} name="stock" onChange={handleChange} />

                <label htmlFor="brand">Brand: </label>
                <input type="text" value={newProduct.brand} name="brand" onChange={handleChange} />
                
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default CreateProducts
