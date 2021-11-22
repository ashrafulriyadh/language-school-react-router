import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

	//call custom hook from hooks folder
	const [services] = useServices();

	return (
		<div>
			<div className="container-fluid mt-5 text-center">
				<h1>Our Services</h1>
				<p className="text-muted">We provide the best services in online</p>
			</div>

		<div className="container my-5">
		<div className="row row-cols-1 row-cols-md-3 g-5">

		{
			//get all services
			services.map(service => <Service service={service} key={service.index}></Service>)
		}

  		</div>
		</div>

		</div>
	);
};

export default Services;