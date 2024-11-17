'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
    {
        title: "Self-Driving Car Simulation",
        description:
            "Inspired by humanless taxis in Shenzhen, I followed a tutorial and tinkered my way to building a simulation in JavaScript with driving physics and neural networks. It still has a long way to go, but I'm pretty proud of this",
        technologies: ["JavaScript", "HTML", "CSS"],
        images: ["/assets/demo/drive-1.png", "/assets/demo/drive-2.png"],
        date: "May 2024 - Present",
    },
    {
        title: "Virtual Mouse",
        description:
            "Using Python, OpenCV, and MediaPipe, I built a simple gesture-based mouse control system. It was a lot of trial and error, but it works (mostly). Definitely learned a lot in the process. In the future, I'm planning to implement this in 3D environments",
        technologies: ["Python", "OpenCV", "MediaPipe"],
        images: ["/assets/demo/virtual-mouse.png", "/assets/demo/clicker.png"],
        date: "April 2024 - Present",
    },
    {
        title: "Personal Website",
        description:
            "Built this site using Next.js 15 to learn modern web development techniques. Pretty proud of it because I'm not really known to be a good designer",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        images: ["/assets/demo/website-code.jpg", "/assets/demo/mad.png"],
        date: "Present",
    },
    {
        title: "Personal Website V1",
        description:
            "Built my former website with React and CSS. I found it extremely fun, but I thought I could do better.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        images: ["/assets/demo/website-code.jpg", "/assets/demo/mad.png"],
        date: "Sept 2024",
    },
];

const Page = () => {
    const [loaded, setLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State for image modal

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <main
            className={`w-full max-w-6xl mx-auto p-5 space-y-16 mt-20 transition-opacity duration-1000 ${
                loaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {/* Experience Section */}
            <section className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-left">Experience</h2>
                <div className="flex flex-col items-start gap-4 rounded-lg p-5 transition-shadow duration-300">
                    <h3 className="text-xl font-bold">Mobile Dev Intern @ ITMZ</h3>
                    <p className="text-sm text-gray-600">June 2024 - Present</p>
                    <p className="text-lg mt-2">
                        currently building some really cool stuff at{' '}
                        <a
                            href="https://www.itmz.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            ITMZ
                        </a>
                        !
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-left">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 transform transition-transform duration-500 hover:scale-105"
                        >
                            <div
                                className="w-full h-[200px] relative overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => setSelectedImage(project.images[0])} // Open modal on click
                            >
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.date}</p>
                            <p className="text-sm mt-2 text-gray-700">{project.description}</p>
                            <div className="flex flex-wrap justify-start mt-4 gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700 shadow"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal for Enlarged Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)} // Close modal on click
                >
                    <div
                        className="relative w-[90%] max-w-4xl h-auto transition-transform duration-500 transform scale-95 hover:scale-100"
                        onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged"
                            layout="responsive"
                            width={800}
                            height={600}
                            className="rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Page;
