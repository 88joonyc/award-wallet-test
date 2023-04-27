import react, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function AwardLogin() {
    
    const location = useLocation();

    const [ login, setLogin ] = useState('');
    const [ passwrod, setPassword ] = useState('');


    const callCode = async (code) => {
        const res = await fetch(`http://localhost:5213/api/${code}`);
        const body = await res.json();
        console.log(body);
    }

    const handleSubmit = function(e) {
        e.preventDefault();
        
    }

    return (
        <div className='h-[100vh]'>
            <div className='max-w-[1440px] h-full mx-auto flex justify-center items-center '>  
                <div className='border w-[500px] rounded-lg'>
                    <div className='text-2xl text-center p-4 bg-blue-400 rounded-t-lg'>Opti Pay</div>
                    <form onSubmit={handleSubmit} className='flex flex-col p-8'>
                        <h1 className='mb-10 text-4xl font-extrabold'>Sign in</h1>
                        <label className='text-2xl' for='login'>Rewards Account Login
                            <input className='border-b-2 p-4 mt-4 mb-4 w-full' name='login' type='text' onChange={e =>setLogin(e.target.value)}/>                    
                        </label>
                        <label className='text-2xl' for='password'> Password*
                            <input className='border-b-2 p-4 mt-4 mb-4 w-full' name='password' type='text' onChange={e => setPassword(e.target.value)}/>       
                        </label>
                        <button className='p-4 rounded-lg bg-green-400 text-white font-bold text-2xl'>Sign in</button>             
                    </form>
                </div>
            </div>
        </div>
    )
}
