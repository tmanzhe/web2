'use client';
import React, { useState, useEffect } from "react";

const Page = () => {
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
            {/* Projects Section with Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center rounded-lg p-5 duration-300"
                    >
                        {/* Uncomment to include images */}
                        {/*
                        <Image
                            src={`/assets/project${project}.png`}
                            alt={`Project ${project}`}
                            width={300}
                            height={200}
                            className="rounded-t-lg"
                        />
                        */}
                        <h2 className="text-xl font-bold mt-4">Project {project}</h2>
                        <p className="text-sm mt-2 text-gray-600 text-center">
                            A brief description of this project goes here.
                        </p>
                        <button className="mt-4 px-4 py-2">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Page;
