import {useState, useEffect} from "react";
import BookingIndex from "../componets/BookingIndex";


const BookingLanding = () => {

    const [bookingData, setBookingData] = useState([]);
    
    const getBookings = () => {
        fetch('http://localhost:8080/bookings/')
        .then((res) => res.json())
        .then((data) => setBookingData(data))
        console.log(bookingData);
    }

    useEffect(()=>{
        getBookings()
        
    },[])

    
    return(
        <>    
            <h1>TESTING</h1>
            <BookingIndex bookingData = {bookingData}/>
        </>
    );
}

export default BookingLanding;