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
        <div name="home" className="w-full h-screen bg-[#222629]">
            <motion.div
                className="max-w-[1075px] mx-auto px-8 flex flex-col justify-center h-full"
                initial="hidden"
                animate="visible"
                variants={list}
            >
                <motion.p className="text-[#e98074] text-xl font-code" variants={item}>
                    Hi, my name is
                </motion.p>
                <div>
                    <motion.div
                        className="name flex text-[0px] whitespace-nowrap text-[#c7d7ed] text-7xl sm:text-8xl font-bold py-4"
                        variants={item}
                    >
                        <motion.h1 className="duration-300 inline-block align-top hover:text-[#E85A4F]">E</motion.h1>
                        <motion.h1 className="duration-300 inline-block align-top hover:text-[#E85A4F]">t</motion.h1>
                        <motion.h1 className="duration-300 inline-block align-top hover:text-[#E85A4F]">h</motion.h1>
                        <motion.h1 className="duration-300 inline-block align-top hover:text-[#E85A4F]">a</motion.h1>
                        <motion.h1 className="duration-300 inline-block align-top hover:text-[#E85A4F]">n</motion.h1>
                        &nbsp;
                        <motion.h1 className="duration-300 inline-block align-top hover:text-[#E85A4F]">N</motion.h1>
                        <motion.h1 className="duration-300 inline-block align-top hover:text-[#E85A4F]">g</motion.h1>
                    </motion.div>
                </div>
                <motion.h2 className="text-[#8792a1] text-5xl sm:text-6xl font-bold" variants={item}>
                    Full stack developer
                </motion.h2>
                <motion.p className="text-[#8792a1] py-7 max-w-[500px] text-lg" variants={item}>
                    I'm a software engineer specializing in building web and desktop applications. Currently, I'm teaching at{" "}
                    <a
                        className={!data ? "hidden" : "text-[#e98074] hover-animation-light font-code"}
                        href="https://www.thecoderschool.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        theCoderSchool
                    </a>{" "}
                    and developing at{" "}
                    <a
                        className="text-[#e98074] hover-animation-light font-code"
                        href="https://muddypawsrescue.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Muddy Paws Rescue
                    </a>
                    .
                </motion.p>

                <div>
                    <motion.button
                        className="text-[#E85A4F] border-[#E85A4F] font-code text-lg border-2 rounded px-6 py-3 my-2 flex items-center duration-300 test hover:bg-[#E85A4F]/[.2]"
                        variants={item}
                    >
                        View work
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
