import React from 'react';
import AppStore from '../../stores/app-store';
import AppCartItem from './app-cart-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

const cartItems = () => {
	return { items: AppStore.getCart() };
}

//class Cart extends React.Component {
const Cart = (props) => {

	// constructor(){
	// 	super();
	// 	this.state = cartItems();
	// 	this._onChange = this._onChange.bind(this);
	// }

	// componentWillMount(){
	// 	AppStore.addChangeListener( this._onChange );
	// }

	// componentWillUnmount(){
	// 	AppStore.removeChangeListener( this._onChange );
	// }

	// _onChange(){
	// 	this.setState( cartItems )
	// }

	//render(){

		var total = 0;
		//var items = this.state.items.map((item, i) => {
		var items = props.items.map((item, i) => {	
			let subtotal = item.cost * item.qty;
			total += subtotal;

			return (<AppCartItem
						subtotal={subtotal}
						key={i}
						item={item} />);
		});

		return (<div>
					<h1>Cart</h1>
					<table className="table table-hover">
				      <thead>
				        <tr>
				          <th>#</th>
				          <th>Item</th>
				          <th>Quantaty</th>
				          <th>Actions</th>
				          <th>Total</th>
				        </tr>
				      </thead>
				      <tbody>
				        {items}
				      </tbody>
				      <tfoot>
				      	<tr>
				      		<td colSpan="4" className="text-right">Total</td>
				      		<td>$ {total}</td>
				      	</tr>
				      </tfoot>
				    </table>
				    <Link to="/">Continue shopping</Link>					
				</div>);
	//}
}

export default StoreWatchMixin(Cart, cartItems);



























