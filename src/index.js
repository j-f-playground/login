import Login from 'pages/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(React.createElement(Login), document.getElementById('root'));
serviceWorker.unregister();
