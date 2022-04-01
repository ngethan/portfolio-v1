import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cursor from "./components/Cursor";
import Side from "./components/Side";
import Work from "./components/Work";

function App() {
    return (
        <div>
            <Navbar />
            <Cursor />
            <Home />
            <About />
            <Work />
            <Side />
        </div>
    );
}

export default App;
