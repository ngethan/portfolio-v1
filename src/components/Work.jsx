import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkInfo from "./WorkInfo";
import Delayed from "./Delayed";

const Work = () => {
    const [work, setWork] = useState("tcs");

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
                delay: 0.09,
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

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const handleClick = (e) => {
        setWork(e.target.dataset.work);
        let prevActive = document.getElementsByClassName("active-work")[0];
        prevActive?.classList.add("inactive-work");
        prevActive?.classList.remove("active-work");
        e.target.classList.add("active-work");
        e.target.classList.remove("inactive-work");

        if (e.target.dataset.work === "tcs")
            sleep(100).then(() => (document.getElementById("selected-indicator").style.bottom = "126px"));
        if (e.target.dataset.work === "mpr")
            sleep(100).then(() => (document.getElementById("selected-indicator").style.bottom = "84px"));
        else if (e.target.dataset.work === "nydeo")
            sleep(100).then(() => (document.getElementById("selected-indicator").style.bottom = "42px"));
    };

    return (
        <motion.div
            className="py-[100px] bg-gray-800 text-gray-200 w-full max-w-[1000px] mx-auto px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold" variants={itemY}>
                {["M", "y", "\xa0", "w", "o", "r", "k"].map((letter) => {
                    return (
                        <h1 className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500">
                            {letter}
                        </h1>
                    );
                })}
            </motion.div>

            <div className="hidden md:flex h-screen">
                <ul className="flex flex-col justify-left items-left w-[160px] h-full text-[13px] font-code float-left">
                    <motion.li
                        id="tcs"
                        className="flex items-center text-left w-[160px] h-[42px] duration-300 cursor-none border-l-[2px] border-gray-600 py-4 active-work"
                        data-work="tcs"
                        onClick={handleClick}
                        variants={itemX}
                    >
                        theCoderSchool
                    </motion.li>
                    <motion.li
                        id="mpr"
                        className="flex items-center text-left w-[160px] h-[42px] duration-300 cursor-none border-l-[2px] border-gray-600 py-4 inactive-work"
                        data-work="mpr"
                        onClick={handleClick}
                        variants={itemX}
                    >
                        Muddy Paws Rescue
                    </motion.li>
                    <motion.li
                        id="nydeo"
                        className="flex items-center text-left w-[160px] h-[42px] duration-300 cursor-none border-l-[2px] border-gray-600 py-4 inactive-work"
                        data-work="nydeo"
                        onClick={handleClick}
                        variants={itemX}
                    >
                        NYDEO
                    </motion.li>
                    <motion.div
                        id="selected-indicator"
                        className="relative bottom-[126px] w-[2px] h-[42px] border-l-[2px] border-red-500 transition-top duration-300"
                        variants={itemX}
                    ></motion.div>
                </ul>

                {inView ? (
                    <Delayed>
                        <WorkInfo work={work} variants={itemY} />
                    </Delayed>
                ) : null}
            </div>

            <div className="flex flex-col md:hidden">
                <ul className="flex flex-row justify-center h-full text-[13px] mb-[5px] font-code">
                    <motion.li
                        id="tcs"
                        className="flex items-center justify-center w-[160px] h-[42px] duration-300 cursor-none border-b-[2px] border-gray-600 py-4 active-work"
                        data-work="tcs"
                        onClick={handleClick}
                        variants={itemX}
                    >
                        <button className="cursor-none">theCoderSchool</button>
                    </motion.li>
                    <motion.li
                        id="mpr"
                        className="flex items-center justify-center w-[160px] h-[42px] duration-300 cursor-none border-b-[2px] border-gray-600 py-4 inactive-work"
                        data-work="mpr"
                        onClick={handleClick}
                        variants={itemX}
                    >
                        <button className="cursor-none">Muddy Paws Rescue</button>
                    </motion.li>
                    <motion.li
                        id="nydeo"
                        className="flex items-center justify-center w-[160px] h-[42px] duration-300 cursor-none border-b-[2px] border-gray-600 py-4 inactive-work"
                        data-work="nydeo"
                        onClick={handleClick}
                        variants={itemX}
                    >
                        <button className="cursor-none">NYDEO</button>
                    </motion.li>
                    <div
                        id="selected-indicator"
                        className="relative bottom-[126px] w-[160px] h-[2px] border-b-[2px] border-red-500 transition-top duration-300"
                    ></div>
                </ul>

                <div className="ml-[25px]">
                    <motion.div variants={itemY}>
                        <p id="title" className="inline text-[20px] text-gray-100 font-bold mb-1">
                            Code Coach
                        </p>
                        <p className="inline text-[20px] text-red-500 font-bold"> @ </p>
                        <a
                            id="name"
                            className="inline text-[20px] text-red-500 font-bold hover-animation-dark"
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
