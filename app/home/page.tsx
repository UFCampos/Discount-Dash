'use client'
import Cards from "@/components/cards/cards";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        console.log(process.env.FIREBASE_API_KEY);
        
    },[])
    return (
        <div className="flex">
            <Cards/>
        </div>
    )
}

export default Home