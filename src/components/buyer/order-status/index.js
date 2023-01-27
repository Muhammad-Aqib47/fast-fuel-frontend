import SideBar from "../sidebar";
import '../sidebar/style.css'
import '../form/styles.css'
import './styles.css'
import { useEffect, useState } from "react";


function OrderStatus() {
    const [ordersData, setOrdersData] = useState([])



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
                            <thead>
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
                                </tr>
                            </thead>
                            <tbody>
                                {ordersData.map((order, index) => {
                                    console.log(order)

                                    return <tr>
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
                                    </tr>


                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderStatus