
import { useState, useRef } from "react";

const packagePrices = {
  "patnitop": 2500,
  "shiv-khori": 2000,
  "mansar-lake": 1800
};

const vehiclePrices = {
  "innova": 3500,
  "innova-crysta": 4500,
  "dzire": 2200,
  "amaze": 2000,
  "winger": 5000
};

// Extra charge per passenger (demo pricing)
const pricePerPassenger = 300;

const extraDayPrice = 1500;

// Maximum passenger capacity
const vehicleCapacities = {
  "innova": 7,
  "innova-crysta": 7,
  "dzire": 4,
  "amaze": 4,
  "winger": 12
};

const packageNames = {
  "patnitop": "Patnitop",
  "shiv-khori": "Shiv Khori",
  "mansar-lake": "Mansar Lake"
};

const vehicleNames = {
  "innova": "Toyota Innova",
  "innova-crysta": "Innova Crysta",
  "dzire": "Maruti Suzuki Dzire",
  "amaze": "Honda Amaze",
  "winger": "Force Winger"
};

export default function BookingForm({
  selectedPackage, setSelectedPackage,
  selectedVehicle, setSelectedVehicle
}) {
  
  // const [selectedVehicle, setSelectedVehicle] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [tripDays, setTripDays] = useState(1);

  const [submittedBooking, setSubmittedBooking] = useState(null);

  const confirmationRef = useRef(null);

  // Calculate the estimated budget
  const estimatedBudget =
    (packagePrices[selectedPackage] || 0) +
    (vehiclePrices[selectedVehicle] || 0) +
    (passengers * pricePerPassenger) +
    ((tripDays - 1 )* extraDayPrice)

  // Check selected vehicle capacity
  const capacity = vehicleCapacities[selectedVehicle] || 0;

  const capacityError =
    selectedVehicle && passengers > capacity
      ? `This vehicle allows maximum ${capacity} passengers.`
      : "";

  function handleSubmit(event) {
    event.preventDefault();

    // Stop submission if passenger count exceeds capacity
    if (capacityError) {
      return;
    }

    const formData = new FormData(event.target);
    const booking = Object.fromEntries(formData.entries());

    // Save the calculated budget with this booking
    booking.estimatedBudget = estimatedBudget;

    console.log("Booking Details:", booking);

    setSubmittedBooking(booking);

    // Reset form and React states
    event.target.reset();
    setSelectedPackage("");
    setSelectedVehicle("");
    setPassengers(1);
    setTripDays(1);

    // Scroll to the confirmation card
    setTimeout(() => {
      confirmationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }

  return (
    <section id="booking" className="container py-5">

      {submittedBooking && (
        <div
          ref={confirmationRef}
          className="alert alert-success mb-4"
        >
          <h4 className="fw-bold">
            Booking Request Submitted!
          </h4>

          <p className="mb-1">
            Thank You, {submittedBooking.customerName}!
          </p>

          <p className="mb-1">
            Package: {packageNames[submittedBooking.package]}
          </p>

          <p className="mb-1">
            Vehicle: {vehicleNames[submittedBooking.vehicle]}
          </p>

          <p className="mb-1">
            Duration: {submittedBooking.tripDays}{" "}
            {Number(submittedBooking.tripDays) === 1 ? "Day" : "Days"}
          </p>

          <p className="mb-1">
            Passengers: {submittedBooking.passengers}
          </p>

          <p className="mb-0">
            Estimated Budget: ₹
            {Number(submittedBooking.estimatedBudget).toLocaleString("en-IN")}
          </p>

          <button
            type="button"
            className="btn btn-warning mt-3"
            onClick={() => {
              setSubmittedBooking(null);
              setSelectedPackage("");
              setSelectedVehicle("");
              setPassengers(1);
              setTripDays(1);
            }}
          >
            Book Another Trip
          </button>
        </div>
      )}

      <div className="text-center mb-4">
        <p className="text-primary text-uppercase fw-bold">
          Plan Your Journey
        </p>

        <h2 className="fw-bold">Book Your Trip</h2>

        <p className="text-secondary">
          Customize your Jammu travel experience.
        </p>
      </div>

      <div className="card shadow p-4">
        <form onSubmit={handleSubmit} className="mb-3">

          <div className="mb-3">
            <label htmlFor="customerName" className="form-label">
              Full Name
            </label>

            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Enter Your Full Name"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>

            <input
              type="tel"
              id="mobile"
              name="mobile"
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian mobile number"
              maxLength={10}
              placeholder="Enter Your Mobile Number"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="travelDate" className="form-label">
              Travel Date
            </label>

            <input
              type="date"
              id="travelDate"
              name="travelDate"
              min={new Date().toISOString().split("T")[0]}
              className="form-control"
              required
            />
          </div>

          <div>
            <label htmlFor="tripDays" className="form-label">
                Trip Durtion
            </label>
            
            <select 
                name="tripDays" 
                id="tripDays"
                className="form-select"
                value={tripDays}
                onChange={(event) => setTripDays(Number(event.target.value))}
                required
                >
                    <option value="1"> 1 Day </option>
                    <option value="2"> 2 Days </option>
                    <option value="3"> 3 Days </option>
                    <option value="4"> 4 Days </option>
                </select>
          </div>

          <div className="mb-3">
            <label htmlFor="passengers" className="form-label">
              Number of Passengers
            </label>

            <input
              type="number"
              id="passengers"
              name="passengers"
              className="form-control"
              min="1"
              max="12"
              value={passengers}
              onChange={(event) =>
                setPassengers(Number(event.target.value))
              }
              required
            />

            {capacityError && (
              <div className="alert alert-warning mt-2 mb-0">
                {capacityError}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="pickup" className="form-label">
              Pickup Point
            </label>

            <input
              type="text"
              id="pickup"
              name="pickup"
              className="form-control"
              placeholder="e.g. Jammu Railway Station"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="package" className="form-label">
              Select Your Package
            </label>

            <select
              id="package"
              name="package"
              className="form-select"
              value={selectedPackage}
              onChange={(event) =>
                setSelectedPackage(event.target.value)
              }
              required
            >
              <option value="" disabled>
                Choose Your Package
              </option>

              <option value="patnitop">Patnitop</option>
              <option value="shiv-khori">Shiv Khori</option>
              <option value="mansar-lake">Mansar Lake</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="vehicle" className="form-label">
              Select Vehicle
            </label>

            <select
              id="vehicle"
              name="vehicle"
              className="form-select"
              value={selectedVehicle}
              onChange={(event) =>
                setSelectedVehicle(event.target.value)
              }
              required
            >
              <option value="" disabled>
                Choose a vehicle
              </option>

              <option value="innova">Toyota Innova</option>
              <option value="innova-crysta">Innova Crysta</option>
              <option value="dzire">Maruti Suzuki Dzire</option>
              <option value="amaze">Honda Amaze</option>
              <option value="winger">Force Winger</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
          >
            Book Your Trip Now
          </button>

        </form>

        <div className="alert alert-info mt-3 mb-0 shadow">
          <h5 className="mb-1">Estimated Trip Budget</h5>

          <h3 className="fw-bold mb-0">
            ₹{estimatedBudget.toLocaleString("en-IN")}
          </h3>

          <small>
            Estimated amount for a one-day trip.
          </small>
        </div>
      </div>
    </section>
  );
}
