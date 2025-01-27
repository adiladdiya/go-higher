
'use client'

import { useRouter } from 'next/navigation'


export default function Welcome() {
  const router = useRouter()

  const start = () => {
    console.log('================')
    router.push('/dashboard')
  }

  return (
    <div className="flex flex-col main h-screen bg-[var(--green)] bg-[url('../public/welcome/hot-air-balloon.png')]">
      <header className="p-8 flex bg-[url('../public/welcome/mountains.png')]">
        <h1 className="grid items-end font-bold text-5xl pb-10 text-white">Welcome!</h1>
      </header>

      <main className=" p-8 main flex flex-col flex-grow gap-8 bg-white rounded-t-[20px]">
        <p
          className="flex items-center text-2xl"
        >
          What Challenge <br /> Will You be Taking on next?
        </p>
        <select name="next-challenge" id="next-challenge" className="bg-gray-100 p-2 py-5 rounded-md text-1xl">
          <option value="" selected disabled>Choose</option>
          <option value="marathoon">Running a Marathoon</option>
        </select>
        <button className="bg-gray-100 p-2 py-5 rounded-md text-1xl" onClick={start}>
          Start
        </button>
      </main>
    </div>
  );
}
