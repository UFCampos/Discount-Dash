import Image from "next/image"
import CreateProducts from "@/components/createProducts/createProducts"
import "./addProduct.css"

const addProduct = () => {
    return(
        <main className="main-create flex flex-col justify-center items-center">
            <div className="form-cont">
                <CreateProducts />
            </div>
        </main>
    )
}

export default addProduct