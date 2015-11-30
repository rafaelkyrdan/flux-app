import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

function getCartTotals(){
	return AppStore.getCartTotals();
}

const Header = (props) => {

	return (
		<div>
			<nav className="navbar navbar-default">
  				<div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <Link className="navbar-brand" to="/">Lets go shopping</Link>
				    </div>				    
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<div className="av navbar-nav navbar-right">
							<span className="text-success">{`${props.qty} items in cart. `}</span>
							<span className="text-success">{` Total: $ ${props.total} `}</span>								
							<Link className="btn btn-success" to="/cart">Go to cart</Link>
						</div>					  
					</div>
			    </div>
			</nav>
		</div>
		
	);
};

export default StoreWatchMixin(Header, getCartTotals);


						