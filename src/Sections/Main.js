import React from "react";
import { Routes, Route, useNavigate  } from "react-router-dom";

import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import Reservations from "../Pages/Reservations";
import OrderOnline from "../Pages/OrderOnline";
import BookingConfirmation from "../Components/BookingConfirmation";
import { fetchAPI, submitAPI } from "../API/Booking";

function Main() {
    const navigate = useNavigate();
    const [bookingData, setBookingData] = React.useState({});

    const initializeTimes = () => {
        return setAvailableTimes({type: 'init'});
    };

    const updateTimes = (state, action) => {
        if(action.type === 'init') {
            return fetchAPI('');
        } else if(action.type === 'update') {
            return fetchAPI(bookingData.resDate);
        } else {
            return fetchAPI('');
        }
    };

    const [availableTimes, setAvailableTimes] = React.useReducer(updateTimes, initializeTimes);
    
    const getTimesForDate = () => {
        setAvailableTimes({type: 'update'});
    };

    const submitBooking = () => {
        submitAPI(bookingData);
        navigate("/reservations/confirmation");
    };

    React.useEffect(() => {
        setAvailableTimes({type: 'init'});
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/about" element={<About bookingData={bookingData} />}></Route>
                <Route path="/" element={<Home bookingData={bookingData} />}></Route>
                <Route path="/login" element={<Login bookingData={bookingData} />}></Route>
                <Route path="/menu" element={<Menu bookingData={bookingData} />}></Route>
                <Route path="/orderonline" element={<OrderOnline bookingData={bookingData} />}></Route>
                <Route path="/reservations" element={<Reservations 
                    availableTimes={availableTimes}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    getTimesForDate={getTimesForDate}
                    submitBooking={submitBooking} />}></Route>
                <Route path="/reservations/confirmation" element={<BookingConfirmation bookingData={bookingData} />}></Route>
            </Routes>
        </main>
    );
}

export default Main;