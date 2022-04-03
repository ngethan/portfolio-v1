import { useState, useEffect } from "react";

const Delayed = ({ children, delay }) => {
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShown(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return shown ? children : null;
};

export default Delayed;
