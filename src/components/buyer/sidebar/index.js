
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

import './style.css'

function SideBar() {
    const [buyerData, setBuyerData] = useState("");

    const token = Cookies.get("buyerToken");
    const getBuyerDetails = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/buyers/validatebuyer", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const responseData = await response.json()
            if (!token) {
                window.location.replace("http://localhost:3000/");
            }

            setBuyerData(responseData)
        } catch (error) {
            console.log(error.message);

        }
    }
    useEffect(() => {
        getBuyerDetails()
    }, [])


    //--------Logout and delete token from cookies--------//
    const handleLogOut = () => {
        alert('You are gonna to logout from Account !').then(() => Cookies.remove('buyerToken')
        ).then(() => window.location.reload())

    }

    return (


        <div className="sidebar">
            <h2 className='Ffuel' style={{ marginRight: '18px' }}>Fast Fuel</h2>

            <div>
                <img src="./img_avatar.png" alt='' style={{ width: "150px", borderRadius: "50%", marginLeft: "20px" }} />
                <h3 style={{ textAlign: 'center', color: 'white', marginTop: '20px', marginRight: '18px', marginBottom: '8px' }}>{buyerData.buyer_name}</h3>
            </div>

            <ul>
                <Link to="/buyer_Form" className="link"><li className='lists'><i className="fa-solid fa-gas-pump" style={{ marginRight: "7px" }}></i>Order Your Fuel</li> </Link>
                <Link to="/order_status" className="link"><li className='lists'><i className="fa-solid fa-file-lines" style={{ marginRight: "7px" }}></i>Order Status</li> </Link>
                <Link to="/" className="link"><li className='lists' onClick={handleLogOut}><i className="fa-solid fa-circle-arrow-left" style={{ marginRight: "7px" }}></i>LogOut</li> </Link>
            </ul>

        </div>


    );
}

export default SideBar;