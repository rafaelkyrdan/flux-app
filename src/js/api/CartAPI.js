
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
