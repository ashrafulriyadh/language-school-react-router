import React from 'react';
import './Home.css';
import img1 from '../../images/slider1.jpg';
import img2 from '../../images/slider2.jpg';
import img3 from '../../images/slider3.jpg';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';


const Home = () => {

  //call custom hook from hooks folder
	const [services] = useServices();

  //slice array for showing limited array
	const slicedServices = services.slice(0, 4);

	return (
		<div>
      {/* carousel start */}
			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carousel-text-color fw-bold">Learn IELTS online</h5>
        <p className="carousel-text-color">Learn ielts in a effecient way on online from us</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carousel-text2-color fw-bold">Learn to Speak</h5>
        <p className="carousel-text-color">Learn from any languages</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3}className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="carousel-text-color fw-bold">Learn English Grammer</h5>
        <p className="carousel-text-color">Grammer is important for learning English</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      {/* display services */}
		<div className="container-fluid mt-4 pt-4 text-center">
			<h1 className="fw-bold"> Our Services </h1>
			<p className="text-muted"> We Provide the best services in online</p>
		</div>

		<div className="container my-5 py-5">
		<div className="row row-cols-1 row-cols-md-4 g-4">
			{
        //get all array of services
				slicedServices.map(service => <Service service={service} key={service.index}></Service> )
			}
		</div>
			</div>
		</div>
	);
};

export default Home;