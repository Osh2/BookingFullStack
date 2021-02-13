import BookingCard from "./BookingCard"

const BookingIndex = ({bookingData}) => {

    const bookingsJSX = bookingData.map((booking)=>{
            return(
            <BookingCard bookingDate={booking.date} bookingCustomer = {booking.customer} bookingCourse = {booking.course}  key={booking.id}/>
            )
        })
        

    return(
        <ul id = "bookings-list">
            {bookingsJSX}
        </ul>

    )

}

export default BookingIndex;