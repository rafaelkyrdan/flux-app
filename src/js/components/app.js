import React from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import CatalogDetail from './product/app-catalogdetail';

import Header from './header/app-header';

import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router'

// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import History from 'react-router/lib/BrowserHistory'
// import { Router, Route, Link } from 'react-router'

/*
export default class App extends React.Component {
	render() {
		return (<div className="container">
					<header>
						<Header/>
					</header>
					<div className="page">
						<Catalog/>
						<Cart/>
					</div>					
				</div>);
	}
}

*/

export default class App extends React.Component {
	render() {
		return (<Router>
					<Route path="/" component={Template}>
						<IndexRoute component={Catalog} />
						<Route path="cart" component={Cart} />
						<Route path="item/:item" component={CatalogDetail} />
					</Route>					
				</Router>);
	}
}