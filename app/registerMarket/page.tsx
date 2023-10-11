
import RegisterMarketsForm from '@/components/forms/registerMarkets/RegistermarketsForm'
import style from "./registerMarket.module.css"
import Header from '@/components/headerRegisterMarket/headerRegisterMarket'
import Image from 'next/image'
import img from "@/public/local.jpeg"
const RegisterMarket = () => {
  return (
    <div className={style.globalCont}>
      <Header/>
      <main className={style.registerCont}>
        <div className={style.imgCont}>
          <Image src={img} alt='local' className={style.img}/>
        </div>
        <div className={style.formCont}>
            <RegisterMarketsForm/>
        </div>
      </main>
    </div>
  )
}

export default RegisterMarket