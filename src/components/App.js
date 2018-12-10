import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexContainer from './containers/IndexContainer'
import WorkoutContainer from './containers/WorkoutContainer'
import CustomizeContainer from './containers/CustomizeContainer'
import ShareContainer from './containers/ShareContainer'
import RoutineContainer from './containers/RoutineContainer'
import store from '../store'
import { FetchWorkouts } from '../actions/FetchActions'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
    componentDidMount() {
        store.dispatch( FetchWorkouts() )
    }

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
        )
    }
}

export default App
