import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import PreviewPage from './PreviewPage';
import CustomizePage from './CustomizePage';
import SharePage from './SharePage';
import WorkoutPage from './WorkoutPage';

class App extends Component {
  render() {
    return (
        <div>
            <h1>Fitness Coach</h1>
            <Switch>
                <Route exact path='/' component={ IndexPage } />
                <Route path='/preview/:id' component={ PreviewPage } />
                <Route path='/customize' component={ CustomizePage } />
                <Route path='/share' component={ SharePage } />
                <Route path='/workout' component={ WorkoutPage } />
            </Switch>
        </div>
    );
  }
}

export default App;
