import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Stars from "./components/Stars";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
    return (
        <div>
            <Helmet>
                <title>Ethan Ng</title>
                <meta charset="utf-8" />
                <meta name="title" content="Ethan Ng" />
                <meta
                    name="description"
                    content="Ethan Ng is a software engineer who loves designing and building applications."
                />
                <link rel="icon" href="./favicon.ico" />
                <meta name="theme-color" content="#e8313f" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" href="./favicon.ico" />
                <link rel="manifest" href="./manifest.json" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ethanng.dev/" />
                <meta property="og:title" content="Ethan Ng" />
                <meta
                    property="og:description"
                    content="Ethan Ng is a software engineer who loves designing and building applications."
                />
                <meta name="google" content="notranslate" />
                <meta http-equiv="Content-Language" content="en" />
                <meta property="og:image" content="./image.png" />
                <meta name="twitter:creator" content="@intuitiveen" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.ethanng.dev/" />
                <meta property="twitter:title" content="Ethan Ng" />
                <meta
                    property="twitter:description"
                    content="Ethan Ng is a software engineer who loves designing and building applications."
                />
                <meta property="twitter:image" content="./image.png" />
            </Helmet>
            <Stars />
            <Navbar />
            <Home />
            <About />
            <Work />
            <Contact />
            <Footer />
            <Cursor />
        </div>
    );
}

export default App;
