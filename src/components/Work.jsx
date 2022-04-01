import React from "react";
import { motion } from "framer-motion";

const Work = () => {
    const workData = {
        tcs: {
            name: "theCoderSchool",
            title: "Code Coach",
            url: "https://thecoderschool.com/",
            duration: "September 2021 - Present",
            description:
                "During my time as a Code Coach at theCoderSchool, I facilitated learning amongst beginner and intermediate programmers. I taught a variety of languages from Scratch, Python, JavaScript, HTML, and CSS.  My responsibilities included promoting a positive and productive work environment, devising fun and educational projects for students to gain first-hand experience in their respective areas of study, and helping to maintain the physical class environment.",
        },
        mpr: {
            name: "Muddy Paws Rescue",
            title: "Website Developer",
            url: "https://muddypawsrescue.org/",
            duration: "October 2021 - Present",
            description:
                "I'm responsible for the general maintenance and upkeep of the website. I work with numerous languages and technologies including HTML, CSS, JavaScript, Salesforce, and Squarespace. I utilized my programming skills to help bring to life, the vision that the directors had for the website.",
        },
        nydeo: {
            name: "NYDEO",
            title: "Fullstack Developer",
            url: "https://nydeo.org/",
            duration: "January 2022 - Present",
            description: "WIP",
        },
    };

    const name = document.getElementById("name");
    const title = document.getElementById("title");
    const duration = document.getElementById("duration");
    const description = document.getElementById("description");

    const handleTCSClick = () => {
        let prevActive = document.getElementsByClassName("active-work")[0];
        if (prevActive && prevActive.id === "tcs") return;
        prevActive?.classList.remove("active-work");
        document.getElementById("tcs")?.classList.add("active-work");

        name.innerHTML = workData.tcs.name;
        title.innerHTML = workData.tcs.title;
        name.href = workData.tcs.url;
        duration.innerHTML = workData.tcs.duration;
        description.innerHTML = workData.tcs.description;
    };

    const handleMPRClick = () => {
        let prevActive = document.getElementsByClassName("active-work")[0];
        if (prevActive && prevActive.id === "mpr") return;
        prevActive?.classList.remove("active-work");
        document.getElementById("mpr")?.classList.add("active-work");

        name.innerHTML = workData.mpr.name;
        title.innerHTML = workData.mpr.title;
        name.href = workData.mpr.url;
        duration.innerHTML = workData.mpr.duration;
        description.innerHTML = workData.mpr.description;
    };

    const handleNYDEOClick = () => {
        let prevActive = document.getElementsByClassName("active-work")[0];
        if (prevActive && prevActive.id === "nydeo") return;
        prevActive?.classList.remove("active-work");
        document.getElementById("nydeo")?.classList.add("active-work");

        name.innerHTML = workData.nydeo.name;
        title.innerHTML = workData.nydeo.title;
        name.href = workData.nydeo.url;
        duration.innerHTML = workData.nydeo.duration;
        description.innerHTML = workData.nydeo.description;
    };

    return (
        <motion.div className="py-[100px] bg-gray-800 text-gray-200 w-full h-full max-w-[1000px] mx-auto px-4 flex flex-col">
            <p className="text-4xl text-gray-100 font-bold inline mb-[40px]">My work</p>
            <div className="flex h-screen">
                <ul className="flex flex-col justify-left items-left w-[160px] h-full text-[13px] font-code float-left">
                    <li
                        id="tcs"
                        className="w-[160px] duration-300 cursor-none inline-block border-l-[3px] border-gray-600 py-4 active-work"
                        onClick={handleTCSClick}
                    >
                        theCoderSchool
                    </li>
                    <li
                        id="mpr"
                        className="w-[160px] duration-300 cursor-none inline-block border-l-[3px] border-gray-600 py-4"
                        onClick={handleMPRClick}
                    >
                        Muddy Paws Rescue
                    </li>
                    <li
                        id="nydeo"
                        className="w-[160px] duration-300 cursor-none inline-block border-l-[3px] border-gray-600 py-4"
                        onClick={handleNYDEOClick}
                    >
                        NYDEO
                    </li>
                </ul>

                <div className="ml-[25px] float-right">
                    <p id="title" className="inline text-[20px] text-gray-100 font-bold mb-1">
                        Code Coach
                    </p>
                    <p className="inline text-[20px] text-red-500 font-bold"> @ </p>
                    <a
                        id="name"
                        className="inline text-[20px] text-red-500 font-bold hover-animation-light"
                        href="https://thecoderschool.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        theCoderSchool
                    </a>
                    <p id="duration" className="font-code text-[17px] text-gray-200 mb-4">
                        September 2021 - Present
                    </p>
                    <p id="description" className="text-gray-200">
                        During my time as a Code Coach at theCoderSchool, I facilitated learning amongst beginner and
                        intermediate programmers. I taught a variety of languages from Scratch, Python, JavaScript, HTML, and
                        CSS. My responsibilities included promoting a positive and productive work environment, devising fun
                        and educational projects for students to gain first-hand experience in their respective areas of
                        study, and helping to maintain the physical class environment.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
