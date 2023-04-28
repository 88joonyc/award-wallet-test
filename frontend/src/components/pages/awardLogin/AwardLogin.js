import react, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function AwardLogin() {
    
    const location = useLocation();
    const meta = location.state;

    const [ login, setLogin ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ requestId, setrequestId ] = useState('');


    const callCode = async () => {
        const res = await fetch(`http://localhost:5213/api/${location.state.code}`);
        const body = await res.json();
    };

    useEffect(() => {
        callCode()
    }, []);

    const handleSubmit = async function (e) {
        e.preventDefault();
        try {
            const data = await fetch(`http://localhost:5213/api/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    provider: meta.code,
                    // program: meta.programName,
                    login,
                    password
                })
            })

            const body = await data.json();
            setrequestId(body.package[0].requestId); 
        
            setTimeout(() => {
                handleLogin(requestId)
                console.log('now singing in and cghaign page', requestId)
            }, 4000)

        } catch (err) {
            console.log(err)
        }
        
    };

    const handleLogin = async function(id) {
        try {
            const data = await fetch (`http://localhost:5213/api/login/${id}`)
            const body = await data.json();

            console.log(body)
        } catch (err) {
            console.log(err)
        }
    };

    console.log(location)

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
};
