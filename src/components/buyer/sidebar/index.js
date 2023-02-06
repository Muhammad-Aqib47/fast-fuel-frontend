

import { Link } from 'react-router-dom';
import './style.css'

function SideBar() {
    return (

        <div className="wrapper">
            <div className="sidebar">
                <h2 style={{ marginRight: '18px' }}>Fast Fuel</h2>

                <div>
                    <img src="./img_avatar.png" alt='' style={{ width: "150px", borderRadius: "50%", marginLeft: "20px" }} />
                    <h3 style={{ textAlign: 'center', color: 'white', marginTop: '20px', marginRight: '18px' }}>Muhammad Aqib</h3>
                    {/* <input type="file" accept="image/*" /> */}
                </div>

                <ul>

                    <Link to="/" className="link"><li><i className="fa-solid fa-gas-pump" style={{ marginRight: "7px" }}></i>Order Your Fuel</li> </Link>
                    <Link to="/order-status" className="link"><li><i className="fa-solid fa-file-lines" style={{ marginRight: "7px" }}></i>Order Status</li> </Link>
                    <Link to="/landing-page" className="link"><li><i className="fa-solid fa-circle-arrow-left" style={{ marginRight: "7px" }}></i>LogOut</li> </Link>
                </ul>

            </div>
        </div>

    );
}

export default SideBar;