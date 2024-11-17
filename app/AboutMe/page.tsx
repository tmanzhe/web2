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
                        <span>my inspiration</span>
                    </h1>
                    <br />
                    <p className="mt-3 sm:mt-5 text-sm sm:text-lg">
                        my journey into computer science began with discovering minecraft.
                        <br />
                        <br />
                        as a kid, the game sparked my curiosity and challenged me to bring my ideas to life—from massive
                        flying machines to functional in-game tvs.
                        <br />
                        <br />
                        over the years, this passion for building and problem-solving has grown, and computer science
                        became the perfect reason for me to keep creating.
                        <br />
                        <br />
                        currently, i'm working towards becoming a seasoned full-stack developer. while i enjoy the
                        technical challenges of backend development, there's something really satisfying about combining
                        it and seeing it brought to life on the frontend as well.
                    </p>
                </div>

                {/* Image Column */}
                <div className="flex sm:w-[350px] md:w-[550px] w-full p-5 shadow-lg rounded-lg">
                    <Image
                        src="/assets/idk.png"
                        alt="Illustration"
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
                        src="/assets/me.png"
                        alt="Journey Illustration"
                        layout="responsive"
                        width={3}
                        height={4}
                        className="rounded-lg object-cover"
                    />
                </div>
                {/* Text Column */}
                <div className="flex flex-col text-center sm:text-left max-w-lg space-y-4">
                    <h2 className="text-2xl sm:text-4xl font-bold">a little more about me...</h2>
                    <br />
                    <p className="text-sm sm:text-lg">
                        outside the world of numbers, i like venturing and discovering new experiences.
                    </p>
                    <p className="text-sm sm:text-lg">
                        my three wonders of life are food, nature, and travelling.
                    </p>
                    <p className="text-sm sm:text-lg">
                        i love exploring different cultures, especially through their food—there’s nothing like the
                        thrill of trying bold, exotic flavors. discovering new places, whether it’s a quiet trail or a
                        bustling city street, is a constant adventure.
                    </p>
                    <p className="text-sm sm:text-lg">
                        and when i'm trapped in my room, i enjoy producing and editing videos. maybe in another life,
                        i’d be a full-time video producer.
                    </p>
                </div>
            </div>
        </main>
    );
}
