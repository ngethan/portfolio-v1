import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact";
import Side from "./components/Side";
import Cursor from "./components/Cursor";
import Stars from "./components/Stars";

function App() {
    return (
        <div>
            <Stars />
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
