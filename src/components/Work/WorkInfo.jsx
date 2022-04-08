import React from "react";
import { motion } from "framer-motion";

const WorkInfo = ({ work, md }) => {
    const workData = {
        tcs: {
            name: "theCoderSchool",
            title: "Code Coach",
            url: "https://thecoderschool.com/",
            duration: "September 2021 - Present",
            description:
                "During my time as a Code Coach at theCoderSchool, I facilitated learning amongst beginner and intermediate programmers. I taught a variety of languages from Scratch, Python, JavaScript, HTML, and CSS.  My responsibilities included promoting a positive and productive work environment, devising fun and educational projects for students to gain first-hand experience in their respective areas of study, and helping to maintain the physical class environment.",
        },
        mpr: {
            name: "Muddy Paws Rescue",
            title: "Website Developer",
            url: "https://muddypawsrescue.org/",
            duration: "October 2021 - Present",
            description:
                "I'm responsible for the general maintenance and upkeep of the website. I work with numerous languages and technologies including HTML, CSS, JavaScript, Salesforce, and Squarespace. I utilized my programming skills to help bring to life, the vision that the directors had for the website.",
        },
        nydeo: {
            name: "NYDEO",
            title: "Fullstack Developer",
            url: "https://nydeo.org",
            duration: "January 2022 - Present",
            description: "WIP",
        },
    };

    const list = {
        visible: {
            opacity: 1,
            transition: {
                // delay: 0.5,
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

    let data = workData.tcs;
    if (work === "mpr") data = workData.mpr;
    else if (work === "nydeo") data = workData.nydeo;

    return (
        <motion.div
            className={!md ? "ml-[25px] float-right" : "ml-4 float-right"}
            initial="hidden"
            animate="visible"
            key={work}
            variants={list}
        >
            <motion.div variants={itemY}>
                <motion.p id="title" className="inline text-[20px] text-gray-100 font-bold mb-1">
                    {data.title}
                </motion.p>
                <p className="inline text-[20px] text-red-500 font-bold"> @ </p>
                <a
                    id="name"
                    className="inline text-[20px] text-red-500 font-bold hover-animation-dark"
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {data.name}
                </a>
            </motion.div>
            <motion.p id="duration" className="font-code text-[17px] text-gray-200 mb-4" variants={itemY}>
                {data.duration}
            </motion.p>
            <motion.p id="description" className="text-gray-200" variants={itemY}>
                {data.description}
            </motion.p>
        </motion.div>
    );
};

export default WorkInfo;
