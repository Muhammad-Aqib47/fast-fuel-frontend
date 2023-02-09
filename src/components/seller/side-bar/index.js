import React from 'react'
import { Link } from 'react-router-dom'
import './seller-style.css'

function SellerSideBar() {
    return (
        <div className="sidebar">
            <h2 className='Ffuel' style={{ marginRight: '18px' }}>Fast Fuel <br /> Seller </h2>

            <div>
                <img src="./img_avatar.png" alt='' style={{ width: "150px", borderRadius: "50%", marginLeft: "20px" }} />
                <h3 style={{ textAlign: 'center', color: 'white', marginTop: '20px', marginRight: '18px', marginBottom: '8px' }}>Aqib</h3>
            </div>

            <ul>
                <Link to="/seller_buyer_orders" className="link"><li className='lists'><i className="fa-solid fa-file-lines" style={{ marginRight: "7px" }}></i>Orders</li> </Link>
                <Link to="/" className="link"><li className='lists' ><i className="fa-solid fa-circle-arrow-left" style={{ marginRight: "7px" }}></i>LogOut</li> </Link>
            </ul>

        </div>
    )
}

export default SellerSideBar