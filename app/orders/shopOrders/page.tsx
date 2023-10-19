import OrdersProductsShop from "@/components/ordersProducts/OrderProductsShop"
import style from "./shopOrders.module.css"

const shopOrders = () => {

    return (
        <div className={style.cont}>
            <OrdersProductsShop />
        </div>
    )
}

export default shopOrders