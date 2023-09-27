'use client'
import { useState } from "react"
import { useNewPostMutation } from '@/lib/redux/service/createProductsAPI'
<<<<<<< HEAD
import { loadProducts } from "@/lib/redux/features/itemsSlice"
import { useDispatch } from "@/lib/redux/hooks"

=======
import { refreshProducts } from "@/lib/redux/features/itemsSlice"
import { useDispatch } from "@/lib/redux/hooks"
>>>>>>> a307bcc779d67689647f7e3816cabd09947af7ca

const CreateProducts = () => {
    const dispatch = useDispatch()
    const [newProduct, setNewProduct] = useState({
        name: '',
        image: '',
        price: '',
        stock: '',
        brand: '',
    })
<<<<<<< HEAD
    const dispatch = useDispatch()
=======
>>>>>>> a307bcc779d67689647f7e3816cabd09947af7ca

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }

    const [mutate, { data }] = useNewPostMutation()
    
<<<<<<< HEAD
    const handleSend = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
=======
    const handleSend = () => {
        const dataRefresh = {
            name: newProduct.name,
            image: newProduct.image,
            price: newProduct.price,
            stock: newProduct.stock,
            brand: newProduct.brand
        }
>>>>>>> a307bcc779d67689647f7e3816cabd09947af7ca
        mutate({
            name: newProduct.name,
            image: newProduct.image,
            price: newProduct.price,
            stock: newProduct.stock,
            brand: newProduct.brand
        }),

        dispatch(refreshProducts(dataRefresh))
        
        setNewProduct({
            name: '',
            image: '',
            price: '',
            stock: '',
            brand: '',
        })
        dispatch(loadProducts([])) 
        alert('Product created')
    }

    return (
        <div>
            <form onSubmit={handleSend}>
                <h1>Create Products</h1>
                <label htmlFor="name">Name: </label>
                <input type="text" value={newProduct.name} name="name" onChange={handleChange} />

                <label htmlFor="image">Image: </label>
                <input type="text" value={newProduct.image} name="image" onChange={handleChange} />

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
