import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Category from './Category';
import Home from './Home';
import Expenses from './Expenses'
import Graph from './Graph';


class App  extends Component {
    state = {  } 
    render() { 
        return (
            <Router>
                <Routes>
                    <Route path='/' exact={true} Component={Home} />
                    <Route path='/category' exact={true} Component={Category} />
                    <Route path='/expenses' exact={true} Component={Expenses} />
                    <Route path='/graph' exact={true} Component={Graph} />
                </Routes>
            </Router>
        );
    }
}
 
export default App ;