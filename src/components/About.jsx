import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            id="about"
            className="py-[100px] text-gray-200 w-full max-w-[950px] mx-auto flex flex-col px-4"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold" variants={itemY}>
                {["A", "b", "o", "u", "t"].map((letter) => {
                    return (
                        <h1 className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500">
                            {letter}
                        </h1>
                    );
                })}
            </motion.div>

            <motion.div variants={itemY}>
                Hi, I'm Ethan. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.div>
        </motion.div>
    );
};

export default About;
