import React from "react";
import {ScreenNames} from "../App";
import {ReactComponent as HomeIcon} from "./users-home.svg";
import {ReactComponent as ReportsIcon} from "./reports.svg";
import UsersDashboard from "./UsersDashboard";

enum UserMenu {
    dashboard = 0,
    reports = 1
}

type Props = {
    switchMainScreen: (screen: ScreenNames) => void
}

type State = {
    activeUserMenu: UserMenu
}

class UsersView extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
            activeUserMenu: UserMenu.dashboard
        }
    }

    setActiveMenu(activeUserMenu: UserMenu) {
        this.setState({
            activeUserMenu: activeUserMenu
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav id="userSideBarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <button
                                        className={"nav-link nav-button " + (this.state.activeUserMenu === UserMenu.dashboard ? "active" : "")}
                                        onClick={() => {
                                            this.setActiveMenu(UserMenu.dashboard)
                                        }}
                                    >
                                        <svg className="nav-icon">
                                            <HomeIcon/>
                                        </svg>
                                        Dashboard
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={"nav-link nav-button " + (this.state.activeUserMenu === UserMenu.reports ? "active" : "")}
                                        onClick={() => {
                                            this.setActiveMenu(UserMenu.reports)
                                        }}
                                    >
                                        <svg className="nav-icon">
                                            <ReportsIcon/>
                                        </svg>
                                        Reports
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {this.state.activeUserMenu === UserMenu.dashboard && (
                        <UsersDashboard/>
                    )}
                </div>
            </div>
        );
    }
}

export default UsersView;