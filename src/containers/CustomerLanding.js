import { useEffect, useState } from "react";
import CustomerIndex from "../componets/customers/CustomerIndex";

const CustomerLanding = () => {


    const [customerData, setCustomerData] = useState([])

    const getCustomers = () => {
        fetch("http://localhost:8080/customers")
        .then((res) => res.json())
        .then((returnedData) => setCustomerData(returnedData));
    }

    useEffect(() => {
        getCustomers();
    }, [])

    return(
        <>
            <h1>Customers</h1>
            <CustomerIndex customerData={customerData}/>
        </>
    );
}

export default CustomerLanding;