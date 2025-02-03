
'use client'



export default function Welcome() {
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
            </main>
        </div>
    );
}

