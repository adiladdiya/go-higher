
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export default function Welcome() {
  const router = useRouter()
  const [challenge, setChallenge] = useState('')

  const getChallenge = (e: any) => {
    setChallenge(e.target.value)
  }

  const start = () => {
    router.push(`/challenge-settings?challenge=${challenge}` )
  }

  return (
    <div className="flex flex-col main h-screen bg-[var(--green)] bg-[url('../public/welcome/hot-air-balloon.png')]">
      <header className="p-8 flex bg-[url('../public/welcome/mountains.png')]">
        <h1 className="grid items-end font-bold text-5xl pb-10 text-white">Welcome!</h1>
      </header>

      <main className=" p-8 main flex flex-col justify-between flex-grow gap-8 bg-white rounded-t-[20px]">
        <p
          className="text-2xl"
        >
          What Challenge <br /> Will You be Taking on next?
        </p>
        <select name="next-challenge" onChange={getChallenge} value={challenge}
          className="bg-gray-100 p-2 py-5 rounded-md text-2xl" defaultValue={''}>
          <option value="" disabled>Choose</option>
          <option value="Run a Marathoon">Run a Marathoon</option>
        </select>
        <button className="bg-[var(--green)] p-2 py-5 rounded-md text-2xl font-bold text-white disabled:opacity-50"
          onClick={start} disabled={challenge === ''}>
          Start  
        </button>
        <Link href="/login"
          className="rounded-md text-md items-end text-[#F29C00] active:underline mt-auto">
          Used Go-Higher before, <br /> <strong>Login to sync all your data!</strong>
        </Link>
      </main>
    </div>
  );
}
