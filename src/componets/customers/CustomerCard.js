const CustomerCard = ({customerName, customerTown, customerAge}) => {
    
    return(
        <div id="customer-card">
            <h1>{customerName}</h1>
            <h3>{customerTown}</h3>
            <h3>{customerAge}</h3>
        </div>
    )
}

export default CustomerCard;