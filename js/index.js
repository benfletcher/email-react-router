require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './components/app';
import EmailContainer from './components/email-container';
import EmailListContainer from './components/email-list-container';

console.log("index");

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path=":mailbox_name" component={EmailContainer} />
			<IndexRoute component={EmailListContainer} />
</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(routes, document.getElementById('app'))
);
