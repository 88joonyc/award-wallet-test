import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const[data, setData]= useState('')

    const callApi = async () => {
      const res = await fetch('http://localhost:5213/api', )
  
  
      const body = await res.json()
      setData(body)
    }


    return (

        <div className="text-center bg-slate-500">
            <header className="min-h-[100vh] flex flex-col justify-center item-center">
                {!data&&<button className='text-5xl text-white align-center' onClick={callApi}>click me</button>}
                {data&&data.map(ele => (
                    <Link to='/login' state={ele}>
                        <div className='text-4xl text-white border-white border cursor-pointer' >
                            {ele.displayName}
                        </div>
                    </Link>
                ))}
            </header>
        </div>

    )
}