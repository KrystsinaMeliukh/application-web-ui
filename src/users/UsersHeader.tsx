import React from "react";
import {ScreenNames} from "../App";

type Props = {
    switchMainScreen: (screen: ScreenNames) => void
}

class UsersHeader extends React.Component<Props>{
    render() {
        return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <button className="brand-button navbar-brand col-md-3 col-lg-2 me-0 px-3"
                        onClick={() => this.props.switchMainScreen(ScreenNames.greeting)}>
                    Web Application UI
                </button>
                <button className="navbar-toggler position-absolute d-md-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#userSideBarMenu" aria-controls="userSideBarMenu" aria-expanded="true"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
            </header>
        );
    }
}
export default UsersHeader;