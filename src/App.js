import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cursor from "./components/Cursor";

function App() {
    return (
        <div>
            <Cursor />
            <Navbar />
            <Home />
            <About />
        </div>
    );
}

export default App;
