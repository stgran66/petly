import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import './index.css';
import redux from './redux/store';
import Theme from './theme';

const { store, persistor } = redux;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/petly">
          <Theme>
            <App />
          </Theme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
