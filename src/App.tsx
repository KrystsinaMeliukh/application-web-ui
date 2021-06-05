import React from 'react';
import './App.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Greeting from "./Greeting";

function App() {
    return (
        <div className="App bg-white">
            <Header/>
            <Greeting/>
            <Footer/>
        </div>
    );
}

export default App;
