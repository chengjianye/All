import React from 'react';
import ReactDOM from 'react-dom';
import App from 'view/App.jsx';
import {Provider} from 'react-redux';
import Store from 'store'
ReactDOM.render(
    <Provider store={Store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);

