import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cursor from "./components/Cursor";
import Side from "./components/Side";
import Work from "./components/Work";

function App() {
    const workRef = useRef();
    function handleViewWork() {
        workRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <Navbar />
            <Cursor />
            <Home viewWork={handleViewWork} />
            <About />
            <Work ref={workRef} />
            <Side />
        </div>
    );
}

export default App;
