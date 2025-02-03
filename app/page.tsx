"use client";

import Image from "next/image";
import { auth } from './utils/fb'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

import { selectUserProfile, updateProfile } from "@/lib/features/userData/userDataSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useState } from "react";

export default function Splash() {

  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(selectUserProfile);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(updateProfile({ ...userProfile, uid: uid }))
        redirect('/challenges')
      } else {
        redirect('/challenges/new')
      }
    });
  }, [])


  return (
    <div className="splash-screen grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Image
          src="/splash-screen-icon.png"
          alt="Go Higher app icon"
          width={100}
          height={100}
          priority
        />
        <p
          className="flex items-center text-center m-0 font-semibold"
        >
          Go Higher
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-700"
        >
          Complete you next challenge!
        </p>
      </footer>
    </div>
  );
}
