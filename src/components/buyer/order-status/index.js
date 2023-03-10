import SideBar from "../sidebar";
import '../sidebar/style.css'
import '../form/styles.css'
import './styles.css'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



function OrderStatus() {
    const [ordersData, setOrdersData] = useState([])


    // get order status from orders
    const getOrdersData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/orders/getBuyerOrderStatus')
            const data = await response.json()
            setOrdersData(data)
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getOrdersData()
    }, [])


    //delete row from orders table where id == id
    const cancelOrder = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/orders/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json()
            console.log("data deleted", data)

        } catch (error) {
            console.log(error)
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "To cancel your order !",
            type: 'warning',
            buttonsStyling: false,
            showCancelButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            allowOutsideClick: false,

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Order Cancel',
                    text: 'You order has been Cancel!.',
                    icon: 'success',
                    buttonsStyling: false,
                    confirmButtonText: 'OK'
                })
                    .then(() => {
                        window.location.reload();
                    });
            }
        })
    }

    return (

        <div className="wrapper">
            <SideBar />
            <div className="main_content">
                <div className="container">
                    <div className="title">
                        <h2> Order Status </h2>
                    </div>

                    <div className="table_div">
                        <table className="table">
                            <thead className={ordersData.length > 0 ? '' : 'hidden'}>
                                <tr>
                                    <th>Order_id</th>
                                    <th>Your Name</th>
                                    <th>City</th>
                                    <th>Fuel Station</th>
                                    <th>Fuel Type</th>
                                    <th>Fuel Price/per Liter</th>
                                    <th>Quantity</th>
                                    <th>Delivery address</th>
                                    <th>Phone Number</th>
                                    <th>Payment Mode</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersData.map((order, index) => {

                                    return <tr key={index}>
                                        {/* <td>{Math.floor(Math.random() * 90000) + 10000}</td> */}
                                        <td>{order.order_id}</td>
                                        <td>{order.b_name}</td>
                                        <td>{order.city}</td>
                                        <td>{order.fuel_station}</td>
                                        <td>{order.fuel_type}</td>
                                        <td>{order.fuel_price}</td>
                                        <td>{order.fuel_quantity}</td>
                                        <td>{order.fuel_delivery_address}</td>
                                        <td>{order.b_phone_number}</td>
                                        <td>{order.payment_mode}</td>
                                        <td><button className="delete-row" onClick={() => cancelOrder(order.order_id)}>Cancel Order</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default OrderStatus