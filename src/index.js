import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store';
import { store } from './redux/store';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={<p>loading...</p>} persistor={persistor}> */}
    {/* <React.StrictMode> */}
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
        <App />
      </BrowserRouter>
    </StyleSheetManager>
    {/* </React.StrictMode> */}
    {/* </PersistGate> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
