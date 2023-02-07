import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function Welcome() {
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
      console.log('response is here', responseData)
      if (!token) {
        window.location.replace("http://localhost:3000/buyerlogin");
      }

      setBuyerData(responseData)
    } catch (error) {
      console.log(error.message);

    }
  }
  useEffect(() => {
    getBuyerDetails()
  }, [])

  return <>
    <div>Welcome</div>
    <p>Buyer id ={buyerData.buyer_id}</p>
    <p>Buyer Name ={buyerData.buyer_name}</p>
    <p>Buyer emai ={buyerData.buyer_email}</p>
    <p>Buyer email={buyerData.buyer_phone}</p>

  </>
}

export default Welcome;
