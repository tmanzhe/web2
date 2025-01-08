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
                        <span>hello again lol </span>
                    </h1>
                    <br />
                    <p className="mt-3 sm:mt-5 text-sm sm:text-lg">
                        im currently working towards becoming a seasoned full-stack developer.                         <br/>
                        <br/>
                        while i enjoy the
                        technical challenges of backend development, theres something really satisfying about combining
                        it and seeing it brought to life on the frontend as well. however, i do admit that it can get annoying.
                        <br/> 
                        <br/> 
                        im currently trying to perfect my blender and three.js. i plan on making web dev cooler, and i also plan on doing some cool jarvis ar assistant project in the future with this. 
                        <br/> 
                        <br/> 
                        
                    </p>
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
                    <br />
                    <p className="text-sm sm:text-lg">
                        all you really need to know is that i like having fun 
                        <br/>
                        <br/>
                        my three wonders of life are food, nature, and travelling.
                    </p>
                    <p className="text-sm sm:text-lg">
                        b/c of my three wonders of life, i love to travel. theres a whole lot of foods that i want to try that doesnt exist here in toronto. and dont even get me started on sceneries other countries have to offer. my gallery is a good reflection of this
                    </p>
                    <p className="text-sm sm:text-lg">
                        something more interesting is that i started getting into video production. i just like making videos of my friends and i to look back on.
                    </p>
                </div>
            </div>
        </main>
    );
}
