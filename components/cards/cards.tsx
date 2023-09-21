'use client'
import { useSelector } from "@/lib/redux/hooks"
import { Image } from "@nextui-org/react"

const Cards = () => {

    type Item = {
        name: string;
        feel: string;
        image: string;
    }

    const data = useSelector((state) => state.items.products)



    return (
        <div>
            {/* {isLoading && <p>Loading...</p>}
            {isError && <p>No se encontraron usuarios con ese nombre</p>} */}
            {data && data.map((item : Item) => {
                return (
                    <div key={item.name}>
                        <p>{item.name}</p>
                        <Image src={item.image}></Image>
                        <p>{item.feel}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards