import BookingCard from "./BookingCard"

const BookingIndex = ({bookingData}) => {

    console.log(bookingData);

    const bookingsJSX = bookingData.map((booking)=>{
            return(
            <BookingCard bookingDate={booking.date} bookingCustomer = {booking.customer} bookingCourse = {booking.course}  key={booking.id}/>
            )
        })
        

    return(
        <>
        {bookingsJSX}
        </>
    )

}

export default BookingIndex;