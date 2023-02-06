import { useEffect, useState } from 'react';
import './styles.css'
import Swal from 'sweetalert2';

function Form() {
    const [city, setCity] = useState([])
    const [sellers, setSellers] = useState([])
    const [fuelTypes, setFuelTypes] = useState([])
    const [fuelPrice, setFuelPrice] = useState([])

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

        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


    }

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

    //---------for submit order------------------//
    const createOrder = async (event) => {
        event.preventDefault();

        //---------------sweet alert------------------------------------//
        Swal.fire({
            title: 'Are you sure?',
            text: "That is you data is correct!",
            icon: 'info',
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
                    title: 'Thank You!',
                    text: 'You order has been successfully done.',
                    icon: 'success',
                    buttonsStyling: false,
                    confirmButtonText: 'OK'
                }).then(async () => {
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
                    //-----after submit form all fields to be empty------//
                }).then(() => {
                    setFormData({
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
                });
            }
        })
        //---------------------<><><><><><>><>----------------------------//



    }




    useEffect(() => {

        //------------------------------------get cities data----------------------//
        const getCitiesData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/buyers/getCities')
                const data = await response.json()

                //------convert data of array in to single data array
                let cityNames = data.map(city => city.seller_city);

                /// remove dublicate cities in array of cities
                let uniqueCities = cityNames.filter((city, index) => cityNames.indexOf(city) === index);
                //------------------->>-------------------------------------<<---------//

                setCity(uniqueCities);
            } catch (error) {
                console.log(error)
            }
        }
        getCitiesData()
        //-------------------------------------------------<><><><>----------------------//


        //-------------------------filter out sellers according to city-------------------//
        const getSellersData = async () => {

            try {
                const response = await fetch(`http://localhost:3001/api/buyers/getSellers/${formData.selectCity}`)
                const data = await response.json()
                setSellers(data)
            } catch (error) {
                console.log(error)
            }
        }
        getSellersData()
        //---------------------------------------<><><><><><>----------------------------//


        //-------------------------Filter fuel type according sellers-------------------//
        const getFuelTypeData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/buyers/getFuelType/${formData.selectSeller}`)
                const data = await response.json()
                setFuelTypes(data)
            } catch (error) {
                console.log(error)

            }

        }
        getFuelTypeData()
        //----------------------------------------<><><><><><>------------------------------//


        //----------------------Filter fuel price according fuel type--------------------//
        const getFuelPriceData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/buyers/getFuelPrice/${formData.selectFueltype}`)
                const data = await response.json()

                //----------------Remove dublicate prices values in array
                const isDuplicate = (item, index, array) => index === array.findIndex(
                    (obj) => obj.p1 === item.p1 // compare properties
                )
                const uniquePrice = data.filter(isDuplicate);
                setFuelPrice(uniquePrice);
                console.log("data is here", uniquePrice);
            } catch (error) {
                console.log(error)
            }

        }
        getFuelPriceData()
        //-------------------------------------------<><><><><><>---------------------------//
    }, [formData.selectCity, formData.selectSeller, formData.selectFueltype])




    return (
        <div>
            <div className="main_content">
                <div className="title">
                    <h2 className='header'> Order your Fuel </h2>
                </div>

                <form onSubmit={createOrder} className="form">
                    <label className='form-label'>
                        <span> Name <span className="required"> * </span></span>
                        <input onChange={inputHandler} type="text" value={formData.name} name="name" placeholder='Enter you name' required />
                    </label>


                    <label className='form-label'>
                        <span>City <span className="required">*</span></span>
                        <select className='select' onChange={inputHandler} value={formData.selectCity} name="selectCity" >
                            <option> Choose City... </option>
                            {city.map(singleCity => <option>{singleCity}</option>)}
                        </select>
                    </label>


                    <label className='form-label'>
                        <span>Seller Fuel Station <span className="required">*</span></span>
                        <select className='select' onChange={inputHandler} value={formData.selectSeller} name="selectSeller">
                            <option> Choose Fuel Station... </option>
                            {sellers.map(seller => <option>{seller.available_fuel_station}</option>)}
                        </select>
                    </label>


                    <label className='form-label'>
                        <span>Fuel Type <span className="required">*</span></span>
                        <select className='select' onChange={inputHandler} value={formData.selectFueltype} name="selectFueltype">
                            <option>Choose Fuel Type... </option>
                            {fuelTypes.map((fuelType) => <option>{fuelType.product_name}</option>)}
                        </select>
                    </label>


                    <label className='form-label'>
                        <span> Fuel Price /<span className='liter'>liter</span> </span>
                        <select className='select-price' onChange={inputHandler} value={formData.fuelPrice} name="fuelPrice">
                            <option>Please select fuel price......</option>
                            {fuelPrice.map((price) => <option>{price.fuel_price}</option>)}
                        </select>
                    </label>


                    <label className='form-label'>
                        <span> Fuel Quantity / <span className='liter'>liter</span><span className="required">*</span> </span>
                        <input type="number" onChange={inputHandler} value={formData.fuelQuantity} name="fuelQuantity" placeholder='Enter quantity of fuel' required />
                    </label>


                    <label className='form-label'>
                        <span> Fuel Delivery Address <span className="required">*</span></span>
                        <input type="text" onChange={inputHandler} value={formData.fuelDeliveryAddress} name="fuelDeliveryAddress" required />
                    </label>


                    <label className='form-label'>
                        <span> Phone Number <span className="required">*</span></span>
                        <input type="number" onChange={inputHandler} value={formData.phoneNumber} name="phoneNumber" required />
                    </label>


                    <label className='form-label'>
                        <span> Payment Mode <span className="required">*</span></span>
                        <select className='select' onChange={inputHandler} value={formData.selectPaymentMethod} name="selectPaymentMethod">
                            <option> Select a payment method... </option>
                            <option>Cash On Delivery</option>
                        </select>
                    </label>

                    <button type='submit' className="button-48"><span className="button48-text">Place Order</span></button>
                </form>

            </div>
        </div>


    );
}

export default Form;