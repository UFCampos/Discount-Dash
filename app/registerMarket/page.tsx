
import RegisterMarketsForm from '@/components/forms/registerMarkets/RegistermarketsForm'
import style from "./registerMarket.module.css"
import Header from '@/components/headerRegisterMarket/headerRegisterMarket'

const RegisterMarket = () => {
  return (
    <div className={style.globalCont}>
      <Header/>
      <main className={style.registerCont}>
        
        <div className={style.imgCont}>

        </div>
        <div className={style.formCont}>
            <RegisterMarketsForm/>
        </div>
      </main>
    </div>
  )
}

export default RegisterMarket