import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiCodepen } from "react-icons/fi";

const Footer = () => {
    const handleViewSection = (e) => {
        document.getElementById(e.target.dataset.section).scrollIntoView();
    };
    return (
        <footer className="flex flex-col justify-center items-center sticky top-full pb-[20px] w-full h-auto mb-[20px]">
            <h1 className="text-[20px] text-red-400 font-bold mb-[20px]">
                Ethan Ng&nbsp;&nbsp;
                <p className="text-gray-100 inline-block font-normal">Portfolio</p>
            </h1>
            <ul className="flex flex-row text-gray-100 text-[18px]">
                <li>
                    <h1
                        className="mb-[10px] md:mx-[20px] duration-300 hover-animation-dark hover:text-red-400"
                        data-section="home"
                        onClick={handleViewSection}
                    >
                        Home
                    </h1>
                </li>
                <li>
                    <h1
                        className="mb-[10px] md:mx-[20px] duration-300 hover-animation-dark hover:text-red-400"
                        data-section="about"
                        onClick={handleViewSection}
                    >
                        About
                    </h1>
                </li>
                <li>
                    <h1
                        className="mb-[10px] md:mx-[20px] duration-300 hover-animation-dark hover:text-red-400"
                        data-section="work"
                        onClick={handleViewSection}
                    >
                        Work
                    </h1>
                </li>
                <li>
                    <h1
                        className="mb-[10px] md:mx-[20px] duration-300 hover-animation-dark hover:text-red-400"
                        data-section="contact"
                        onClick={handleViewSection}
                    >
                        Contact
                    </h1>
                </li>
            </ul>

            <ul className="flex flex-row mb-[10px]">
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a href="https://github.com/intuitiveen" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FiGithub
                            className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a
                        href="https://www.linkedin.com/in/ethan-ng-007312235/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Linkedin"
                    >
                        <FiLinkedin
                            className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a href="https://www.instagram.com/ethan.ng6/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FiInstagram
                            className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
                <li className="group mx-[15px] px-[5px] my-[20px]">
                    <a href="https://codepen.io/intuitiveen/" target="_blank" rel="noreferrer" aria-label="CodePen">
                        <FiCodepen
                            className="text-gray-200 duration-300 group-hover:text-red-500 group-hover:translate-y-[-5px]"
                            size={25}
                        />
                    </a>
                </li>
            </ul>
            <a
                href="https://github.com/intuitiveen/portfolio"
                target="_blank"
                rel="noreferrer"
                className="text-gray-100 text-[16px] hover-animation-dark font-code hover:text-red-500 duration-300"
                aria-label="Project Repository"
            >
                Designed and built by Ethan Ng
            </a>
        </footer>
    );
};

export default Footer;
