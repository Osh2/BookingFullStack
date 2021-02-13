
const BookingCard = ({bookingDate, bookingCustomer, bookingCourse}) => {

    return(
        <div id="bookingCard">
            <h1>{bookingDate}</h1>
            <h3>{bookingCustomer.name}</h3>
            <h3>{bookingCourse.name}</h3>
            <h4>{bookingCourse.town}</h4>
        </div>
    )
}

export default BookingCard;