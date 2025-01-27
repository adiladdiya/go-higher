
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Welcome() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const challenge = searchParams.get('challenge')


 

  const start = () => {
    router.push(`/challenge-settings?challenge=${challenge}` )
  }

  return (
    <div className="flex flex-col main h-screen bg-[var(--yellow)] bg-[url('../public/welcome/board-checklist.png')]">
      <header className="p-8 flex bg-[url('../public/welcome/books.png')]">
        <h1 className="grid items-end font-bold text-5xl pb-10 text-[var(--grey)]">Nice!</h1>
      </header>

      <main className=" p-8 main flex flex-col justify-between flex-grow gap-8 bg-white rounded-t-[20px]">
        <p
          className="text-1xl"
        >
            <strong  className="text-2xl">I see you are planning to {challenge}</strong>
            <br />
 
          
          Let me ask you some question so I can build the perfect program for you!
        </p>
 
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

