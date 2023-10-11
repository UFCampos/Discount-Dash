import React from 'react'
import LocalInfo from '../marketInfo/marketInfo';

interface locationInfo{
    valueState:{
        street:string,
        streetNumber:string,
        postalCode:string,
        province:string,
        city:string,
    }
    handleChange:(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

const LocationMarket: React.FC<locationInfo>=({valueState, handleChange})=>{
    return (
        <div>
            <div>
                <h1>Where is your location located?</h1>
                <p>Customers and delivery people will use this information to find your location.</p>
            </div>
            <form>
                <div>
                    <div>
                        <label htmlFor='street'>Street</label>
                        <input type='text' name='street' value={valueState.street} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='streetNumber'>Number</label>
                        <input type='number' name='streetNumber' value={valueState.streetNumber} onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <label htmlFor='postalCode'>Postal code</label>
                    <input type='text' name='postalCode' value={valueState.postalCode} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='province'>Province</label>
                    <input type='text' name='province' value={valueState.province} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='city'>city</label>
                    <input type='text' name='city' value={valueState.city} onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}

export default LocationMarket