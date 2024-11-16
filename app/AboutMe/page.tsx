"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main
            className={`flex flex-col items-center justify-center min-h-[85vh] p-5 space-y-16 transition-opacity duration-1000 ${
                loaded ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Inspiration Section */}
            <div
                className="flex flex-col sm:flex-row items-center sm:items-start"
                style={{gap: "3rem"}}
            >
                {/* Text Column */}
                <div className="flex flex-col mt-10 sm:mt-28 text-center sm:text-left max-w-lg">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl">
                        <span>my inspiration</span>
                        <br/>
                    </h1>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-lg">
                        <br/>
                        my journey into computer science began with discovering minecraft.
                        <br/>
                        <br/>
                        as a kid, the game sparked my curiosity and challenged me to bring my ideas to life—from massive
                        flying machines to functional in-game tvs.
                        <br/>
                        <br/>
                        over time, this passion for creativity and problem-solving grew, leading me to explore the
                        endless possibilities of computer science.
                        <br/>
                    </p>
                </div>

                {/* Image Column */}
                <div className="flex sm:w-[350px] md:w-[550px] w-full p-5">
                    <Image
                        src="/assets/me.png"
                        alt="Illustration"
                        layout="responsive"
                        width={3}
                        height={4}
                        className="rounded-lg"
                    />
                </div>
            </div>

            {/* New Section 1 - Image Left */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start" style={{gap: "3rem"}}>
                {/* Image Column */}
                <div className="flex sm:w-[350px] md:w-[550px] w-full p-5">
                    <Image
                        src="/assets/journey.png"
                        alt="Journey Illustration"
                        layout="responsive"
                        width={3}
                        height={4}
                        className="rounded-lg"
                    />
                </div>
                {/* Text Column */}
                <div className="flex flex-col text-center sm:text-left max-w-lg">
                    <h2 className="text-2xl sm:text-4xl font-bold">my journey</h2>
                    <p className="mt-4 text-sm sm:text-lg">
                        Starting with simple programming challenges, I quickly realized how much I enjoyed
                        problem-solving.
                        Over time, I immersed myself in coding, learning languages like Java and Python to bring my
                        ideas to life.
                    </p>
                </div>
            </div>

            {/* New Section 2 - Image Right */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:flex-row-reverse"
                 style={{gap: "3rem"}}>
                {/* Image Column */}
                <div className="flex sm:w-[350px] md:w-[550px] w-full p-5">
                    <Image
                        src="/assets/now.png"
                        alt="What I Do Now Illustration"
                        layout="responsive"
                        width={3}
                        height={4}
                        className="rounded-lg"
                    />
                </div>
                {/* Text Column */}
                <div className="flex flex-col text-center sm:text-left max-w-lg">
                    <h2 className="text-2xl sm:text-4xl font-bold">what I do now</h2>
                    <p className="mt-4 text-sm sm:text-lg">
                        Today, I focus on building web and mobile applications, tackling real-world problems with
                        creative
                        solutions. My projects reflect my love for both technical challenges and design aesthetics.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center p-10 rounded-lg relative">
                    {/* Grid Background */}
                    <div className="absolute inset-0 grid grid-cols-10 gap-2 opacity-10 pointer-events-none">
                        {Array.from({length: 100}).map((_, index) => (
                            <div key={index} className="w-full h-full"></div>
                        ))}
                    </div>

                    {/* Text */}
                    <p className="relative text-lg font-medium leading-relaxed">
                        Twenty years from now you will be more disappointed by the things that you didn't do than by the
                        ones you did do.
                        <br/>
                        <br/>
                        So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails.
                        Explore. Dream. Discover.
                    </p>
                </div>
            </div>


        </main>
    );
}
