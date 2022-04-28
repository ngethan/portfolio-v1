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

            <motion.div className="text-[17px]" variants={itemY}>
                Hey, I'm Ethan! I've been playing around with computers ever since I was young and my love for them has only
                grown since. One of the things I value most is the ability to express my creativity through programming. The
                possibilities are endless and I'm always looking to learn more.
                <br />
                <br />I value being able to make a difference in the world. My work with Muddy Paws Rescue illustrates the
                impact I strive to have on the world. When I saw the MPR advertisement on a volunteer site asking for website
                developers, I knew this was my chance to use my programming knowledge to better the world. Being a teacher
                too, not only gives me the opportunity to impart knowledge, but it also requires me to undergo constant
                learning as well. There is an art to teaching, learning students, and finding ways to reach and help them that
                is extremely gratifying.
            </motion.div>
        </motion.div>
    );
};

export default About;
