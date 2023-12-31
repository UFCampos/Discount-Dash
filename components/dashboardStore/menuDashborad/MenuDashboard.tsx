import React from 'react'
import style from "./menuDashboard.module.css"
import imgLogo from "@/public/logopanda.svg"
import Image from 'next/image'
import Link from 'next/link'


interface menuDashboardProps {
  onChange:(newSection:string)=>void
}

const MenuDashboard:React.FC<menuDashboardProps> = ({onChange}) => {

  return (
    <div className={style.menuCont}>
      <div className={style.imgCont}>
        <Image src={imgLogo} alt='logo discount dash'/>
      </div>
      <div className={style.itemsCont}>
          <button onClick={()=>onChange("my products")} className={style.buttons}>My products</button>
          <button onClick={()=>onChange("upload products")} className={style.buttons}>Create products</button>
          <button onClick={()=>onChange("orders")} className={style.buttons}>Orders</button>
          <button onClick={()=>onChange("profile")} className={style.buttons}>Profile</button>
          <button onClick={()=>onChange("Shop History")} className={style.buttons}>Shop History</button>
          <button onClick={()=>onChange("productsExpired")} className={style.buttons}>Products Expired</button>

      </div>
    </div>
  )
}
export default MenuDashboard