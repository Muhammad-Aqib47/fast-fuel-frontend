import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import SellerSideBar from '../side-bar'
import './add-fuel.css'

function AddFuel() {
    const [formData, setFormData] = useState({
        seller_id: "",
        product_name: "",
        fuel_price: "",

    })
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

    function inputHandler(e) {

        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const InputValues = {

        seller_id: formData.seller_id,
        product_name: formData.product_name,
        fuel_price: formData.fuel_price,

    }


    const addFuel = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/sellers/addFuel", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(InputValues)
            }).then(
                () => setFormData({ seller_id: '', product_name: '', fuel_price: '' }));
            const data = await response.json()

        } catch (error) {

        }


    }
    return (
        <div>
            <SellerSideBar />
            <div className="main_content">
                <div className="title">
                    <h2 className='header'> Add Fuel </h2>
                </div>

                <form onSubmit={addFuel} className="add-fuel">



                    <label className='order-form-label'>
                        <span>Seller_id <span className="required">*</span></span>
                        <select className='select' onChange={inputHandler} value={formData.seller_id} name="seller_id" >
                            <option>select seller_id</option>
                            <option>{sellerData.seller_id}</option>

                        </select>
                    </label>

                    <label className='order-form-label'>
                        <span>Fuel type <span className="required">*</span></span>
                        <select className='select' onChange={inputHandler} value={formData.product_name} name="product_name" >
                            <option> Choose Fuel Type... </option>
                            <option> Petrol </option>
                            <option> Diesel</option>
                            <option> Light diesel Oil </option>

                        </select>
                    </label>

                    <label className='order-form-label'>
                        <span> Fuel Price / <span className='liter'>liter</span><span className="required">*</span> </span>
                        <input type="text" onChange={inputHandler} value={formData.fuel_price} name="fuel_price" required />
                    </label>


                    <button type='submit' className='add-button'>Add </button>
                </form>

            </div>
        </div>
    )
}

export default AddFuel