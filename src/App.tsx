import React from 'react';
import './App.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Greeting from "./Greeting";
import UsersView from "./users/UsersView";
import UsersHeader from "./users/UsersHeader";

export enum ScreenNames {
    greeting = 0,
    userDashboard = 1
}

interface Props {}

interface State {
    activeMainScreen: ScreenNames;
}

class App extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
            activeMainScreen: ScreenNames.greeting
        }
    }

    switchMainScreen = (screen: ScreenNames) => {
        this.setState({
            activeMainScreen: screen
        })
    }

    render() {
        let mainScreen;
        switch (this.state.activeMainScreen) {
            case ScreenNames.greeting:
                mainScreen = <Greeting switchMainScreen={this.switchMainScreen}/>;
                break;
            case ScreenNames.userDashboard:
                mainScreen = <UsersView switchMainScreen={this.switchMainScreen}/>;
                break;
            default:
        }
        let applicationHeader;
        switch (this.state.activeMainScreen) {
            case ScreenNames.greeting:
                applicationHeader = <Header
                    switchMainScreen={this.switchMainScreen}
                />;
                break;
            case ScreenNames.userDashboard:
                applicationHeader = <UsersHeader
                    switchMainScreen={this.switchMainScreen}
                />;
                break;
            default:
        }

        return (
            <div className="App bg-white">
                {applicationHeader}
                {mainScreen}
                <Footer/>
            </div>
        );
    }
}

export default App;
