import React from "react";

class Greeting extends React.Component{
    render() {
        return (
            <main role="main" className="container bg-white mt-2 main-content">
                <h1 className="mt-5">Greeting!</h1>
                <p className="lead">Test body</p>
            </main>
        );
    }
}

export default Greeting;