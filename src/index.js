import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './app/root';
import Store from './store';

/**
 * Provider component takes care of getting the state and subscribing to state changes.
 * Makes store available to `connect` calls.
 */

ReactDOM.render(
    <Provider store={Store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
