
'use client'
import { useAppSelector } from "@/lib/hooks";
import { selectChallenges } from "@/lib/features/userData/userDataSlice";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";


export default function Welcome() {
    const router = useRouter();
    const search = useSearchParams();
    const challengeId = search.get('id') || '';
    const challenge = useAppSelector(selectChallenges)[challengeId];
    console.log(challenge);

    return (
        <div className="all-challenges flex flex-col main h-screen bg-[var(--yellow)]">
            <header className="p-8 flex flex-col justify-end">
                <h1 className="grid items-end font-bold text-5xl pb-10 text-[var(--grey)]">
                    {challenge.title}
                </h1>
                <div className="details flex justify-between">
                    <p>{challenge.end_date}</p>
                    <p>{challenge.status}</p>
                </div>
            </header>

            <main className="challenge p-8 main flex flex-col justify-between flex-grow gap-8 bg-white rounded-t-[20px]">
                <div className="activities">
                    <h2>Activities:</h2>
                    <ul className="activities">
                        {challenge.activities.map((activity: any) => (

                            <li key={activity.id} className={`activity flex gap-3 ${activity.status}`} >
                                <span className="icon">R</span>
                                <div>
                                    <div className="flex justify-start items-center">
                                        <h3>{activity.title}</h3>
                                    </div>
                                    {activity.details.reps && <div className="flex justify-between">
                                        <p>{activity.details.distance}</p>
                                        <p>{activity.details.recovery}</p>
                                    </div>}
                                    {
                                        activity.unit === 'minutes' && <div className="timer">
                                            <div className="icon">
                                                <svg width="250" height="250"
                                                    viewBox="0 0 250 250" className="circular-progress">
                                                    <circle className="bg"></circle>
                                                    <circle className="fg"></circle>
                                                </svg>

                                            </div>
                                        </div>
                                    }

                                </div>
                                <div className="icon ml-auto">

                                    <svg width="250" height="250"
                                        viewBox="0 0 250 250" className="circular-progress">
                                        <circle className="bg"></circle>
                                        <circle className="fg"></circle>
                                    </svg>
                                    <p className="progress">{activity.progress}/{activity.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}

