
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { nanoid } from 'nanoid'
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore'
import { db, auth } from '../../utils/fb'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

interface Data {
  challenge: string,
  [key: string]: string,
}

export default function Settings() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const challenge = searchParams.get('challenge') || ''
  const [data, setData] = useState<Data>({ challenge: challenge })
  const [userData, setUserData] = useState({})
  const [user, setUser] = useState<null | string>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid)
        const userFbData = getDoc(doc(db, "challenges", uid)).then((doc: any) => {
          if (doc.exists()) {
            console.log("Document data:", doc.data());
            setUserData(doc.data())
          } else {
            console.log("No such document!");
          }
        }
        ).catch((error) => {
          console.log("Error getting document:", error);
        });
      }
    });
  }, [])


  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }


  const buildPlan = async () => {
    if (!user) {
      const newUser = await signInAnonymously(auth);
      const uid = newUser.user.uid;
      setUser(uid)
      console.log(uid)

      // .then(() => {
      //   // Signed in..
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // ...
      // });
    }

    const challengeId = nanoid()
    const newUserData = {
      ...userData,
      [challengeId]: data
    }
    setUserData(newUserData)


    // console.log(userData)

    // router.push(`/challenge-settings?challenge=${challenge}`)
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
          <strong className="text-2xl">I see you are planning to {challenge}</strong>
          <br />
          Let me ask you some question so I can build the perfect program for you!
        </p>

        <div className="relative mb-6 w-full border-1 ">
          <label className="text-black mb-2 text-1xl w-full block">Name </label>
          <input type="text" name='name' placeholder='Title of the Marathon' />
        </div>

        <div className="relative mb-6 w-full border-1 ">
          <label className="text-black mb-2 text-1xl w-full block">Distance</label>
          <select name='distance' value={data.distance || ''} onChange={handleChange} className="w-full bg-gray-200 p-5 rounded-md text-1xl">
            <option value="42">42 KM (26 miles)</option>
            <option value="21">21 KM (13 miles)</option>
            <option value="10">10 KM </option>
            <option value="5">5 KM </option>
          </select>
        </div>

        <div className="relative mb-6">
          <label className="text-black block mb-2">Race Date</label>
          <input name='date' type="date" value={data.date || ''} onChange={handleChange} className='bg-gray-200 p-5 rounded-md text-1xl w-full' />
        </div>

        <div className="relative mb-6">
          <label className="text-black">Running levels</label>
          <input onChange={handleChange} value={data.level || ''} name='level' id="labels-range-input" type="range" min="1" max="10"
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-300" />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Beginner </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Intermediate </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Advanced</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Elite</span>
        </div>
        <button className="bg-[var(--green)] p-2 py-5 rounded-md text-2xl font-bold text-white disabled:opacity-50"
          onClick={buildPlan} disabled={!data || !data.distance || !data.date || !data.level}>
          Start
        </button>

        <Link href="/challenge-new"
          className="rounded-md text-2xl items-end text-[var(--grey)] active:underline mt-auto">
          Cancel!
        </Link>
      </main>
    </div>
  );
}

