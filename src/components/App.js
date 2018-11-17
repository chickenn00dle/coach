import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexContainer from './containers/IndexContainer'
import WorkoutContainer from './containers/WorkoutContainer'
import CustomizeContainer from './containers/CustomizeContainer'
import ShareContainer from './containers/ShareContainer'
import RoutineContainer from './containers/RoutineContainer'
// Material
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Switch>
                <Route exact path='/' component={ IndexContainer } />
                <Route path='/workout/:id' component={ WorkoutContainer } />
                <Route path='/customize' component={ CustomizeContainer } />
                <Route path='/share' component={ ShareContainer } />
                <Route path='/routine' component={ RoutineContainer } />
            </Switch>
        </React.Fragment>
    );
  }
}

export default App;
