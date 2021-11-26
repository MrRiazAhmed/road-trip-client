import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post('https://infinite-thicket-91763.herokuapp.com//services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New Service Added!!');
                    reset();
                }
            })

    }
    

    return (
        <div className="containerr">
            <h1 className="title fw-bold text-center">Add A new Service Here</h1>


            <div className="form">


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box text-center">
                        <input className="w-50 m-2 p2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <br />
                        <input className="w-50  m-2 p2" {...register("des")} placeholder="Description" />
                        <br />
                        <input className="w-50  m-2 p2" {...register("img")} placeholder="Image link" />
                        <br />
                        <input className="w-50  m-2 p2" type="number" {...register("price")} placeholder="Price" />
                        <br />
                    </div>
                    <div className="text-center"><input className="btn text-center btn-outline-primary mt-3 ps-5 pe-5" type="submit" /></div>
                </form> </div>


        </div>
    );
}


export default AddNewService;