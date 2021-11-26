import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://infinite-thicket-91763.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="body">
            <div className="">
                <h1 className="text-center fw-bold"> Our Services</h1>
                <hr />
            </div>


            <div className="container ">
                <div className="row">
                    {
                        services.map(service => (

                            <div className="col-lg-4">
                                <div className="card m-3 pt-3 ">
                                    <div className="  ms-3 ">
                                        <img className="h-100 w-100" src={service.img} alt="" />
                                    </div>
                                    <div className="text-center">
                                        <h1>{service.name}</h1>
                                        <h4>Cost: $ {service.price}</h4>
                                        <Link to={`/details/${service._id}`}>
                                            <button className="btn btn-outline-secondary mb-3"  >Explore Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Services;