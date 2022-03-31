import React, { useEffect, useRef } from "react";

const Cursor = () => {
    const delay = 10;
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    const dot = useRef(null);
    const dotOutline = useRef(null);

    const toggleCursorVisibility = () => {
        if (cursorVisible.current) {
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1;
        } else {
            dot.current.style.opacity = 0;
            dotOutline.current.style.opacity = 0;
        }
    };

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
            dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.25)";
        } else {
            dot.current.style.transform = "translate(-50%, -50%) scale(1)";
            dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
        }
    };

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    };

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    };

    const mouseExitEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    const mouseMoveEvent = (e) => {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.clientX;
        endY.current = e.clientY;

        dot.current.style.left = endX.current + "px";
        dot.current.style.top = endY.current + "px";

        const q = document.querySelectorAll(":hover");
        const elType = q[q.length - 1].tagName;
        if (elType === "H2" || elType === "P") {
            dot.current.style.width = "2px";
            dot.current.style.height = "20px";
            dot.current.style.backgroundColor = "#E8313F";
            dot.current.style.border = "0px solid transparent";
            dot.current.style.borderRadius = "0";

            dotOutline.current.style.width = "40px";
            dotOutline.current.style.height = "40px";
            dotOutline.current.style.borderColor = "transparent";
            dotOutline.current.style.backgroundColor = "transparent";
        } else if (q[7]?.tagName === "A" || ["A", "BUTTON", "H1", "svg"].includes(elType)) {
            console.log(true);
            dot.current.style.backgroundColor = "transparent";
            dot.current.style.border = "none";
            dot.current.style.borderRadius = "50%";

            dotOutline.current.style.width = "50px";
            dotOutline.current.style.height = "50px";
            dotOutline.current.style.borderColor = "#E8313F";
            dotOutline.current.style.backgroundColor = "transparent";
        } else {
            dot.current.style.width = "8px";
            dot.current.style.height = "8px";
            dot.current.style.backgroundColor = "#E8313F";
            dot.current.style.borderColor = "transparent";
            dot.current.style.borderRadius = "50%";

            dotOutline.current.style.width = "40px";
            dotOutline.current.style.height = "40px";
            dotOutline.current.style.borderColor = "#EC5A65";
            dotOutline.current.style.backgroundColor = "transparent";
        }
    };

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;

        dotOutline.current.style.left = _x.current + "px";
        dotOutline.current.style.top = _y.current + "px";

        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    useEffect(() => {
        document.addEventListener("mousedown", mouseOverEvent);
        document.addEventListener("mouseup", mouseOutEvent);
        document.addEventListener("mousemove", mouseMoveEvent);
        document.addEventListener("mouseenter", mouseEnterEvent);
        document.addEventListener("leave", mouseExitEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener("mousedown", mouseOverEvent);
            document.removeEventListener("mouseup", mouseOutEvent);
            document.removeEventListener("mousemove", mouseMoveEvent);
            document.removeEventListener("mouseenter", mouseEnterEvent);
            document.removeEventListener("leave", mouseExitEvent);

            cancelAnimationFrame(requestRef.current);
        };
    });

    return (
        <div className="relative top-0">
            <div ref={dotOutline} className="cursor-dot-outline"></div>
            <div ref={dot} className="cursor-dot"></div>
        </div>
    );
};

export default Cursor;
