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
                        im currently a full stack dev building as many projects as i can!  
                        <br />
                        <br />
                        i love bringing my impusive thoughts to life. 
                        <br />
                        <br />
                        most importantly, i learn so much from each project.
                        <br />
                        <br />
                        check out my some of my work!
                        <br /> 
                        <br />
                    </div>
                    <h2 className="text-3xl sm:text-3xl">
                        what i'm currently learning: 
                    </h2>
                    <br />
                    springboot, three.js + blender for my prod app!
                    <br />
                    blockchains and crypto: currently building my own <a href='https://github.com/tmanzhe/luhchain' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'> coin!</a>
                    <br />
                    <br />
                    
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
                        all you really need to know is that i like having fun 
                        <br />
                        <br />
                        my three wonders of life are food, nature, and travelling. i literally cannot live without any of these. check out my gallery for more!
                    </p>
                    <p className="text-sm sm:text-lg">
                        some of my hobbies include video prod, gym and some light video gaming
                    </p>
                    <p className="text-sm sm:text-lg">
                        here are some interesting facts about me: 
                        <br/>
                        <br/>
                        - i played the piano, trumpet and violin
                        <br/>
                        - i represented team canada in an internation kf comp event in china 
                        <br/>
                        - i cook 
                    </p>
                </div>
            </div>
        </main>
    );
}
