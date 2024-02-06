import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { fetchAPI, submitAPI } from "./API/Booking";
import Reservations from "./Pages/Reservations";
import BookingForm from "./Components/BookingForm";

const testTimes = {
  times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
};

const testEmptyData = {
  resDate: "",
  resTime: "",
  numGuests: "",
  occasion: ""
}

const testData = {
  resDate: "2024-01-01",
  resTime: "17:00"
}

const testErrors = {
  resDate: "Please enter a date.",
  resTime: "Please enter a time.",
  numGuests: "Please enter the number of guests.",
  occasion: "Please select the occasion"
};

const testNoErrors = {};

test('Renders the BookingForm heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test("Check Available Times", () => {
  const times = fetchAPI('');
  expect(times[0]).toBe("17:00");
});

test("Check Update Times", () => {
  submitAPI(testData);
  const times = fetchAPI("2024-01-01");
  expect(times[0]).toBe("18:00");

});

test("Submit disabled test", async () => {
  render(
      <BookingForm
        availableTimes={testTimes}
        bookingData={testEmptyData}
        errors={testErrors}
      />
  );
  
  const submitBtn = screen.getByTestId("submit-btn");
  expect(submitBtn).toBeDisabled();
});

test("Submit enabled test", async () => {
  render(
      <BookingForm
        availableTimes={testTimes}
        bookingData={testEmptyData}
        errors={testNoErrors}
      />
  );
  
  const submitBtn = screen.getByTestId("submit-btn");
  expect(submitBtn).not.toBeDisabled();
});