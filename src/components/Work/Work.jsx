import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkInfo from "./WorkInfo";
import Delayed from "../Delayed";

const Work = () => {
    const [work, setWork] = useState("tcs");

    const [inViewFinal, setInViewFinal] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (inView) {
            setInViewFinal(true);
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                delay: 0.09,
                when: "beforeChildren",
                staggerChildren: 0.05,
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

    const ulRef = useRef();

    const handleClick = (e) => {
        setWork(e.target.dataset.work);

        if (window.innerWidth < 768) {
            let prevActive = document.getElementsByClassName("active-work-md")[0];
            prevActive?.classList.add("inactive-work-md");
            prevActive?.classList.remove("active-work-md");
            e.target.classList.add("active-work-md");
            e.target.classList.remove("inactive-work-md");
        } else {
            let prevActive = document.getElementsByClassName("active-work")[0];
            prevActive?.classList.add("inactive-work");
            prevActive?.classList.remove("active-work");
            e.target.classList.add("active-work");
            e.target.classList.remove("inactive-work");
            if (e.target.dataset.work === "tcs")
                sleep(100).then(() => (document.getElementById("selected-indicator").style.marginTop = -47 * 4 + "px"));
            if (e.target.dataset.work === "mpr")
                sleep(100).then(() => (document.getElementById("selected-indicator").style.marginTop = -47 * 3 + "px"));
            else if (e.target.dataset.work === "nydeo")
                sleep(100).then(() => (document.getElementById("selected-indicator").style.marginTop = -47 * 2 + "px"));
            else if (e.target.dataset.work === "aetheria")
                sleep(100).then(() => (document.getElementById("selected-indicator").style.marginTop = -47 * 1 + "px"));
        }
    };

    return (
        <motion.div
            id="work"
            className="py-[100px] mb-[100px] text-gray-200 w-full h-[500px] max-w-[850px] mx-auto px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold" variants={itemY}>
                <h1>
                    {["M", "y", "\xa0", "w", "o", "r", "k"].map((letter, index) => {
                        return (
                            <span
                                className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500"
                                key={index}
                            >
                                {letter}
                            </span>
                        );
                    })}
                </h1>
            </motion.div>

            <div className="hidden md:flex">
                <motion.ul
                    ref={ulRef}
                    className="flex flex-col justify-left items-left text-[20px] font-medium font-code float-left"
                    variants={itemX}
                >
                    <li
                        id="tcs"
                        className="inline-flex items-center text-left h-[47px] py-4 whitespace-nowrap duration-300 border-l-[2px] border-gray-400 active-work"
                        data-work="tcs"
                        onClick={handleClick}
                    >
                        theCoderSchool
                    </li>
                    <li
                        id="mpr"
                        className="inline-flex items-center text-left h-[47px] py-4 whitespace-nowrap duration-300 border-l-[2px] border-gray-400 inactive-work"
                        data-work="mpr"
                        onClick={handleClick}
                    >
                        Muddy Paws Rescue
                    </li>
                    <li
                        id="nydeo"
                        className="inline-flex items-center text-left h-[47px] py-4 whitespace-nowrap duration-300 border-l-[2px] border-gray-400 inactive-work"
                        data-work="nydeo"
                        onClick={handleClick}
                    >
                        NYDEO
                    </li>
                    <li
                        id="aetheria"
                        className="inline-flex items-center text-left h-[47px] py-4 whitespace-nowrap duration-300 border-l-[2px] border-gray-400 inactive-work"
                        data-work="aetheria"
                        onClick={handleClick}
                    >
                        Aetheria
                    </li>
                    <div
                        id="selected-indicator"
                        className="relative top-0 mt-[-188px] w-[2px] h-[47px] border-l-[2px] border-red-500 duration-300"
                    ></div>
                </motion.ul>

                {inViewFinal ? (
                    <Delayed delay={500}>
                        <WorkInfo work={work} />
                    </Delayed>
                ) : null}
            </div>

            <div className="flex flex-col md:hidden">
                <motion.ul
                    className="flex flex-row h-[47px] text-[18px] font-code mb-[5px] overflow-x-scroll overflow-y-hidden ul-mobile"
                    variants={itemY}
                    aria-label="Work"
                >
                    <li
                        id="tcs-md"
                        className="flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4 active-work-md"
                        data-work="tcs"
                        onClick={handleClick}
                        aria-label="theCoderSchool"
                    >
                        theCoderSchool
                    </li>
                    <li
                        id="mpr-md"
                        className="flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4 inactive-work-md"
                        data-work="mpr"
                        onClick={handleClick}
                        aria-label="Muddy Paws Rescue"
                    >
                        Muddy Paws Rescue
                    </li>
                    <li
                        id="nydeo-md"
                        className="flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4 inactive-work-md"
                        data-work="nydeo"
                        onClick={handleClick}
                        aria-label="NYDEO"
                    >
                        NYDEO
                    </li>
                    <li
                        id="aetheria-md"
                        className="flex items-center justify-center whitespace-nowrap duration-300 border-b-[2px] py-4 inactive-work-md"
                        data-work="aetheria"
                        onClick={handleClick}
                        aria-label="AETHERIA"
                    >
                        Aetheria
                    </li>
                </motion.ul>
                {inViewFinal ? (
                    <Delayed delay={500}>
                        <WorkInfo work={work} md={true} />
                    </Delayed>
                ) : null}
            </div>
        </motion.div>
    );
};

export default Work;
