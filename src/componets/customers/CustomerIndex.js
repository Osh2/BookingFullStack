import CustomerCard from "./CustomerCard";

const CustomerIndex = ({customerData}) => {

    const customerJSX = customerData.map((customer) => {    
        return(
                <CustomerCard customerName={customer.name} customerTown={customer.town} customerAge={customer.age} key={customer.id}/>
        )

    })
    return(
        <ul id="customer-list">
            {customerJSX}
        </ul>
    )
}

export default CustomerIndex;