require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './components/app';
import EmailListContainer from './components/email-list-container';

const routes = (
	<Router history={hashHistory}>
		<Route path="/:mailbox_name" component={App}>
			<IndexRoute component={EmailListContainer} />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(routes, document.getElementById('app'))
);
