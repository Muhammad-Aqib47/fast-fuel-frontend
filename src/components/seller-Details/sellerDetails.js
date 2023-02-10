import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function SellerDetails() {
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

  return <>
    <div>Welcome</div>
    <p>seller id ={sellerData.seller_id}</p>
    <p>seller Name ={sellerData.seller_name}</p>
    <p>seller emai ={sellerData.seller_email}</p>
    <p>seller email={sellerData.seller_phone}</p>

  </>
}

export default SellerDetails;
