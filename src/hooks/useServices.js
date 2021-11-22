import { useEffect, useState } from "react"

// adding a custom hook

const useServices = () => {

	// call usestate
	const [services, setServices] = useState([]);

	// fetch api
	useEffect(() => {
		fetch('./data.json')
		.then(res=> res.json())
		.then(data => setServices(data))
	},[]);

	//return
	return [services];

}

export default useServices;