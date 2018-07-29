import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './container/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
