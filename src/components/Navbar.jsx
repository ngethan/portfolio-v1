import React, { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

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
        else document.getElementById("navbar").style.top = "-80px";
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

    const changeTheme = () => {
        const toggleDark =
            window.innerWidth >= 768 ? document.getElementById("toggle-dark") : document.getElementById("toggle-dark-md");
        const toggleLight =
            window.innerWidth >= 768 ? document.getElementById("toggle-light") : document.getElementById("toggle-light-md");

        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }

        if (toggleDark.style.display === "inline-flex") {
            toggleDark.style.display = "none";
            toggleLight.style.display = "inline-flex";
        } else {
            toggleDark.style.display = "inline-flex";
            toggleLight.style.display = "none";
        }
    };

    return (
        <motion.div
            id="navbar"
            className={
                top
                    ? "duration-300 fixed w-full h-[50px] flex justify-between items-center px-[50px] py-[40px] bg-[#222629] text-[#ccd6f6]"
                    : "duration-300 fixed w-full h-[50px] flex justify-between items-center px-[50px] py-[40px] bg-[#222629] box-shadow text-[#ccd6f6]"
            }
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                animate="visible"
                variants={item}
            >
                <motion.h1 className="text-5xl text-[#e98074] font-bold">EN</motion.h1>
            </motion.div>
            <motion.ul className="hidden md:flex font-code text-lg" initial="hidden" animate="visible" variants={list}>
                <motion.li variants={item} className="cursor-none">
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Home</p>
                </motion.li>
                <motion.li variants={item} className="cursor-none">
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">About</p>
                </motion.li>
                <motion.li variants={item} className="cursor-none">
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Skills</p>
                </motion.li>
                <motion.li variants={item} className="cursor-none">
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Work</p>
                </motion.li>
                <motion.li variants={item} className="cursor-none">
                    <p className="duration-300 hover-animation-dark hover:text-[#e85a4f]">Contact</p>
                </motion.li>
                <motion.li className="relative ml-5 cursor-none" variants={item}>
                    <FiSun
                        onClick={changeTheme}
                        size={25}
                        style={{
                            display: "inline-flex",
                            position: "absolute",
                            bottom: "1.3px",
                            left: 0,
                        }}
                        id="toggle-light"
                    />
                    <FiMoon
                        onClick={changeTheme}
                        size={25}
                        style={{
                            display: "none",
                            position: "absolute",
                            bottom: "2.5px",
                            left: 0,
                        }}
                        id="toggle-dark"
                    />
                </motion.li>
            </motion.ul>

            <motion.ul className="flex md:hidden font-code text-lg" initial="hidden" animate="visible" variants={list}>
                <motion.li className="relative" variants={item}>
                    <FiSun
                        onClick={changeTheme}
                        size={25}
                        style={{
                            display: "inline-block",
                            position: "relative",
                            top: "10px",
                            cursor: "pointer",
                        }}
                        id="toggle-light-md"
                    />
                    <FiMoon
                        onClick={changeTheme}
                        size={25}
                        style={{
                            display: "none",
                            position: "relative",
                            top: "10px",
                            cursor: "pointer",
                        }}
                        id="toggle-dark-md"
                    />
                </motion.li>
                <div onClick={handleClick} className="md:hidden">
                    {" "}
                    <Hamburger toggled={nav} toggle={setNav} size={25} />
                </div>
            </motion.ul>

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
