import React from 'react';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

function getCatalogItem(props){
	let item = AppStore.getCatalog().find( ({id}) => id === props.id);
	return {item};
}

const CatalogItem = (props) => {

	let itemStyle = {
		borderBottom:'1px solid #ccc',
		paddingBottom:'15px',
	};

	return (
		<div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
			<h4>{props.item.title}</h4>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>
			<p>{props.item.summary}</p>
			<p> $ {props.item.cost} <span className="text-success">
				{props.item.qty && `(${props.item.qty} in the cart)`}</span>
			</p>
			<div className="btn-group">
				<Link to={ `/item/${props.item.id}` } className="btn btn-default btn-sm">Learn more</Link>
				<CartButton handler={ AppActions.addItem.bind(null, props.item)}
						txt="Add to Cart" />
			</div>
		</div>
	);
}

export default StoreWatchMixin( CatalogItem, getCatalogItem );


