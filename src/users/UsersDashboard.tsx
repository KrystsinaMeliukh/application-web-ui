import React from "react";
import {User} from "../DataModels";
import axios from "axios";

interface Props {
}

type State = {
    userList: User[],
    userListRetrievalError: string
}


class UsersDashboard extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
            userList: [],
            userListRetrievalError: ""
        }
    }

    setUserList(userList: User[]) {
        this.setState({
            userList: userList,
            userListRetrievalError: ""
        })
    }

    componentDidMount() {
        axios.get<User[]>('/users/list').then(response => {
            let users = response.data;
            this.setUserList(users)
            console.log(users);
        }).catch(error => {
            this.setState({
                userListRetrievalError: error.message
            })
            console.log(error.toJSON());
            console.log(error.response.status);
        })
    }

    render() {
        return (
            <main role="main" className="bg-white col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <h2>List of users</h2>
                {this.state.userListRetrievalError === "" ? (
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.userList.map((user, index) => (
                            <tr key={index}>
                                <td>{user.uid}</td>
                                <td>{user.firstName}</td>
                                <td>data</td>
                                <td>placeholder</td>
                                <td>text</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>
                ) : (
                    <p>Error on attempt to get list of users. Error
                        message: <code>{this.state.userListRetrievalError}</code></p>
                )}
            </main>
        );
    }
}

export default UsersDashboard