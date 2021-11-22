import React from 'react';
import img from '../../images/contact.svg';
import './Contact.css';

const Contact = () => {

	//google map api
	const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17388.955599663925!2d90.49561902905623!3d23.619476952704577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10812a520a3%3A0x6d3af4457bec4c90!2sNarayanganj!5e0!3m2!1sen!2sbd!4v1633308912730!5m2!1sen!2sbd";

	return (
		<div>
			{/* contact start */}
			<div className="container mt-5">
				<h1 className="text-center fw-bold my-5">Contact</h1>
			<div className="row text-center justify-content-center align-item-center d-flex align-items-center">
				<div className="col-4">
					<p className="text-danger">Contact Details</p>
					<h1 className="fw-bold mb-3 text-danger">Get In Touch</h1>
					<h1><i className="fas fa-map-marked-alt ico-color"></i> Adress</h1>
					<p>Tokyo Tower, Narayangonj -1430, Dhaka, Bangladesh</p>

					<h1><i className="fas fa-envelope ico-color"></i> Email</h1>
					<p>languageschool@gmail.com</p>
					<p>lango@hotmail.com</p>

					<h1><i className="fas fa-phone-square-alt ico-color"></i> Phone</h1>
					<p>+8801445686474</p>
					<p>+90487547</p>
				</div>
				<div className="col-6">
					<img className="img-fluid" src={img} alt="" />
				</div>
			</div>

			</div>
			<div>
			{/* google map  */}
				<h1 className=" my-5 text-center fw-bold">Also find us on Google Map</h1>
			<iframe src={url} title="map"  width="100%" height="700"></iframe>
			</div>
		</div>
	);
};

export default Contact;