import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'd3/d3.min.js';
import 'topojson/dist/topojson.min.js';
import 'datamaps/dist/datamaps.world.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/umd/popper-utils.min.js';

import Wrapper from './components/Wrapper'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Wrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
