'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    images: string[];
    date: string;
}

const projects: Project[] = [
    {
        title: "tiltq",
        description:
            "built tiltq to help league players figure out when they're tilting. it uses riot's api to grab your puuid, fetches your match history, and runs some analysis to see your gameplay patterns. threw in some custom gemini ai prompting to give personalized advice on your mental game. you can check out the live site at <a href='https://tiltq.com' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>tiltq.com</a>. also made a quick demo video <a href='https://youtu.be/ze2GgKqYrP8' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>here</a>",
        technologies: ["Next.js", "Riot Games API", "Gemini AI", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        images: ["/demo/tiltq1.png"],
        date: "March 2025",
    },
    
    {
        title: "MockMate",
        description:
            "made this during uofthacks 12. it's an ai interview prep tool that simulates interviews and gives you feedback in real time. added voice recognition and chat features to make it feel more real. site's down now cause aws costs too much, but you can see what it was about <a href='https://github.com/tmanzhe/mockmate?tab=readme-ov-file' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>here</a>",
        technologies: ["Next.js", "Next Auth", "PostgreSQL", "OpenAI API", "AWS RDS", "Prisma", "Tailwind"],
        images: ["/demo/mockmatedemo1.png", "/demo/mockmatedemo2.png","/demo/mockmatedemo3.png"],
        date: "January 2025",
    },
    {
        title: "Minmi",
        description:
            "made a chrome extension that helps you extract and summarize web content using gemini ai. pretty handy for research - just highlight text and get ai summaries on the spot. backend's in spring boot. check it out <a href='https://github.com/tmanzhe/Minimi' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>here</a>",
        technologies: ["Spring boot", "Gemini 2.0", "Javascript", "Chrome Extension API"],
        images: ["/demo/minimidemo1.png", "/demo/minimidemo2.png"],
        date: "Feburary 2025",
    },
    {
        title: "Virtual Mouse",
        description:
            "made a virtual mouse system with python and opencv. uses hand tracking to control your cursor and do clicks. learned a bunch about computer vision and gesture recognition. pretty cool how you can map hand movements to screen coordinates. see the code <a href='https://github.com/tmanzhe/virtual_mouse' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>here</a>",
        technologies: ["Python", "OpenCV", "MediaPipe"],
        images: ["/demo/virtual-mouse.png", "/demo/clicker.png"],
        date: "April 2024",
    },
    {
        title: "Sesame",
        description:
            "working on an all-in-one study app with calendar, todo list, and time tracking. mainly wanted to make something i'd actually use while learning threejs and spring boot. take a look <a href='https://github.com/tmanzhe/idkstudy' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>here</a>",
        technologies: ["Next.js", "Supabase", "SpringBoot", "Three.js", "PostgresSql", "JWT","OpenAI API"],
        images: ["/assets/underconstruction.jpg"],
        date: "January 2025",
    },
    {
        title: "Self-Driving Car Simulation",
        description:
            "Honestly, I saw a four hour long tutorial and youtube followed it. Tinkered my way to building a simulation in JavaScript with driving physics and neural networks. It was pretty fun.",
        technologies: ["JavaScript", "HTML", "CSS"],
        images: ["/demo/drive-1.png", "/demo/drive-2.png"],
        date: "May 2024 ",
    },
    {
        title: "Personal Website",
        description:
            "Built this site using Next.js 15 to learn modern web development techniques. Pretty proud of it because I'm not really known to be a good designer.",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        images: ["/demo/mad.png"],
        date: "Present",
    },
    {
        title: "Personal Website V1",
        description:
            "Built my former website with React and CSS. I found it extremely fun, but I thought I could do better.",
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        images: ["/demo/website-code.jpg"],
        date: "Sept 2024",
    },
];

const Page: React.FC = () => {
    const [loaded, setLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string[] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const openModal = (images: string[], index: number) => {
        setSelectedImage(images);
        setCurrentImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedImage) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImage.length);
        }
    };

    const prevImage = () => {
        if (selectedImage) {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex - 1 + selectedImage.length) % selectedImage.length
            );
        }
    };

    const HTMLContent: React.FC<{ content: string }> = ({ content }) => {
        // Replace invalid HTML nesting (e.g., <h2> inside <p>)
        const sanitizedContent = content
            .replace(/<p><h2>/g, '<div><h2>') // Replace <p><h2> with <div><h2>
            .replace(/<\/h2><\/p>/g, '</h2></div>') // Replace </h2></p> with </h2></div>
            .replace(/<p><h1>/g, '<div><h1>') // Replace <p><h1> with <div><h1>
            .replace(/<\/h1><\/p>/g, '</h1></div>'); // Replace </h1></p> with </h1></div>
    
        return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
    };
    

    return (
        <div
            className="min-h-screen w-full"
            style={{
                background:
                    "linear-gradient(-90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px, 20px 20px",
                backgroundColor: "var(--background)",
            }}
        >
            <main
                className={`w-full max-w-6xl mx-auto p-8 transition-opacity duration-1000 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* Experience Section */}
                <section className="space-y-12 text-center mb-20 mt-12">
                    <h2 className="text-4xl sm:text-5xl font-bold">experience</h2>
                    <div className="flex flex-col items-start gap-6 p-8 transition-shadow duration-300 mx-auto max-w-xl border border-gray-400 shadow-md rounded-lg">
                        <h3 className="text-2xl font-bold">Mobile Dev Intern @ ITMZ</h3>
                        <p className="text-sm text-gray-600">June 2024 - Dec 2024</p>
                        <p className="text-lg mt-2 leading-relaxed text-gray-800">
                            previously building some really cool stuff at{" "}
                            <a
                                href="https://www.itmz.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-blue-600"
                            >
                                ITMZ
                            </a>
                            !
                        </p>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="space-y-12 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold">projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-8 transition-shadow duration-500 transform hover:scale-[1.03] hover:shadow-xl border border-gray-400 shadow-md rounded-lg"
                                style={{
                                    transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
                                }}
                            >
                                <div 
                                    className="w-full h-[300px] relative overflow-hidden rounded-lg cursor-pointer"
                                    onClick={() => openModal(project.images, 0)}
                                >
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.date}</p>
                                <div className="text-base mt-2 text-gray-700 text-left">
                                    <HTMLContent content={project.description} />
                                </div>
                                <div className="flex flex-wrap justify-center mt-4 gap-3">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-1 text-sm rounded-full border border-gray-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resume Section */}
                <section className="space-y-12 text-center mt-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-12">resume</h2>
                    <div className="w-full aspect-[8.5/11] max-w-4xl mx-auto border border-gray-400 shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            src="/assets/tmanupdatedresume.pdf"
                            className="w-full h-full"
                            allow="autoplay"
                        ></iframe>
                    </div>
                </section>
            </main>

            {/* Modal for Enlarged Images */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-[90%] max-w-4xl h-auto transition-transform duration-500 transform scale-95 hover:scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage[currentImageIndex]}
                            alt="Enlarged"
                            layout="responsive"
                            width={800}
                            height={600}
                            className="rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                            onClick={prevImage}
                        >
                            ◀
                        </button>
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                            onClick={nextImage}
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
