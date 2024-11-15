import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <nav className="w-[1143px] p-[25px] mx-auto">
            <ul className="flex items-center justify-between text-2xl">
                {/* Left-Aligned Text */}
                <li className="text-4xl font-semibold">
                    <Link href="/">t-man</Link>
                </li>

                {/* Right-Aligned Links */}
                <div className="flex space-x-5">
                    <li>
                        <Link href="/AboutMe">about me</Link>
                    </li>
                    <li>
                        <Link href="/Experience">experience</Link>
                    </li>
                    <a
                        href="mailto:trumanzhe@gmail.com?subject=Hello%20Truman&body=I%20would%20like%20to%20get%20in%20touch."
                        className="bg-black text-white px-4 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
                    >
                        contact me
                    </a>
                </div>
            </ul>
        </nav>
    );
};

export default Page;
