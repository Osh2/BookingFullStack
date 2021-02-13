import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

const BookingCard = ({bookingDate, bookingCustomer, bookingCourse, bookingId}) => {

    const [selectedBooking, setSelectedBooking] = useState([])

    console.log(selectedBooking)
    const bookingDetails = () => {
        fetch("http://localhost:8080/bookings/" + bookingId)
        .then((res) => res.json())
        .then((data) => setSelectedBooking(data))
        .catch((error) => console.log(error))
    }    

    useEffect(()=>{
        bookingDetails()
    }, [])

    return(
        <div id="bookingCard">
            <h1>{bookingDate}</h1>
            <h3>{bookingCustomer.name}</h3>
            <h3>{bookingCourse.name}</h3>
            <Link to="/bookings/details"> <button onClick={useEffect}>Details</button></Link>
        </div>
    )
}

export default BookingCard;