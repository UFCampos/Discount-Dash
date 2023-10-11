import input from "../inputs.module.css"

interface localInfo{
    valueState:{
        marketName:string,
        typeMarket:string,
        category:string,
        onTheStreet:string,
        phone:string,
    }
    handleChange:(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}
const LocalInfo: React.FC<localInfo>=({valueState, handleChange})=>{

    return(
        <div>
            <div>
                <h1>Tell us about your business</h1>
                <p>esta informacion se mostrara en tu aplicacion para que los clientes puedan buscarte y contactarte en caso de que tengan una pregunta</p>
            </div>
            <form>
                <div>
                    <label htmlFor="marketName">Market name</label>
                    <input type="text" name="marketName" onChange={handleChange} value={valueState.marketName}/>
                </div>
                <div>
                    <label htmlFor="typeMarket">Type of market</label>
                    <select name="typeMarket" onChange={handleChange} value={valueState.typeMarket}>
                        <option value="">Select a type</option>
                        <option value="market">Market</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select name="category"  onChange={handleChange} value={valueState.category}>
                        <option value="">Select category</option>
                        <option value="store">Store</option>
                        <option value="food">Food</option>
                        <option value="café">café</option>
                    </select>
                </div>
                <div>
                    <p>It is a place on the street?</p>
                    <div>
                        <input type="radio" name="onTheStreet" value="yes" checked={valueState.onTheStreet==="yes"} onChange={handleChange}/>
                        <label htmlFor="yes">yes</label>
                        <input type="radio" name="onTheStreet" value="no" checked={valueState.onTheStreet==="no"} onChange={handleChange}/>
                        <label htmlFor="no">no</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" name="phone" onChange={handleChange} value={valueState.phone}/>
                </div>
            </form>
        </div>
    )
}
export default LocalInfo