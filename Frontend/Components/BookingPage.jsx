// BookingPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookingPage.css";

function BookingPage() {
    const { id } = useParams(); // Extract the listing ID from the URL
    const [property, setProperty] = useState(null);
    const [nights, setNights] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [startDate, setStartDate] = useState("");

    // Mock property data (this would come from a backend/API in a real app)
    const mockProperties = [
        {
            id: "1",
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-591171879509364369/original/1931fbae-0d17-4ef8-9cbe-595c7a29ee73.jpeg?im_w=720",
            title: "Beautiful Beach House",
            type: "Entire home",
            guests: 4,
            bedrooms: 2,
            bathrooms: 1,
            price: 150,
            rating: 4.8,
        },
        {
          id : "2",
          image: "https://a0.muscache.com/im/pictures/miso/Hosting-34387720/original/be3eb0b9-0148-43da-9eb7-d5d8d3443a3e.jpeg?im_w=720",
          title: "Cozy Mountain Cabin",
          type: "Cabin",
          guests: 6,
          bedrooms: 3,
          bathrooms: 2,
          price: 200,
          rating: 4.9,
        },
        {
          id : "3",
          image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NzU3MTgwMzg2NDk2OTQxMw%3D%3D/original/02ea369e-50f3-4461-a68c-3556cb35aff7.jpeg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        },
        {
          id : "4",
          image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1161447484734690123/original/cbd576cc-3e2c-4318-bc28-d324fd1fdb7f.jpeg?im_w=720",
          title: "Beutiful Decor",
          type: "Dinning Room",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        },
        {
          id: "5",
          image: "https://a0.muscache.com/im/pictures/miso/Hosting-746919020186561409/original/f4199828-cbf8-44b0-a29b-0bed8ffc989f.jpeg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        },
        {
          id: "6",
          image: "https://a0.muscache.com/im/pictures/miso/Hosting-636650621122218401/original/dddd42d4-3e19-4bde-bbb8-a086d4534f8e.jpeg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        },
        {
          id: "7",
          image: "https://a0.muscache.com/im/pictures/miso/Hosting-8525016/original/675c507e-116e-4da7-8c32-976e704cb617.jpeg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        }, {
          id: "8",
          image: "https://a0.muscache.com/im/pictures/airflow/Hosting-21823836/original/87669a54-58c8-4682-a41a-05581fff7ec6.jpg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        }, {
          id: "9",
          image: "https://a0.muscache.com/im/pictures/5a3af603-e470-44ce-ae09-ee67aa1c7614.jpg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        }, {
          id: "10",
          image: "https://a0.muscache.com/im/pictures/896289f9-341b-4614-867c-5d8e910e5080.jpg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        },
    ];

    useEffect(() => {
        const selectedProperty = mockProperties.find((p) => p.id === id);
        setProperty(selectedProperty);
        if (selectedProperty) {
            setTotalPrice(selectedProperty.price);
        }
    }, [id]);

    const handleNightsChange = (event) => {
        const nightsValue = parseInt(event.target.value, 10);
        setNights(nightsValue);
        if (property) {
            setTotalPrice(nightsValue * property.price);
        }
    };

    const handleConfirmBooking = () => {
        alert(`Booking Confirmed for ${property.title} from ${startDate} for ${nights} nights!`);
    };

    if (!property) return <div>Loading...</div>;

    return (
        <div className="booking-page">
            <img src={property.image} alt={property.title} className="booking-image" />
            <h2>{property.title}</h2>
            <p>Type: {property.type}</p>
            <p>{property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms</p>
            <p>Price per night: ${property.price}</p>

            <div className="booking-details">
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <label>
                    Number of Nights:
                    <input type="number" value={nights} onChange={handleNightsChange} min="1" />
                </label>
                <h3>Total Price: ${totalPrice}</h3>
            </div>

            <button className="confirm-button" onClick={handleConfirmBooking}>
                Confirm Booking
            </button>
        </div>
    );
}

export default BookingPage;
