
const CartAPI = {
	catalog :[],
	cartItems : [],
	removeItem (item) {
		this.cartItems.splice(this.cartItems.findIndex( i => i === item), 1);
	},
	findCartItem (item) {
		return this.cartItems.find(cartItem => cartItem.id === item.id);
	},
	increaseItem (item) {item.qty++ },
	decreaseItem (item) {
		item.qty--;
		if (item.qty === 0) {
			this.removeItem(item);
		}
	},
	addItem (item) {
		const carItem = this.findCartItem(item);
		if (!carItem){
			this.cartItems.push(Object.assign({qty:1}, item));	
		} else {
			this.increaseItem(carItem);
		}
	},
	cartTotals (qty = 0, total = 0) {

		this.cartItems.forEach(item => {
			qty += item.qty;
			total += item.qty * item.cost;
		});		

		return {qty, total};
	},
	getCatalog(){
		return this.catalog.map(item => {
			return Object.assign({}, item, this.cartItems.find( cItem => cItem.id === item.id));
		})
	},
	init () {
		for (let i = 1; i < 9; i++) {
			this.catalog.push({
				'id':'Widget' + i,
				'title': 'Widget # ' + i,
				'summary': 'A great Widget #' + i,
				'description': 'Lorem ipsum dolor sit amet',
				'cost': i * 100
			});
		}
	}
}

CartAPI.init();
export default CartAPI;


// var _catalog = [];

// for (let i = 1; i < 9; i++) {
// 	_catalog.push({
// 		'id':'Widget' + i,
// 		'title': 'Widget # ' + i,
// 		'summary': 'A great Widget #' + i,
// 		'description': 'Lorem ipsum dolor sit amet',
// 		'cost': i * 100
// 	});
// }

// var _cartItems = [];

// const _removeItem = (item) => {
// 	_cartItems.splice(_cartItems.findIndex( i => i === item), 1);
// };

// const _findCartItem = (item) => {
// 	return _cartItems.find(cartItem => cartItem.id === item.id);
// };

// const _increaseItem = (item) => item.qty++ ;

// const _decreaseItem = (item) => {
// 	item.qty--;
// 	if (item.qty === 0) {
// 		_removeItem(item);
// 	}
// };

// const _addItem = (item) => {
// 	const carItem = _findCartItem(item);
// 	if (!carItem){
// 		_cartItems.push(Object.assign({qty:1}, item));	
// 	} else {
// 		_increaseItem(carItem);
// 	}
// };

// const _cartTotals = (qty = 0, total = 0) => {
// 	_cartItems.forEach(cartItem => {
// 		qty += carItem.qty;
// 		total += carItem.qty * cartItem.cost;
// 	});

// 	return {qty, total};
// }
