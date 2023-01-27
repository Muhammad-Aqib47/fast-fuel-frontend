import { useState } from 'react';
import './styles.css'

function Form() {

    const [formData, setFormData] = useState({

        name: "",
        selectCity: "",
        selectSeller: "",
        selectFueltype: "",
        fuelPrice: "",
        fuelQuantity: "",
        fuelDeliveryAddress: "",
        phoneNumber: "",
        selectPaymentMethod: "",


    })

    function inputHandler(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }

    const createOrder = async (e) => {
        e.preventDefault();
        const allInputValues = {
            name: formData.name,
            selectCity: formData.selectCity,
            selectSeller: formData.selectSeller,
            selectFueltype: formData.selectFueltype,
            fuelPrice: formData.fuelPrice,
            fuelQuantity: formData.fuelQuantity,
            fuelDeliveryAddress: formData.fuelDeliveryAddress,
            phoneNumber: formData.phoneNumber,
            selectPaymentMethod: formData.selectPaymentMethod,
        }
        console.log(allInputValues)

        try {
            const response = await fetch('http://localhost:3001/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(allInputValues)

            });
            const data = await response.json()

            console.log('data is here', data)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className="main_content">
                <div className="container">
                    <div className="title">
                        <h2> Order your Fuel </h2>
                    </div>
                    <div className="d-flex">
                        <form onSubmit={createOrder}>
                            <label>
                                <span> Name <span className="required"> * </span></span>
                                <input onChange={inputHandler} type="text" id='name' value={formData.name} name="name" placeholder='Enter you name' />
                            </label>

                            <label>
                                <span>City <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectCity' value={formData.selectCity} name="selectCity" >
                                    <option value="select"> Select a City... </option>
                                    <option>Peshawar</option>
                                    <option>Lahore</option>
                                    <option>Karachi</option>
                                    <option>Mardan</option>
                                </select>
                            </label>

                            <label>
                                <span>Available Fuel Station <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectSeller' value={formData.selectSeller} name="selectSeller">
                                    <option value="select"> Select a Station... </option>
                                    <option>DHA PHASE Ex Park View Staion 1</option>
                                    <option>Barki road </option>
                                    <option>Gulberg 3</option>

                                </select>
                            </label>

                            <label>
                                <span>Type Of Fuel <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectFueltype' value={formData.selectFueltype} name="selectFueltype">
                                    <option value="select"> Select a Fuel Type... </option>
                                    <option>Petrol</option>
                                    <option>Diseal</option>
                                </select>
                            </label>

                            <label>
                                <span> Price of Fuel /<span className='liter'>per liter</span> </span>
                                <input type="text" onChange={inputHandler} id='fuelPrice' value={formData.fuelPrice} name="fuelPrice" required />
                            </label>
                            <label>
                                <span> Quantity of Fuel <span className="required">*</span> </span>
                                <input type="number" onChange={inputHandler} id='fuelQuantity' value={formData.fuelQuantity} name="fuelQuantity" placeholder='Please enter quantity of fuel' />
                            </label>
                            <label>
                                <span> Fuel Delivery Address <span className="required">*</span></span>
                                <input type="text" onChange={inputHandler} id='fuelDeliveryAddress' value={formData.fuelDeliveryAddress} name="fuelDeliveryAddress" />
                            </label>

                            <label>
                                <span> Phone Number <span className="required">*</span></span>
                                <input type="number" onChange={inputHandler} id='phoneNumber' value={formData.phoneNumber} name="phoneNumber" />
                            </label>

                            <label>
                                <span> Payment Mode <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectPaymentMethod' value={formData.selectPaymentMethod} name="selectPaymentMethod">
                                    <option value="select"> Select a payment method... </option>
                                    <option>Cash On Delivery</option>

                                </select>
                            </label>
                            <button type='submit'> Place Order </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Form;