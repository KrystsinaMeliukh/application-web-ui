import React from "react";
import {ReactComponent as UserIcon} from "./users-icon.svg"
import {ScreenNames} from "./App";
import {Button} from "react-bootstrap";

type GreetingProps = {
    switchMainScreen: (screen: ScreenNames) => void
}

class Greeting extends React.Component<GreetingProps> {
    render() {
        return (
            <main role="main" className="container bg-white mt-2 main-content">
                <h1 className="mt-5 border-bottom pb-2">Welcome to the organization management system!</h1>
                <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
                    <div className="col">
                        <div className="column-icon bg-primary bg-gradient">
                            <svg width="1em" height="1em">
                                <UserIcon/>
                            </svg>
                        </div>
                        <h2>Users information</h2>
                        <p>Dashboard to manage information about all users in organization. You can add, delete and edit
                            information about any user.</p>
                        <Button onClick={() => this.props.switchMainScreen(ScreenNames.userDashboard)} className="icon-link">
                            View users dashboard
                        </Button>
                    </div>
                </div>

            </main>
        );
    }
}

export default Greeting;