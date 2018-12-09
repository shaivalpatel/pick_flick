import React from "react";
import LoginComponent from "./components/LoginComponent";
import Home from "./containers/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserHomeContainer from "./containers/UserHomeContainer";
import UserProfile from "./containers/UserProfile";
import CriticHomeContainer from "./containers/CriticHomeContainer";
import RegisterUserContainer from "./containers/RegisterUserContainer";
import AdminContainer from "./containers/AdminContainer";
import SearchResultsPage from "./components/SearchResultsPage";

export default class App extends React.Component{

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/"
                               component={Home} />
                        <Route path="/register"
                               component={RegisterUserContainer}/>
                        <Route path="/login"
                               component={LoginComponent} />
                        <Route path="/:userid/home"
                               component={UserHomeContainer} />
                        <Route path="/critic/:userid/home"
                               component={CriticHomeContainer} />
                        <Route path="/profile/:userid"
                               component={UserProfile} />
                       <Route path="/admin"
                               component={AdminContainer}/>
                        <Route path="/search/:term"
                               component={SearchResultsPage}/>
                    </div>
                </Router>
            </div>
        )
    }
}