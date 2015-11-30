import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	return (
		<h1>Let's shop <Link className="btn btn-success pull-right" to="/cart">To cart</Link></h1>
	);
};