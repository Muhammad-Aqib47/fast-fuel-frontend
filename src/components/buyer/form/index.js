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
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }

    const createOrder = async (event) => {
        event.preventDefault();
        Swal.fire({
            title: 'Thank You!',
            text: 'You order has been successfully done.',
            icon: 'success',
            buttonsStyling: false,
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.reload();
        });

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


    useEffect(() => {

        //------------------------------------Filter out city data----------------------//
        const getCitiesData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/buyers/getCities')
                const data = await response.json()

                /// remove dublicate value in array of cities
                let cityNames = data.map(city => city.seller_city);
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
                const response = await fetch("http://localhost:3001/api/buyers/getSellers")
                const data = await response.json()
                setSellers(data)
            } catch (error) {
                console.log(error)
            }
        }
        getSellersData();
        //---------------------------------------<><><><><><>----------------------------//


        //-------------------------Filter fuel type according sellers-------------------//
        const getFuelTypeData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/buyers/getFuelType')
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
                const response = await fetch('http://localhost:3001/api/buyers/getFuelPrice')
                const data = await response.json()
                setFuelPrice(data)
            } catch (error) {
                console.log(error)
            }

        }
        getFuelPriceData()
        //-------------------------------------------<><><><><><>---------------------------//
    }, [])




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
                                <input onChange={inputHandler} type="text" id='name' value={formData.name} name="name" placeholder='Enter you name' required />
                            </label>


                            <label>
                                <span>City <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectCity' value={formData.selectCity} name="selectCity" >
                                    <option value="select"> Choose City... </option>
                                    {city.map(singleCity => <option>{singleCity}</option>)}
                                </select>
                            </label>


                            <label>
                                <span>Available Fuel Station <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectSeller' value={formData.selectSeller} name="selectSeller">
                                    <option value="select"> Choose Fuel Station... </option>
                                    {sellers.map(seller => <option>{seller.available_fuel_station}</option>)}
                                </select>
                            </label>


                            <label>
                                <span>Type Of Fuel <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectFueltype' value={formData.selectFueltype} name="selectFueltype">
                                    <option value="select">Choose Fuel Type... </option>
                                    {fuelTypes.map((fuelType) => <option>{fuelType.product_name}</option>)}
                                </select>
                            </label>


                            <label>
                                <span> Price of Fuel /<span className='liter'>per liter</span> </span>
                                <select onChange={inputHandler} id='fuelPrice' value={formData.fuelPrice} name="fuelPrice">
                                    <option value="select"></option>
                                    {fuelPrice.map((price) => <option>{price.fuel_price}</option>)}

                                    {/* <input type="text" onChange={inputHandler} id='fuelPrice' value={formData.fuelPrice} name="fuelPrice" readOnly /> */}
                                </select>
                            </label>
                            <label>
                                <span> Quantity of Fuel <span className="required">*</span> </span>
                                <input type="number" onChange={inputHandler} id='fuelQuantity' value={formData.fuelQuantity} name="fuelQuantity" placeholder='Please enter quantity of fuel' required />
                            </label>
                            <label>
                                <span> Fuel Delivery Address <span className="required">*</span></span>
                                <input type="text" onChange={inputHandler} id='fuelDeliveryAddress' value={formData.fuelDeliveryAddress} name="fuelDeliveryAddress" required />
                            </label>

                            <label>
                                <span> Phone Number <span className="required">*</span></span>
                                <input type="number" onChange={inputHandler} id='phoneNumber' value={formData.phoneNumber} name="phoneNumber" required />
                            </label>

                            <label>
                                <span> Payment Mode <span className="required">*</span></span>
                                <select onChange={inputHandler} id='selectPaymentMethod' value={formData.selectPaymentMethod} name="selectPaymentMethod">
                                    <option value="select"> Select a payment method... </option>
                                    <option>Cash On Delivery</option>

                                </select>
                            </label>

                            <button type='submit' className='place-order'> Place Order </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Form;