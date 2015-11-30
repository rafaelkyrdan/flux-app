import React from 'react';
import Header from './header/app-header';

export default (props) => {
	return (
		<div className="container">
			<header>
				<Header/>
			</header>
			<div className="page">
				{props.children}
			</div>					
		</div>
	);
};