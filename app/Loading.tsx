import Image from "next/image"
import img from "@/public/loading.gif"
import style from "./Loading.module.css"

export const Loading=()=>{
    return(
        <div className={style.cont}>
            <div className={style.imgCont}>
                <Image src={img} alt="discount Dash loading" className={style.img}/>
            </div>
        </div>
    )
}