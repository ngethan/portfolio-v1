import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, icon, noName }) => {
    const Icon = icon;

    const itemY = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <motion.div variants={itemY}>
            <div
                className={
                    !noName
                        ? "group rounded px-[10px] mb-[20px] h-[75px] bg-[#1b1c1b] shadow-lg shadow-red-100/[.5] duration-300 hover:scale-105 transform-gpu mr-[50px]"
                        : "group rounded px-[10px] mb-[20px] h-[40px] bg-[#1b1c1b] shadow-lg shadow-red-100/[.5] duration-300 hover:scale-105 transform-gpu mr-[20px]"
                }
                variants={itemY}
            >
                <div
                    className={
                        !noName
                            ? "text-gray-200 h-[75px] items-center w-fit flex flex-row font-code"
                            : "text-gray-200 h-[40px] items-center w-fit flex flex-row font-code"
                    }
                >
                    <Icon size={!noName ? 50 : 20} className="duration-300 group-hover:text-red-300" />
                    {!noName ? (
                        <p className="ml-[20px] float-right text-[20px] duration-300 group-hover:text-red-300">{name}</p>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Skill;
