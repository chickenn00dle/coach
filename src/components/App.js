import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexContainer from './containers/IndexContainer'
import WorkoutContainer from './containers/WorkoutContainer'
import CustomizeContainer from './containers/CustomizeContainer'
import ShareContainer from './containers/ShareContainer'
import RoutineContainer from './containers/RoutineContainer'

class App extends Component {
  render() {
    return (
        <div>
            <h1>{ process.env.REACT_APP_NAME }</h1>
            <Switch>
                <Route exact path='/' component={ IndexContainer } />
                <Route path='/workout/:id' component={ WorkoutContainer } />
                <Route path='/customize' component={ CustomizeContainer } />
                <Route path='/share' component={ ShareContainer } />
                <Route path='/routine' component={ RoutineContainer } />
            </Switch>
        </div>
    );
  }
}

export default App;
