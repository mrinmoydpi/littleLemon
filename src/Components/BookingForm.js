import React from "react";

function BookingForm(props) {
    const errorMessages = {
        resDate : 'Please enter a date.',
        resTime : 'Please enter a time.',
        numGuests : 'Please enter the number of guests.',
        occasion : 'Please select an occasion.'
    };
    
    const handleInputChange = (e) => {
        switch(e.target.name) {
            case "resDate":
                props.setBookingData({...props.bookingData, resDate: e.target.value});
                props.getTimesForDate();
                break;

            case "resTime":
                props.setBookingData({...props.bookingData, resTime: e.target.value});
                break;

            case "numGuests":
                props.setBookingData({...props.bookingData, numGuests: e.target.value});
                break;

            case "occasion":
                props.setBookingData({...props.bookingData, occasion: e.target.value});
                break;

            default:

        }

        if(e.target.value === '') {
            props.setErrors({...props.errors, [e.target.name]: errorMessages[e.target.name]});
        } else {
            let errs = {};
            for (let [key, value] of Object.entries(props.errors)) {
                if(key !== e.target.name) {
                    errs[key] = value;
                }
            }
            props.setErrors(errs);
        }
    };

    const validateForm = () => {
        for (let [key, value] of Object.entries(props.bookingData)) {
            if(value === '') {
                props.setErrors({...props.errors, [key]: errorMessages[key]});
            }
        }
        
        if(Object.keys(props.errors).length > 0) {
            return false;
        }

        return true;
    };

    const submitClick = (e) => {
        e.preventDefault();
        if(validateForm()) {
            submitForm();
        }
    };

    const submitForm = () => {
        props.submitBooking();
    };

    return (
        <form className="reservation-form" noValidate>
            <label htmlFor="res-date">Choose date</label>
            <input
                data-testid="res-date"
                id="res-date"
                name="resDate"
                onBlur={handleInputChange}
                onChange={handleInputChange}
                type="date" />
            <span className="error" data-testid="error-res-date">{props.errors && props.errors.resDate ? props.errors.resDate : ''}</span>
            <label htmlFor="res-time">Choose time</label>
            <select
                data-testid="res-time"
                id="res-time"
                name="resTime"
                onBlur={handleInputChange}
                onChange={handleInputChange}>
                <option value="">Select time:</option>
                {props.availableTimes && Object.keys(props.availableTimes).map(key => (
                    <option key={key} value={props.availableTimes[key]}>{props.availableTimes[key]}</option>
                ))}
            </select>
            <span className="error">{props.errors && props.errors.resTime ? props.errors.resTime : ''}</span>
            <label htmlFor="guests">Number of guests</label>
            <input
                id="guests"
                min="1" max="10"
                name="numGuests"
                onBlur={handleInputChange}
                onChange={handleInputChange}
                placeholder="Enter number (1-10)"
                type="number" />
            <span className="error">{props.errors && props.errors.numGuests ? props.errors.numGuests : ''}</span>
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                name="occasion"
                onBlur={handleInputChange}
                onChange={handleInputChange}>
                <option value="">Select occasion:</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <span className="error">{props.errors && props.errors.occasion ? props.errors.occasion : ''}</span>
            <input aria-label="Submit" data-testid="submit-btn" disabled={Object.keys(props.errors).length > 0 ? true : false} onClick={submitClick} type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;