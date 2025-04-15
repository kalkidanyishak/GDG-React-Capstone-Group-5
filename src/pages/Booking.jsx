import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const loader = async ({ params }) => {
  const response = await axios.get(
    `https://67f8c4c62466325443edb74b.mockapi.io/destinations/${params.id}`
  );

  return response.data;
};

const Booking = () => {
  const destination = useLoaderData();

  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    specialRequests: "",
    paymentMethod: "creditCard",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!bookingData.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!bookingData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!bookingData.phone.match(/^[0-9]{10,15}$/))
      newErrors.phone = "Valid phone number is required";
    if (!bookingData.checkInDate)
      newErrors.checkInDate = "Check-in date is required";
    if (!bookingData.checkOutDate)
      newErrors.checkOutDate = "Check-out date is required";
    if (bookingData.guests < 1)
      newErrors.guests = "At least 1 guest is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setBookingSuccess(true);
        // In a real app, you would navigate to confirmation page or show success message
      }, 2000);
    }
  };

  if (bookingSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="bg-green-100 border mt-16 border-green-400 text-green-700 px-4 py-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
          <p className="text-xl mb-6">
            Thank you for booking your trip to {destination.name}!
          </p>
          <p className="mb-6">
            A confirmation has been sent to your email at{" "}
            <strong>{bookingData.email}</strong>.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-16">
        Complete Your Booking
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Booking Summary */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Trip Details</h2>
            <div className="flex items-start mb-6">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-medium">{destination.name}</h3>
                <p className="text-gray-600">{destination.duration}</p>
                <p className="text-lg font-semibold text-blue-600 mt-1">
                  {destination.price}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium mb-2">Price Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Package Price (per person)</span>
                  <span>{destination.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Number of Guests</span>
                  <span>{bookingData.guests}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200 mt-2">
                  <span>Total</span>
                  <span>${499 * bookingData.guests}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Traveler Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={bookingData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="1234567890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      value={bookingData.checkInDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.checkInDate
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.checkInDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.checkInDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOutDate"
                      value={bookingData.checkOutDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg ${
                        errors.checkOutDate
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.checkOutDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.checkOutDate}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "person" : "people"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditCard"
                        checked={bookingData.paymentMethod === "creditCard"}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span>Credit Card</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={bookingData.paymentMethod === "paypal"}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span>PayPal</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bankTransfer"
                        checked={bookingData.paymentMethod === "bankTransfer"}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span>Bank Transfer</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="3"
                    placeholder="Dietary restrictions, room preferences, etc."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Processing..." : "Complete Booking"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
