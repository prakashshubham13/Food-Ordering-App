import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routers from './routes';
import {ErrorBoundary} from 'react-error-boundary'
import { Dashboard } from './Page';

function App() {
  return (
    <ErrorBoundary FallbackComponent='Error'>
    <Provider store={store}>
    <Dashboard/>
    </Provider>
    </ErrorBoundary>
  );
}

export default App;
