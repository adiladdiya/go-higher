
'use client'
import { useAppSelector } from "@/lib/hooks";
import { selectChallenges } from "@/lib/features/userData/userDataSlice";
import { useRouter } from "next/navigation";


export default function Welcome() {
    const router = useRouter();

    const challenges = useAppSelector(selectChallenges);


    return (
        <div className="all-challenges flex flex-col main h-screen bg-[var(--yellow)]">
            <header className="p-8 flex">
                <h1 className="grid items-end font-bold text-5xl pb-10 text-[var(--grey)]">All My challenges!</h1>
            </header>

            <main className=" p-8 main flex flex-col justify-between flex-grow gap-8 bg-white rounded-t-[20px]">
                {
                    challenges && Object.values(challenges).map((challenge) => (
                        <div key={challenge.id}
                            className="challenge flex flex-col justify-between bg-[#C7EAE4] bg-[url('../public/welcome/runner.png')]"
                            onClick={() => router.push(`/challenges/details?id=${challenge.id}`)}
                        >
                            <h2>{challenge.title}</h2>
                            <div className="details flex justify-between">
                                <div className="next-activity">Next activities:
                                    <ol>
                                        {challenge.activities.map((activity:any) => (
                                            activity.status !== "done" && <li key={activity.id}>{activity.title}</li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="status">{challenge.status}</div>
                            </div>
                        </div>
                    ))
                }
            </main>
        </div>
    );
}

