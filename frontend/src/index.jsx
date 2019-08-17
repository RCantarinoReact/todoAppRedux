import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/root.reducer'

//mids
import promise from 'redux-promise'
import multi from 'redux-multi' // array de actions
import thunk from 'redux-thunk'

const devTools = window.__Redux_DEVTOOLS_EXTENSION__
    && window.__Redux_DEVTOOLS_EXTENSION__()



const store = applyMiddleware(multi, thunk ,promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('app')
)
