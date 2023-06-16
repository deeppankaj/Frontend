import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import { store } from './Redux-toolkit/Store'
import { Provider } from 'react-redux'
import ScrollToTop from './utility/ScrollTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <ScrollToTop/>
        <App/>
      </Provider>
    </React.StrictMode>
  </Router>
);
