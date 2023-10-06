import Register from "@/components/forms/register/Register"
import Link from "next/link"
import "./mainRegister.css"
const pageRegister = () => {
    return (
        <div className="main-register flex flex-col justify-center items-center">
            <div className="back-link">
                <Link href={"/home"} className="flex items-center text-center"><span className="material-symbols-outlined">arrow_back </span> Home</Link>
            </div>
            <Register/>
        </div>
    )
}

export default pageRegister