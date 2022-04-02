import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
            url: "https://nydeo.org",
            duration: "January 2022 - Present",
            description: "WIP",
        },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    };

    const itemX = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const handleTCSClick = () => {
        let prevActive = document.getElementsByClassName("active-work")[0];
        if (prevActive && prevActive.id === "tcs") return;
        prevActive?.classList.add("inactive-work");
        prevActive?.classList.remove("active-work");
        document.getElementById("tcs")?.classList.add("active-work");

        document.getElementById("name").innerHTML = workData.tcs.name;
        document.getElementById("title").innerHTML = workData.tcs.title;
        document.getElementById("name").href = workData.tcs.url;
        document.getElementById("duration").innerHTML = workData.tcs.duration;
        document.getElementById("description").textContent = workData.tcs.description;
    };

    const handleMPRClick = () => {
        let prevActive = document.getElementsByClassName("active-work")[0];
        if (prevActive && prevActive.id === "mpr") return;
        prevActive?.classList.add("inactive-work");
        prevActive?.classList.remove("active-work");
        document.getElementById("mpr")?.classList.add("active-work");

        document.getElementById("name").textContent = workData.mpr.name;
        document.getElementById("title").textContent = workData.mpr.title;
        document.getElementById("name").href = workData.mpr.url;
        document.getElementById("duration").textContent = workData.mpr.duration;
        document.getElementById("description").textContent = workData.mpr.description;
    };

    const handleNYDEOClick = () => {
        let prevActive = document.getElementsByClassName("active-work")[0];
        if (prevActive && prevActive.id === "nydeo") return;
        prevActive?.classList.add("inactive-work");
        prevActive?.classList.remove("active-work");
        document.getElementById("nydeo")?.classList.add("active-work");

        document.getElementById("name").textContent = workData.nydeo.name;
        document.getElementById("title").textContent = workData.nydeo.title;
        document.getElementById("name").href = workData.nydeo.url;
        document.getElementById("duration").textContent = workData.nydeo.duration;
        document.getElementById("description").textContent = workData.nydeo.description;
    };

    return (
        <motion.div
            className="py-[100px] bg-gray-800 text-gray-200 w-full max-w-[1000px] mx-auto px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.p className="text-4xl text-gray-100 font-bold inline mb-[40px]" variants={itemY}>
                My work
            </motion.p>
            <div className="flex h-screen">
                <ul className="flex flex-col justify-left items-left w-[160px] h-full text-[13px] font-code float-left">
                    <motion.li
                        id="tcs"
                        className="w-[160px] duration-300 cursor-none inline-block border-l-[3px] border-gray-600 py-4 active-work"
                        onClick={handleTCSClick}
                        variants={itemX}
                    >
                        theCoderSchool
                    </motion.li>
                    <motion.li
                        id="mpr"
                        className="w-[160px] duration-300 cursor-none inline-block border-l-[3px] border-gray-600 py-4 inactive-work"
                        onClick={handleMPRClick}
                        variants={itemX}
                    >
                        Muddy Paws Rescue
                    </motion.li>
                    <motion.li
                        id="nydeo"
                        className="w-[160px] duration-300 cursor-none inline-block border-l-[3px] border-gray-600 py-4 inactive-work"
                        onClick={handleNYDEOClick}
                        variants={itemX}
                    >
                        NYDEO
                    </motion.li>
                </ul>

                <div className="ml-[25px] float-right">
                    <motion.div variants={itemY}>
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
                    </motion.div>
                    <motion.p id="duration" className="font-code text-[17px] text-gray-200 mb-4" variants={itemY}>
                        September 2021 - Present
                    </motion.p>
                    <motion.p id="description" className="text-gray-200" variants={itemY}>
                        During my time as a Code Coach at theCoderSchool, I facilitated learning amongst beginner and
                        intermediate programmers. I taught a variety of languages from Scratch, Python, JavaScript, HTML, and
                        CSS. My responsibilities included promoting a positive and productive work environment, devising fun
                        and educational projects for students to gain first-hand experience in their respective areas of
                        study, and helping to maintain the physical class environment.
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
