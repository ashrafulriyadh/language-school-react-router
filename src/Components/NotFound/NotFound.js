import React from 'react';
import './NotFound.css';
import img from '../../images/404s.svg';

const NotFound = () => {
	return (
		<div>
			<div className="text-center mt-5 mb-5">
			<img src={img} alt="" />

			<h1 className="mt-5 fw-bold">Page Not Found</h1>

			</div>
		</div>
	);
};

export default NotFound;