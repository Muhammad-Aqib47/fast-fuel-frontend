import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './seller-style.css'

function SellerSideBar() {
    const [sellerData, setSellerData] = useState("");

    const token = Cookies.get("sellerToken");
    const getSellerDetails = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/sellers/validateseller", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const responseData = await response.json()
            console.log('response is here', responseData)
            if (!token) {
                window.location.replace("http://localhost:3000/seller_login");
            }

            setSellerData(responseData)
        } catch (error) {
            console.log(error.message);

        }
    }
    useEffect(() => {
        getSellerDetails()
    }, [])

    //--------Logout and delete token from cookies--------//
    const handleLogOut = () => {
        alert('You are gonna to logout from Seller Account !').then(() => Cookies.remove('buyerToken')
        ).then(() => window.location.reload())

    }
    return (
        <div className="sidebar">
            <h2 className='Ffuel' style={{ marginRight: '18px' }}>Fast Fuel <br /> Seller </h2>

            <div>
                <img src="./img_avatar.png" alt='' style={{ width: "150px", borderRadius: "50%", marginLeft: "20px" }} />
                <h3 style={{ textAlign: 'center', color: 'white', marginTop: '20px', marginRight: '18px', marginBottom: '8px' }}>{sellerData.seller_name}</h3>
            </div>

            <ul>
                <Link to="/seller_buyer_orders" className="link"><li className='lists'><i className="fa-solid fa-file-lines" style={{ marginRight: "7px" }}></i>Orders</li> </Link>
                <Link to="/" className="link"><li className='lists' onClick={handleLogOut}><i className="fa-solid fa-circle-arrow-left" style={{ marginRight: "7px" }}></i>LogOut</li> </Link>
            </ul>

        </div>
    )
}

export default SellerSideBar