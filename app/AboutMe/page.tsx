'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main
            className={`mt-12 mb-12 flex flex-col items-center justify-center min-h-[85vh] p-5 space-y-24 transition-opacity duration-1000 ${
                loaded ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Inspiration Section */}
            <div
                className="flex flex-col sm:flex-row items-center sm:items-start"
                style={{ gap: "3rem" }}
            >
                {/* Text Column */}
                <div className="flex flex-col mt-10 sm:mt-28 text-center sm:text-left max-w-lg">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl">
                        <span>hello again lol </span>
                    </h1>
                    <div className="mt-3 sm:mt-5 text-sm sm:text-lg">
                        i like building things
                        <br />
                        <br />
                        currently building an esports platform for a community of 75k+ @demanesports @demanclub
                        <br />
                        <br />
                        dms r open!
                        <br />
                        <br />
                    </div>
                </div>

                {/* Image Column */}
                <div className="flex sm:w-[350px] md:w-[550px] w-full p-5 shadow-lg rounded-lg">
                    <Image
                        src="/assets/me.png"
                        alt="joe cool"
                        layout="responsive"
                        width={3}
                        height={4}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>

            {/* New Section 1 - Image Left */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start mt-16" style={{ gap: "6rem" }}>
                {/* Image Column */}
                <div className="flex sm:w-[350px] md:w-[550px] w-full p-5 shadow-lg rounded-lg">
                    <Image
                        src="/assets/me2.webp"
                        alt="me nd pancake"
                        layout="responsive"
                        width={3}
                        height={4}
                        className="rounded-lg object-cover"
                    />
                </div>
                {/* Text Column */}
                <div className="flex flex-col text-center sm:text-left max-w-lg space-y-4">
                    <h2 className="text-2xl sm:text-4xl font-bold">a little more about me...</h2>
                    <p className="text-sm sm:text-lg">
                        outside of coding i live by three rules:
                        <br />
                        <br />
                        food; nature; travelling. should def check out my gallery 
                    </p>
                    <p className="text-sm sm:text-lg">
                        trying to get better at vid prod :O
                    </p>
                    <p className="text-sm sm:text-lg">
                        here are some interesting facts about me: 
                        <br/>
                        <br/>
                            - i play the piano, trumpet and violin
                        <br/>
                            - i represented team canada in an international kf comp event in china 
                        <br/>
                            - i cook
                    </p>
                </div>
            </div>
        </main>
    );
}
