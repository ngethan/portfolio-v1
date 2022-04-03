import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const controls = useAnimation({ threshold: 0.9 });
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

    return (
        <motion.div
            className="py-[100px] bg-gray-800 text-gray-200 w-full max-w-[1000px] mx-auto px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.p className="text-4xl text-gray-100 font-bold inline mb-[40px]" variants={item}>
                About me
            </motion.p>
        </motion.div>
    );
};

export default About;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
// labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
// nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
// esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
// in culpa qui officia deserunt mollit anim id est laborum.
