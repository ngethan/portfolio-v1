import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cursor from "./components/Cursor";
import Side from "./components/Side";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Work />
            <Contact />
            <Side />
            <Cursor />
        </div>
    );
}

export default App;
