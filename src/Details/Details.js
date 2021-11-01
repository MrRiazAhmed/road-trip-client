import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../Hook/useFirebase';




const Details = () => {
    const { id } = useParams();
    const { user } = useFirebase();

    const [allServices, setAllServices] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setAllServices(data))

    }, []);




    const handleaddtocart = () => {
        console.log("clicked");
        console.log(user.email);
        const data = allServices;
        console.log(data)
        data.email = user.email;



        axios.post('http://localhost:5000/myorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Added to cart!');

                }
            })
    }




    return (
        <div className="container">
            <div className=" text-center">
                <img className="detail-img w-50" src={allServices?.img} alt="" />
            </div>
            <div className="text-center mt-5 signle-des">
                <h1 className="text-primary">{allServices?.name}</h1>
                <h4 className="text-center  mt-5"> {allServices?.des}</h4>
                <h4 className="text-center  mt-5"> <span className="text-primary" >Price:</span>$ {allServices?.price}</h4>


                <button onClick={handleaddtocart} className="btn btn-outline-dark mb-3 mt-5">Add to cart</button>
            </div>
        </div>
    );
};




export default Details;