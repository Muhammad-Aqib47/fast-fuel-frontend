import './styles.css'

function Form() {
    return (
        <div>
            <div className="main_content">
                <div className="container">
                    <div className="title">
                        <h2> Order your Fuel </h2>
                    </div>
                    <div className="d-flex">
                        <form>
                            <label>
                                <span className="fname"> Name <span className="required"> * </span></span>
                                <input type="text" name="fname" />
                            </label>

                            <label>
                                <span>City <span className="required">*</span></span>
                                <select name="selection">
                                    <option value="select"> Select a City... </option>
                                    <option>Peshawar</option>
                                    <option>Lahore</option>
                                    <option>Karachi</option>
                                    <option>Mardan</option>
                                </select>
                            </label>

                            <label>
                                <span>Available Fuel Station <span className="required">*</span></span>
                                <select name="selection">
                                    <option value="select"> Select a Station... </option>
                                    <option>DHA PHASE Ex Park View Staion 1</option>
                                    <option>Barki road </option>
                                    <option>Gulberg 3</option>

                                </select>
                            </label>

                            <label>
                                <span>Type Of Fuel <span className="required">*</span></span>
                                <select name="selection">
                                    <option value="select"> Select a Fuel Type... </option>
                                    <option>Petrol</option>
                                    <option>Diseal</option>
                                </select>
                            </label>

                            <label>
                                <span> Price of Fuel </span>
                                <input type="text" name="houseadd" placeholder="Price Of Fuel (Per Litre)" required />
                            </label>
                            <label>
                                <span> Quantity of Fuel <span className="required">*</span> </span>
                                <input type="number" />
                            </label>
                            <label>
                                <span> Fuel Delivery Address <span className="required">*</span></span>
                                <input type="text" name="address" />
                            </label>

                            <label>
                                <span> Phone Number <span className="required">*</span></span>
                                <input type="number" name="number" />
                            </label>

                            <label>
                                <span> Payment Mode <span className="required">*</span></span>
                                <select name="selection">
                                    <option>Cash On Delivery</option>
                                </select>
                            </label>

                            <button type="button"> Place Order </button>
                        </form>

                    </div>
                </div>
            </div>
      </div>

    );
}

export default Form;