import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';
import * as serviceWorker from './serviceWorker';
import{Provider} from 'react-redux';
import { createStore } from 'redux';


import reducers from './redux/reducers';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENTIONS__ && window.__REDUX_DEVTOOLS_EXTENTIONS__()

);

store.subscribe(() => console.log(store.getState()) )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
