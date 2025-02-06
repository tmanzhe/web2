import React from 'react';
import { FaLinkedin, FaGithub, FaRegFileAlt } from 'react-icons/fa'; // Import icons including the document icon

const Page = () => {
    return (
        <div className="my-2">
            <ul className="flex space-x-4">
                <li>
                    <a
                        href="https://www.linkedin.com/in/trumanchan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out"
                    >
                        <FaLinkedin size={35} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/tmanzhe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
                    >
                        <FaGithub size={35} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://drive.google.com/file/d/16hiUgTfrfKrfaXWOv0rQTZpwBRUr5pMo/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-300 transition duration-300 ease-in-out"
                    >
                        <FaRegFileAlt size={35} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Page;
