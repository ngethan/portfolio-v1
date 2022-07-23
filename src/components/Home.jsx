import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                delay: 1.1,
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

    const item = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const handleViewWork = () => {
        document.getElementById("work").scrollIntoView();
    };

    return (
        <motion.div
            id="home"
            name="home"
            className="w-full h-screen max-w-[1075px] mx-auto px-4 flex flex-row items-center -z-[1]"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <div className="max-w-[473.9px] max-h-[473.89px] mr-[100px]">
                <motion.div className="flex text-gray-100 text-xl font-code max-w-[181.4px]" variants={item}>
                    <span>👋 Hi there, I'm</span>
                </motion.div>
                <motion.div
                    className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold my-4 max-w-[425.2px]"
                    variants={item}
                >
                    <h1>
                        {["E", "t", "h", "a", "n", "\xa0", "N", "g"].map((letter, index) => {
                            return (
                                <span className="duration-300 inline align-top hover:text-red-500" key={index}>
                                    {letter}
                                </span>
                            );
                        })}
                    </h1>
                </motion.div>
                <motion.div className="flex text-red-500 text-5xl sm:text-6xl font-bold" variants={item}>
                    <h2>Web Developer</h2>
                </motion.div>
                <motion.p className="text-gray-200 my-7 max-w-[500px] text-lg" variants={item}>
                    I'm a software engineer specializing in building web and desktop applications. Currently, I'm teaching at{" "}
                    <a
                        className="text-red-200 hover-animation-light font-code"
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
                    <button
                        className="text-red-400 border-red-400 font-code text-lg border-2 rounded-lg px-5 py-3 my-2 flex items-center duration-300 hover:bg-red-300/[.3]"
                        onClick={handleViewWork}
                        type="button"
                        aria-label="View work"
                    >
                        View work
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
