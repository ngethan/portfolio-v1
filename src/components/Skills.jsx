import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaReact,
    FaJava,
    FaPython,
    FaCss3,
    FaSquarespace,
    FaAws,
    FaNodeJs,
    FaNpm,
    FaYarn,
    FaWordpressSimple,
} from "react-icons/fa";
import { DiMongodb, DiHtml5, DiGit, DiHeroku } from "react-icons/di";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNetlify } from "react-icons/si";

const Skills = () => {
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
        <motion.div className="text-gray-100" initial="hidden" animate={controls} variants={list} ref={ref}>
            <motion.div variants={itemY}>
                FRAMEWORKS
                <FaReact />
                <SiTailwindcss />
                LANGUAGES
                <FaNodeJs />
                <SiJavascript />
                <SiTypescript />
                <DiHtml5 />
                <FaCss3 />
                <FaJava />
                <FaPython />
                DATABASES
                <DiMongodb />
                VERSION CONTROL
                <DiGit />
                CMS
                <FaSquarespace />
                <FaWordpressSimple />
                PACKAGE MANAGERS
                <FaNpm />
                <FaYarn />
                HOSTING
                <SiNetlify />
                <DiHeroku />
                <FaAws />
            </motion.div>
        </motion.div>
    );
};

export default Skills;
