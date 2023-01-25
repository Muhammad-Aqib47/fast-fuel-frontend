import SideBar from "../sidebar";
import '../sidebar/style.css'
import '../form/styles.css'
import './styles.css'

function OrderStatus() {
    return (
        <div className="wrapper">
            <SideBar />
            <div className="main_content">
                <div className="container">
                    <div className="title">
                        <h2> Order Status </h2>
                    </div>

                    <div className="table_div">
                        <table class="table">
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
                                <tr>
                                    <td>01</td>
                                    <td>M.Aqib</td>
                                    <td>Lahore</td>
                                    <td>DHA PHASE 8</td>
                                    <td>Petrol</td>
                                    <td>230</td>
                                    <td>5</td>
                                    <td>DHA phase ex Park View str.33</td>
                                    <td>03123456789</td>
                                    <td>Cash On Delivery</td>
                                
                                  
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderStatus