import React from "react";
import { motion } from "framer-motion";

const Home = (data) => {
    const list = {
        visible: {
            opacity: 1,
            transition: {
                delay: 0.6,
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

    const item = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            name="home"
            className="w-full h-screen bg-gray-800 max-w-[1075px] mx-auto px-8 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <motion.div className="flex text-gray-100 text-xl font-code" variants={item}>
                <p>👋 Hi there, I'm</p>
            </motion.div>
            <motion.div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold my-4" variants={item}>
                {["E", "t", "h", "a", "n", "\xa0", "N", "g"].map((letter) => {
                    return <h1 className="duration-300 inline-block align-top hover:text-red-500">{letter}</h1>;
                })}
            </motion.div>
            <motion.div className="flex text-red-500 text-5xl sm:text-6xl font-bold" variants={item}>
                <h2>Web Developer</h2>
            </motion.div>
            <motion.p className="text-gray-200 my-7 max-w-[500px] text-lg" variants={item}>
                I'm a software engineer specializing in building web and desktop applications. Currently, I'm teaching at{" "}
                <a
                    className={!data ? "hidden" : "text-red-200 hover-animation-light font-code"}
                    href="https://www.thecoderschool.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    theCoderSchool
                </a>{" "}
                and developing at{" "}
                <a
                    className="text-red-200 hover-animation-light font-code"
                    href="https://muddypawsrescue.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Muddy Paws Rescue
                </a>
                .
            </motion.p>

            <motion.div variants={item}>
                <button className="text-red-400 border-red-400 font-code text-lg border-2 rounded px-6 py-3 my-2 flex items-center duration-300 hover:bg-red-300/[.3] cursor-none">
                    View work
                </button>
            </motion.div>
        </motion.div>
    );
};

export default Home;
