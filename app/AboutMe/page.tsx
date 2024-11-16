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
                style={{ gap: "3rem" }}
            >
                {/* Text Column */}
                <div className="flex flex-col mt-10 sm:mt-28 text-center sm:text-left max-w-lg">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl">
                        <span>my inspiration</span>
                        <br />
                    </h1>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-lg">
                        <br />
                        my journey into computer science began with discovering minecraft.
                        <br />
                        <br />
                        as a kid, the game sparked my curiosity and challenged me to bring my ideas to life—from massive flying machines to functional in-game tvs.
                        <br />
                        <br />
                        over time, this passion for creativity and problem-solving grew, leading me to explore the endless possibilities of computer science.
                        <br />
                        <br />
                        here's a glimpse of what I've created so far!
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
        </main>
    );
}
