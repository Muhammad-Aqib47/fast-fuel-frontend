import Cookies from "js-cookie";
import { useState,useEffect } from "react";

function Welcome() {
  const [data, setData] = useState("");

  const token = Cookies.get("token");
  const getBuyerDetails = async() =>{
    try {
      const response = await fetch("http://localhost:3002/api/buyers/validatebuyer", {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      const responseData =await response.json()


      setData(responseData)
    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(() => {
    getBuyerDetails()
  },[])

  return<>
     <div>Welcome</div>;
  <p>Buyer id ={data.buyer_id}</p>
  <p>Buyer Name ={data.buyer_name}</p>
  <p>Buyer emai ={data.buyer_email}</p>
  <p>Buyer email={data.buyer_phone}</p>

  </>
}

export default Welcome;
