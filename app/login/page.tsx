
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export default function Welcome() {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleChange = (e: any) => {
        e.target.name === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)
    }

    const signIn = () => {
        console.log(email, password)
    }

    return (
        <div className="flex flex-col main h-screen bg-[var(--dark-blue-50)] bg-[url('../public/welcome/thumbprint.png')]">
            <header className="p-8 flex bg-[url('../public/welcome/wires.png')]">
                <h1 className="grid items-end font-bold text-5xl pb-10 text-white">Sign In!</h1>
            </header>

            <main className=" p-8 main flex flex-col justify-between flex-grow gap-8 bg-white rounded-t-[20px]">
                <input type="text" name='email' placeholder='Email' onChange={handleChange} value={email}
                    className="bg-gray-200 p-5 rounded-md text-2xl" />
                <input type="password" name='password' placeholder='password' onChange={handleChange} value={password}
                    className="bg-gray-200 p-5   rounded-md text-2xl" />
                <button className="bg-[var(--dark-blue)] p-2 py-5 rounded-md text-2xl font-bold text-white disabled:opacity-50"
                    onClick={signIn} disabled={email === '' || password === ''}>
                    Start
                </button>
                <Link href="/login"
                    className="rounded-md text-md items-end text-[#F29C00] active:underline mt-auto">
                    <strong>I forgot my Password!</strong>
                </Link>
            </main>
        </div>
    );
}
