import React from 'react';
import './App.css';
import Home from './pages/Home';
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import {Route} from "react-router-dom";
import CourseView from "./components/CourseView";
import CourseFilterPage from "./pages/CourseFilterPage";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Home}/>
                <Route path="/manabu/" exact component={Home}/>
                <Route path="/manabu/courses" exact component={CourseFilterPage}/>
            </BrowserRouter>
        )
    }
}

export default Router;
