import React, { useEffect, useState } from 'react'
import './order-styles.css'

function Orders() {
    const [ordersData, setOrdersData] = useState([])


    // get orders from buyers
    const getOrdersData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/sellers/ordersData')
            const data = await response.json()
            setOrdersData(data)
        } catch (error) {
            console.log(error);
        }
    }

    //update order data for confiirmation
    const updateOrderData = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/sellers/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    order_status: prompt('')
                })

            }).then(() => window.location.reload())
            const data = await response.json()
        } catch (error) {

        }

    }

    useEffect(() => {
        getOrdersData()
    }, [])


    return (
        <div className="main_content">
            <div className="container">
                <div className="title">
                    <h2 className="header"> Orders </h2>
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
                                <th>Quantity/liter</th>
                                <th>Fuel Price/per Liter</th>
                                <th>Total price Rs.</th>
                                <th>Delivery address</th>
                                <th>Phone Number</th>
                                <th>Payment Mode</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersData.map((order, index) => {

                                return <tr key={index}>
                                    <td style={{ color: 'blue', fontWeight: 'bold' }}>{order.order_status}</td>
                                    <td>{order.b_name}</td>
                                    <td>{order.city}</td>
                                    <td>{order.fuel_station}</td>
                                    <td>{order.fuel_type}</td>
                                    <td>{order.fuel_quantity}</td>
                                    <td>{order.fuel_price}</td>
                                    <td>{order.total_price}</td>
                                    <td>{order.fuel_delivery_address}</td>
                                    <td>{order.b_phone_number}</td>
                                    <td>{order.payment_mode}</td>
                                    <td><button className="button-58" onClick={() => updateOrderData(order.order_id)}><span className="button-57-text"><i className="fa-solid fa-circle-check"></i></span><span>Status</span></button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders