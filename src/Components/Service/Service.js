import React from 'react';
import './Service.css'

const Service = (props) => {

	const {title,img,about,price,lession} = props.service;
	return (
		<div>
			<div className="col">
   	  <div className="card h-100 hvr-float-shadow">
		<img src={img} className="card-img-top" alt="..."/>
      <div className="card-body text-center">

        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{about}</p>
		<p className="card-text">Total Lession:  <i className="fas fa-book-reader icon-color"></i> {lession}</p>
		<h5 className="card-text"> Price: <span className="text-danger fw-bold">{price}</span></h5>
      </div>
      <div className="text-center p-3">
        <button className="btn btn-danger border border-0 bg-color"><i className="fas fa-user-plus"></i> Enroll Now</button>
      </div>
    </div>
  </div>
		</div>
	);
};

export default Service;