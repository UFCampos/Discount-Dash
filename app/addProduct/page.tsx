import Image from "next/image"
import CreateProducts from "@/components/createProducts/createProducts"
import "./addProduct.css"

const addProduct = () => {
    return(
        <main className="main-create flex flex-row">
            <div className="img-form-product flex flex-col justify-center items-center">
                <Image src={"https://i.postimg.cc/c45vY3CC/Dise-o-sin-t-tulo-1.png"} alt={"logo"} width={300} height={300}/>
            </div>
            <div className="form-cont">
                <CreateProducts />
            </div>
            
        </main>
    )
}

export default addProduct