import OrdersProducts from "@/components/ordersProducts/OrdersProducts"
import style from "./shopOrder.module.css"
const Order = ()=>{
    
    return(
        <div className={style.mainCont}>
            <h1>Ordenes</h1>
            <OrdersProducts/>
        </div>
    )
}
export default Order