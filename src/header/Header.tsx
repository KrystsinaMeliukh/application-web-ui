import React from "react";
import {Navbar} from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar variant="dark" bg="dark" expand="md" fixed="top">
                    <Navbar.Brand href="#home">Web component</Navbar.Brand>
                </Navbar>
            </header>
        )
    }
}

export default Header;