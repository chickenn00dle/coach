import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { saveState } from './localStorage'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme/Settings'

store.subscribe( () => {
    saveState( {
        workouts: store.getState().workouts 
    })
})

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>    
            <MuiThemeProvider theme={ theme }>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
), document.getElementById( 'root' ))
registerServiceWorker()
