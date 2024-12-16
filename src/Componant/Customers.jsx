import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Customers = () => {
  const [customer,setcustomer]=useState([]);

  useEffect(()=>{
    async function fetchCustomer() {
      const result = await axios.get("http://localhost:5000/all");
      setcustomer(result.data);
    }
    fetchCustomer();
  },[]);
  return (
    <div>
     Customers
    </div>
  )
}

export default Customers
