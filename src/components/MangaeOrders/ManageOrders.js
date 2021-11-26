import React, { useState, useEffect } from 'react';
import useFirebase from '../../Hook/useFirebase';

const MyOders = () => {

    const { user } = useFirebase();

    const [orders, setOrders] = useState();


    useEffect(() => {
        fetch('https://infinite-thicket-91763.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {

        const confirmation = window.confirm('Are you sure,want to delete?');
        if (confirmation) {
            console.log(id);
            fetch(`https://infinite-thicket-91763.herokuapp.com/myorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Order Deleted")
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }

    }


    return (
        <div>
            <h1>My All orders</h1>
            <hr />

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"># User Email</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders?.map(order => (
                                <tr key={order?._id}>
                                    <th scope="row"><p>{user.email}</p></th>
                                    <td><h3>{order?.name}</h3></td>
                                    <td>{order?.price}</td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(order?._id)}>Delete</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>



            </div>




        </div>
    );
};

export default MyOders;