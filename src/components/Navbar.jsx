import React, { useState, useEffect } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [top, setTop] = useState(true);

    let prevPos = window.pageYOffset;

    const onScroll = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return setTop(true);
        const currPos = window.pageYOffset;
        if (currPos === 0) setTop(true);
        else setTop(false);
        if (prevPos > currPos) document.getElementById("navbar").style.top = "0";
        else document.getElementById("navbar").style.top = "-100px";
        prevPos = currPos;
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

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

    const item = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            id="navbar"
            className={
                top
                    ? "duration-300 fixed w-full h-[80px] flex justify-between items-center p-[50px] bg-[#222629]/[.85] text-[#ccd6f6]"
                    : "duration-300 fixed w-full h-[80px] flex justify-between items-center p-[50px] bg-[#222629]/[.85] box-shadow text-[#ccd6f6]"
            }
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4 }}
                variants={item}
            >
                <motion.h1 className="text-5xl text-[#e98074] font-bold cursor-pointer">EN</motion.h1>
            </motion.div>

            <motion.ul className="hidden md:flex font-code text-lg" initial="hidden" animate="visible" variants={list}>
                <motion.li variants={item}>
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Home</p>
                </motion.li>
                <motion.li variants={item}>
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">About</p>
                </motion.li>
                <motion.li variants={item}>
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Skills</p>
                </motion.li>
                <motion.li variants={item}>
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Work</p>
                </motion.li>
                <motion.li variants={item}>
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Contact</p>
                </motion.li>
            </motion.ul>
            <div onClick={handleClick} className="md:hidden z-10">
                <Hamburger toggled={nav} toggle={setNav} size={25} />
            </div>

            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#222629] flex flex-col justify-center items-center font-code text-lg"
                }
            >
                <li>
                    <p className="py-6 text-4xl duration-300 hover-animation-dark hover:text-[#e85a4f]">Home</p>
                </li>
                <li>
                    <p className="py-6 text-4xl duration-300 hover-animation-dark hover:text-[#e85a4f]">About</p>
                </li>
                <li>
                    <p className="py-6 text-4xl duration-300 hover-animation-dark hover:text-[#e85a4f]">Skills</p>
                </li>
                <li>
                    <p className="py-6 text-4xl duration-300 hover-animation-dark hover:text-[#e85a4f]">Work</p>
                </li>
                <li>
                    <p className="py-6 text-4xl duration-300 hover-animation-dark hover:text-[#e85a4f]">Contact</p>
                </li>
            </ul>
        </motion.div>
    );
};

export default Navbar;
