import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer bg-white">
                <div className="footer-block">
                    <p>© Company 2020 - {new Date().getFullYear()}</p>
                </div>
            </footer>
        );
    }
}

export default Footer;