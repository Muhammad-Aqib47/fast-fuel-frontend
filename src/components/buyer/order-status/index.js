import SideBar from "../sidebar";
import '../sidebar/style.css'
import '../form/styles.css'
import './styles.css'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



function OrderStatus(id) {
    const [ordersData, setOrdersData] = useState([])


    // get order status from orders
    const getOrdersData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/orders/getBuyerOrderStatus')
            const data = await response.json()
            setOrdersData(data)
            console.log("order status", data)
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getOrdersData()
    }, [])


    //delete row from orders table where id == id
    const cancelOrder = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "To cancel your order !",
            icon: 'warning',
            buttonsStyling: false,
            showCancelButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Order Cancel',
                    text: 'You order has been Cancel!.',
                    icon: 'success',
                    buttonsStyling: false,
                    confirmButtonText: 'OK'
                }).then(async () => {
                    try {
                        const response = await fetch(`http://localhost:3001/api/orders/${id}`, {
                            method: 'DELETE'
                        });
                        const data = await response.json()
                        console.log("data deleted", data)

                    } catch (error) {
                        console.log(error)
                    }
                }).then(() => {
                    window.location.reload();
                });
            }
        })
    }

    return (

        <div>
            <SideBar />
            <div className="main_content">
                <div className="container">
                    <div className="title">
                        <h2 className="header"> Order Status </h2>
                    </div>

                    <div className="table_div">
                        <table className="table">
                            <thead className={ordersData.length > 0 ? '' : 'hidden'}>
                                <tr>
                                    <th>Order Status</th>
                                    <th>Your Name</th>
                                    <th>City</th>
                                    <th>Fuel Station</th>
                                    <th>Fuel Type</th>
                                    <th>Fuel Price/per Liter</th>
                                    <th>Quantity/liter</th>
                                    <th>Delivery address</th>
                                    <th>Phone Number</th>
                                    <th>Payment Mode</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersData.map((order, index) => {

                                    return <tr key={index}>
                                        <td style={{ color: 'blue' }}>{order.order_status}</td>
                                        <td>{order.b_name}</td>
                                        <td>{order.city}</td>
                                        <td>{order.fuel_station}</td>
                                        <td>{order.fuel_type}</td>
                                        <td>{order.fuel_price}</td>
                                        <td>{order.fuel_quantity}</td>
                                        <td>{order.fuel_delivery_address}</td>
                                        <td>{order.b_phone_number}</td>
                                        <td>{order.payment_mode}</td>
                                        <td><button onClick={() => cancelOrder(order.order_id)} className="button-57" ><span className="button-57-text"><i className="fa-solid fa-trash"></i></span><span>Cancel Order</span></button></td>
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