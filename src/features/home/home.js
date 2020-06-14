import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li>
                        <Link to="login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="logout">
                            LogOut
                        </Link>
                    </li>
                    <li>
                        <Link to="reset">
                            Reset pwd
                        </Link>
                    </li>
                    <li>
                        <Link to="home">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Home;
