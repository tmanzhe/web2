"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main
            className={`flex items-center justify-center min-h-[85vh] p-5 transition-opacity duration-1000 ${
                loaded ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className="flex flex-wrap items-start space-x-10 ml-10"
                style={{ animationDelay: "0.5s" }}
            >
                {/* Text Column */}
                <div className="flex flex-col mt-10 sm:mt-28 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl">
                        <span>Hello,</span>
                        <br />
                        <span>I&apos;m Truman</span>
                    </h1>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-lg max-w-lg">
                        A second-year student pursuing a double degree at York for CS and MMGT at Schulich
                    </p>
                </div>

                {/* Image Column */}
                <div className="flex-shrink-0 mt-5 sm:mt-0">
                    <Image
                        src="/snoopy.png" // ✅ Corrected Path
                        alt="Snoopy"
                        width={300}
                        height={300}
                        className="sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]"
                    />
                </div>
            </div>
        </main>
    );
}