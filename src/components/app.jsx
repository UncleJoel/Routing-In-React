import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import NavBar from './navbar';
import Films from './films/films';
import SingleFilm from './films/singlefilm';
import People from './people/people';
import Person from './people/person'





class App extends Component {

    render() {
        return (
            <Router>
                <>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/films' component={Films} />
                        <Route exact path='/films/:id' component={SingleFilm} />
                        <Route exact path='/people' component={People} />
                        <Route exact path='/people/:id' component={Person} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default App;

