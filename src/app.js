import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />

                             
        </>
        
    )
} 

ReactDOM.render(<App />, document.getElementById("root"));









