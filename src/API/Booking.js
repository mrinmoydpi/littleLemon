/*  https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js not working
    Fake api for bookings
*/
localStorage.setItem("bookingDates", JSON.stringify({}));

export const fetchAPI = (date) => {
    let result = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    
    if(date !== '') {
        const dateKey = date.replace(/\D/g,'');
        const bookingDates = JSON.parse(localStorage.getItem("bookingDates"));
    
        for (let [key, value] of Object.entries(bookingDates)) {
            if(key === dateKey) {
                result = value;
            }
        }
    }

    return result;
}

export const submitAPI = (data) => {
    const date = data.resDate;
    const dateKey = date.replace(/\D/g,'');
    const time = data.resTime;
    const times = fetchAPI(dateKey);
    let newTimes = times.filter(t => t !== time);
    const bookingDates = JSON.parse(localStorage.getItem("bookingDates"));
    bookingDates[dateKey] = newTimes;
    localStorage.setItem("bookingDates", JSON.stringify(bookingDates));
    return true;
}