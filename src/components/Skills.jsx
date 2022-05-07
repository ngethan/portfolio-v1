import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skill from "./Skill";
import { FaReact, FaJava, FaPython, FaCss3, FaSquarespace, FaAws, FaNodeJs, FaWordpressSimple } from "react-icons/fa";
import { DiMongodb, DiHtml5, DiGit, DiHeroku, DiSass } from "react-icons/di";
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
        <motion.div
            id="skills"
            className="pb-[100px] flex flex-row flex-wrap mx-auto w-full max-w-[950px] px-4"
            initial="hidden"
            animate={controls}
            variants={list}
            ref={ref}
        >
            <motion.div className="name flex text-[0px] text-gray-100 text-7xl sm:text-8xl font-bold" variants={itemY}>
                <h1>
                    {["S", "k", "i", "l", "l", "s"].map((letter, index) => {
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

            <div className="hidden md:flex flex-row flex-wrap justify-center">
                <Skill name="HTML" icon={DiHtml5} variants={itemY} />
                <Skill name="CSS" icon={FaCss3} variants={itemY} />
                <Skill name="Sass" icon={DiSass} variants={itemY} />
                <Skill name="TailwindCSS" icon={SiTailwindcss} variants={itemY} />
                <Skill name="JavaScript" icon={SiJavascript} variants={itemY} />
                <Skill name="TypeScript" icon={SiTypescript} variants={itemY} />
                <Skill name="Node.js" icon={FaNodeJs} variants={itemY} />
                <Skill name="Python" icon={FaPython} variants={itemY} />
                <Skill name="Java" icon={FaJava} variants={itemY} />
                <Skill name="React.js" icon={FaReact} variants={itemY} />
                <Skill name="Git" icon={DiGit} variants={itemY} />
                <Skill name="MongoDB" icon={DiMongodb} variants={itemY} />
                <Skill name="Squarespace" icon={FaSquarespace} variants={itemY} />
                <Skill name="Wordpress" icon={FaWordpressSimple} variants={itemY} />
                <Skill name="Netlify" icon={SiNetlify} variants={itemY} />
                <Skill name="Heroku" icon={DiHeroku} variants={itemY} />
                <Skill name="AWS" icon={FaAws} variants={itemY} />
            </div>

            <div className="md:hidden flex flex-row flex-wrap justify-center">
                <Skill icon={DiHtml5} variants={itemY} noName />
                <Skill icon={FaCss3} variants={itemY} noName />
                <Skill icon={DiSass} variants={itemY} noName />
                <Skill icon={SiTailwindcss} variants={itemY} noName />
                <Skill icon={SiJavascript} variants={itemY} noName />
                <Skill icon={SiTypescript} variants={itemY} noName />
                <Skill icon={FaNodeJs} variants={itemY} noName />
                <Skill icon={FaPython} variants={itemY} noName />
                <Skill icon={FaJava} variants={itemY} noName />
                <Skill icon={FaReact} variants={itemY} noName />
                <Skill icon={DiGit} variants={itemY} noName />
                <Skill icon={DiMongodb} variants={itemY} noName />
                <Skill icon={FaSquarespace} variants={itemY} noName />
                <Skill icon={FaWordpressSimple} variants={itemY} noName />
                <Skill icon={SiNetlify} variants={itemY} noName />
                <Skill icon={DiHeroku} variants={itemY} noName />
                <Skill icon={FaAws} variants={itemY} noName />
            </div>
        </motion.div>
    );
};

export default Skills;
