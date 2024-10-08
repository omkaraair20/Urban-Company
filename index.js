import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';

import configureStore from './store';
 
const initState={};
const store=configureStore(initState);

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
,document.getElementById('root'))

