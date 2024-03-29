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
    const handleSubmit = (e) => {
        let form = document.getElementById("contact_form");
        let data = new FormData(form);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString(),
        })
            .then(() => setSubmitted(true))
            .catch((err) => alert(err));
        e.preventDefault();
    };

    if (submitted) {
        return (
            <div
                id="contact"
                className="py-[100px] bg-transparent text-gray-200 w-full max-w-[1075px] mx-auto h-screen px-4 flex flex-col"
                initial="hidden"
                animate={controls}
                variants={list}
                ref={ref}
            >
                <div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold " variants={itemY}>
                    <h1 className="text-4xl mb-[40px] duration-300 inline-block align-top hover:text-red-500">
                        Thanks for your message!
                    </h1>
                </div>
            </div>
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
                <h1>
                    {["C", "o", "n", "t", "a", "c", "t"].map((letter, index) => {
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

            <form
                id="contact_form"
                className="font-code inline-flex flex-wrap justify-between w-full"
                method="post"
                onSubmit={handleSubmit}
                name="contact"
                aria-label="Contact"
            >
                <input type="hidden" name="form-name" value="contact" />
                <motion.div className="inline-block flex-[1_1_40%] mr-[3%] mb-[30px]" variants={itemY}>
                    <label
                        id="name-label"
                        htmlFor="name"
                        className="label relative text-red-500 text-[24px] top-10 duration-300"
                    >
                        Name
                    </label>
                    <input type="text" id="name" name="name" className="input relative text-[18px]" required />
                </motion.div>
                <motion.div className="inline-block flex-[1_1_40%] ml-[3%] mb-[30px]" variants={itemY}>
                    <label id="email-label" htmlFor="email" className="relative text-red-500 text-[24px] top-10 duration-300">
                        Email
                    </label>
                    <input type="email" id="email" name="email" className="input relative text-[18px]" required />
                </motion.div>
                <motion.div className="inline-block w-full mb-[40px]" variants={itemY}>
                    <label
                        id="message-label"
                        htmlFor="message"
                        className="relative text-red-500 text-[24px] top-10 duration-300"
                    >
                        Message
                    </label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        className="relative input h-[88px] py-[8px] text-[18px]"
                        required
                    ></textarea>
                </motion.div>

                <motion.button
                    id="submit"
                    className="text-red-400 border-red-400 font-code text-lg border-2 rounded-lg px-4 py-2 my-2 flex items-center duration-300 hover:bg-red-300/[.3]"
                    type="submit"
                    variants={itemY}
                    aria-label="Send message"
                >
                    Send message
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Contact;
