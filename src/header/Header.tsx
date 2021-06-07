import React from "react";
import {Navbar} from "react-bootstrap";
import {ScreenNames} from "../App";

type Props = {
    switchMainScreen: (screen: ScreenNames) => void
}

class Header extends React.Component<Props> {
    render() {
        return (
            <header>
                <Navbar variant="dark" bg="dark" expand="md" fixed="top">
                    <button className="brand-button navbar-brand col-md-3 col-lg-2 me-0 px-3"
                        onClick={() => this.props.switchMainScreen(ScreenNames.greeting)}>
                        Web application interface
                    </button>
                </Navbar>
            </header>
        )
    }
}

export default Header;