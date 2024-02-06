import React from "react";
import BookingForm from "../Components/BookingForm";

function Reservations(props) {
    const [errors, setErrors] = React.useState({resDate:'', numGuests:0});

    return (
        <section className="container">
            <h1>Book Now</h1>
            <BookingForm 
                bookingData={props.bookingData} 
                setBookingData={props.setBookingData}
                availableTimes={props.availableTimes}
                errors={errors}
                setErrors={setErrors}
                getTimesForDate={props.getTimesForDate}
                submitBooking={props.submitBooking} />
        </section>
    );
}

export default Reservations;