import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import SideBar from '../sidebar'
import './profile.css'

function Profile() {
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


    return (

        <div>
            <SideBar />
            <div className="main_content">
                <div className="title">
                    <h2 className='header'> PROFILE </h2>
                </div>

                <div className="order-form">
                    <label className='order-form-label'>
                        <h2> Name : <span className="required"> {buyerData.buyer_name} </span></h2>
                    </label> <br />

                    <label className='order-form-label'>
                        <h2> Email : <span className="required"> {buyerData.buyer_email} </span></h2>
                    </label><br />

                    <label className='order-form-label'>
                        <h2> Phone : <span className="required"> {buyerData.buyer_phone} </span></h2>
                    </label><br />

                </div>
            </div>
        </div>

    )
}

export default Profile