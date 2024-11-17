import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <nav className="w-full max-w-[1143px] p-5 mx-auto">
            <ul className="flex flex-wrap items-center justify-between text-lg sm:text-xl md:text-2xl">
                {/* Left-Aligned Text */}
                <li className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    <Link href="/" className="hover:text-gray-700 transition duration-300 ease-in-out">
                        tman
                    </Link>
                </li>

                {/* Right-Aligned Links */}
                <div className="flex flex-wrap items-center space-x-3 sm:space-x-5 mt-3 sm:mt-0">
                    <li>
                        <Link
                            href="/AboutMe"
                            className="hover:text-gray-700 transition duration-300 ease-in-out"
                        >
                            about me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Experience"
                            className="hover:text-gray-700 transition duration-300 ease-in-out"
                        >
                            experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Gallery"
                            className="hover:text-gray-700 transition duration-300 ease-in-out"
                        >
                            gallery
                        </Link>
                    </li>
                    <li>
                        <a
                            href="mailto:trumanzhe@gmail.com?subject=Hello%20Truman&body=I%20would%20like%20to%20get%20in%20touch."
                            className="bg-black text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            contact me
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Page;
