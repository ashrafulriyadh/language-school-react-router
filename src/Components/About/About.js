import React from 'react';
import './About.css';
import img from '../../images/about.svg';

const About = () => {
	return (
		<div>
			<div className="container my-5 text-center">
				<h1 className="fw-bold">About Us</h1>
				<p className=" mt-4 text"> With the Language School - eLango, you can study whenever and wherever you choose. We have students in over 175 countries and a global reputation as a pioneer in the field of flexible learning. Our teaching also means, if you travel often or need to relocate, you can continue to study wherever you go.
				We are Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!</p>
			</div>
			<div className="container-fluid my-5 py-5 text-center">
			<img src={img} alt="" />
			</div>
		</div>
	);
};

export default About;