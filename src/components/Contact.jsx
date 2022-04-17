import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    window.onload = () => {
        document.getElementById("name").addEventListener("focus", (e) => {
            document.getElementById("name-label").style.top = "0px";
        });

        document.getElementById("name").addEventListener("blur", (e) => {
            if (e.target.value?.trim().length === 0) document.getElementById("name-label").style.top = "40px";
            document.getElementById("name-label").style.fontSize = "24px";
        });

        document.getElementById("email").addEventListener("focus", (e) => {
            document.getElementById("email-label").style.top = "0px";
        });

        document.getElementById("email").addEventListener("blur", (e) => {
            if (e.target.value?.trim().length === 0) document.getElementById("email-label").style.top = "40px";
        });

        document.getElementById("message").addEventListener("focus", (e) => {
            document.getElementById("message-label").style.top = "0px";
        });

        document.getElementById("message").addEventListener("blur", (e) => {
            if (e.target.value?.trim().length === 0) document.getElementById("message-label").style.top = "40px";
        });
    };

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <motion.div
                id="contact"
                className="py-[100px] bg-gray-800 text-gray-200 w-full max-w-[1075px] mx-auto h-screen px-4 flex flex-col"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <motion.div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold " variants={itemY}>
                    {["T", "h", "a", "n", "k", "\xa0", "y", "o", "u"].map((letter) => {
                        return (
                            <h1 className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500">
                                {letter}
                            </h1>
                        );
                    })}
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            id="contact"
            className="py-[100px] text-gray-200 w-full max-w-[1075px] mx-auto h-screen px-4 flex flex-col"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold " variants={itemY}>
                {["C", "o", "n", "t", "a", "c", "t"].map((letter) => {
                    return (
                        <h1 className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500 border-b-[2px] border-red-500">
                            {letter}
                        </h1>
                    );
                })}
            </motion.div>
            <form
                className="font-code inline-flex flex-wrap justify-between w-full"
                action="https://public.herotofu.com/v1/dfbaa840-b763-11ec-b4fe-2b9cbf782176"
                onSubmit={handleSubmit}
                method="POST"
                target="_self"
            >
                <motion.div className="inline-block flex-[1_1_40%] mr-[3%] mb-[30px]" variants={itemY}>
                    <label
                        id="name-label"
                        htmlFor="name"
                        className="label relative text-red-500 text-[24px] top-10 duration-300"
                    >
                        Name
                    </label>
                    <input type="text" id="name" name="Name" className="input relative" required />
                </motion.div>
                <motion.div className="inline-block flex-[1_1_40%] ml-[3%] mb-[30px]" variants={itemY}>
                    <label id="email-label" htmlFor="email" className="relative text-red-500 text-[24px] top-10 duration-300">
                        Email
                    </label>
                    <input type="email" id="email" name="Email" className="input relative" required />
                </motion.div>
                <motion.div className="inline-block w-full mb-[40px]" variants={itemY}>
                    <label
                        id="message-label"
                        htmlFor="message"
                        className="relative text-red-500 text-[24px] top-10 duration-300"
                    >
                        Message
                    </label>
                    <textarea type="text" id="message" name="message" className="relative input h-[88px] py-[8px]" required />
                </motion.div>

                <motion.button
                    className="text-red-400 border-red-400 font-code text-lg border-2 rounded-lg px-4 py-2 my-2 flex items-center duration-300 hover:bg-red-300/[.3]"
                    type="submit"
                    variants={itemY}
                >
                    Send message
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Contact;
