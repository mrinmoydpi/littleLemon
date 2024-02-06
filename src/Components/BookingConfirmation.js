function BookingConfirmation(props) {
    return(
        <section className="container">
        <h1>Thank you for your reservation!</h1>
        <p>
            Here are your reservation details:
        </p>
        <ul>
            <li>Date: {props.bookingData.resDate}</li>
            <li>Time: {props.bookingData.resTime}</li>
            <li>Guests: {props.bookingData.numGuests}</li>
            <li>Occasion: {props.bookingData.occasion}</li>
        </ul>
        </section>
    );
};

export default BookingConfirmation;