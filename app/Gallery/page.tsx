'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
    const [loaded, setLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State for enlarged image

    useEffect(() => {
        setLoaded(true);
    }, []);

    const images = [
        "/converted/IMG_0964.jpg",
        "/converted/IMG_1102.jpg",
        "/converted/IMG_1108.jpg",
        "/converted/IMG_1112.jpg",
        "/converted/IMG_1256.jpg",
        "/converted/IMG_1339.jpg",
        "/converted/IMG_1372.jpg",
        "/converted/IMG_1649.jpg",
        "/converted/IMG_1749.jpg",
        "/converted/IMG_1781.jpg",
        "/converted/IMG_1820.jpg",
        "/converted/IMG_1850.jpg",
        "/converted/IMG_1993.jpg",
        "/converted/IMG_2076.jpg",
        "/converted/IMG_2106.jpg",
        "/converted/IMG_2118.jpg",
        "/converted/IMG_2137.jpg",
        "/converted/IMG_2145.jpg",
        "/converted/IMG_2318.jpg",
        "/converted/IMG_2603.jpg",
        "/converted/IMG_2682.jpg",
        "/converted/IMG_3078.jpg",
        "/converted/IMG_3115.jpg",
        "/converted/IMG_3459.jpg",
        "/converted/IMG_3797.jpg",
        "/converted/IMG_4312.jpg",
        "/converted/IMG_4426.jpg",
        "/converted/IMG_4430.jpg",
        "/converted/IMG_4560.jpg",
        "/converted/IMG_4562.jpg",
        "/converted/IMG_4632.jpg",
        "/converted/IMG_4738.jpg",
        "/converted/IMG_4797.jpg",
        "/converted/IMG_4834.jpg",
        "/converted/IMG_4843.jpg",
        "/converted/IMG_4858.jpg",
        "/converted/IMG_4875.jpg",
        "/converted/IMG_5013.jpg",
        "/converted/IMG_5119.jpg",
        "/converted/IMG_5157.jpg",
        "/converted/IMG_5238.jpg",
        "/converted/IMG_5414.jpg",
    ];

    return (
        <div className="w-full max-w-6xl mx-auto p-5">
            {/* Spacing between navigation bar */}
            <div className="mt-16" />

            {/* Gallery Title */}
            <h2
                className={`text-4xl sm:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                my gallery
            </h2>

            {/* Gallery Grid */}
            <div
                className={`grid grid-cols-3 gap-10 transition-opacity duration-1000 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`shadow-lg rounded-lg overflow-hidden flex justify-center items-center aspect-[4/5] border-2 border-gray-200 hover:border-gray-400 transform transition-transform duration-500 hover:scale-105 cursor-pointer`}
                        onClick={() => setSelectedImage(src)} // Click handler to enlarge image
                    >
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={500}
                            className="object-cover w-full h-full rounded-md"
                        />
                    </div>
                ))}
            </div>

            {/* Modal for Enlarged Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-5"
                    onClick={() => setSelectedImage(null)} // Close modal on click
                >
                    <div
                        className="relative w-[70%] max-w-[600px] h-auto animate-scale-in"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged"
                            width={600} // Adjusted smaller size
                            height={800} // Adjusted height
                            className="object-contain w-full h-full rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                            onClick={() => setSelectedImage(null)} // Close button
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Spacing before footer */}
            <div className="mt-16" />
        </div>
    );
};

export default Page;
