import React /*, { useState, useEffect }*/ from "react";
import { motion /*, useAnimation*/ } from "framer-motion";

const ContactForm = () => {
    return (
        <motion.div>
            <button className="text-red-400 border-red-400 font-code text-lg border-2 rounded px-6 py-3 my-2 flex items-center duration-300 hover:bg-red-300/[.3]">
                Send message
            </button>
        </motion.div>
    );
};

export default ContactForm;
