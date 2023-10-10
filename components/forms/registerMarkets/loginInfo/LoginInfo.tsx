import React from "react"

interface loginInfo{
    valueState:{
        email:string,
        password:string,
        confirmPassword:string
    }
    handleChange:(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void
}
const LoginInfo:React.FC<loginInfo>=({valueState, handleChange})=>{
    return (
        <div>
            <h1>Login info</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={valueState.email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={valueState.password} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" name="confirmPassword" onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}
export default LoginInfo