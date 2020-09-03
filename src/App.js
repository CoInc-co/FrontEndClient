import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import * as Constants from './utility/Constants';
import * as Utils from './utility/Utils';

import HomePage from './pages/HomePage';
import TestAPIPage from "./pages/TestAPIPage";
import Hailey from "./pages/Hailey";


class App extends React.Component {
    componentDidMount() {
        document.title = Constants.TITLE;
        console.log("This browser " + (Utils.checkLocalStorage() ? "has HTML5 Local Storage!" : "does not support Local Storage..."));
    }

    /**
     * Returns a default template with the current content based on the URL routed page.
     * If page is not found, it redirects to the home page. TODO (Probably should go to page not found [404?] error)
     *
     * @returns {HTMLAllCollection} Collection of HTML components that are displayed at this route
     */
    render() {
        return (
            <Router>
                <div className="whole-view">
                    <div className='content-wrap'>
                        <Switch>
                            <Route exact path = "/" component = {HomePage} />
                            <Route path = "/hailey" component = {Hailey} />
                            <Route path = "/testapi" component= {TestAPIPage} />
                            <Route component= {HomePage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
