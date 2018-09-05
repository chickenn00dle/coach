import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import IndexPage from './components/IndexPage';
import CustomizePage from './components/CustomizePage';


export default (
    <Route path='/' component={ App }>  
        <IndexRoute component={ IndexPage }>
        <Route path='/customize' component={ CustomizePage } />
    </Route>
);
