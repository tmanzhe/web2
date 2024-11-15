import React from 'react'
import { FaLinkedin } from 'react-icons/fa'; // Import the LinkedIn icon from React Icons
import { FaGithub } from 'react-icons/fa';

const Page = () => {
    return (
        <div className = "my-2">
            <ul className= "flex space-x-2">
                <a href="https://www.linkedin.com/in/trumanchan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={35} />
                </a>
                <a href="https://github.com/tmanzhe" target="_blank" rel="noopener noreferrer">
                        <FaGithub size = {35}/>
                    </a>
                </ul>
        </div>
    )
}
export default Page
