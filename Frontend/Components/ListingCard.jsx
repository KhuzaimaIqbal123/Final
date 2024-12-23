import React from "react";
import { useNavigate } from "react-router-dom";
import "./ListingCard.css";

function ListingCard({ property }) {
    const navigate = useNavigate();

    const handleBooking = () => {
        // Navigate to the booking page with the property id
        navigate(`/booking/${property.id}`);
    };

    return (
        <div className="listing-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-details">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-type">{property.type}</p>
                <p className="property-info">
                    {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
                </p>
                <p className="price-per-night">${property.price} / night</p>
                <p className="rating">★ {property.rating}</p>
                <button className="booking-button" onClick={handleBooking}>
                    Book Now
                </button>
            </div>
        </div>
    );
}

export default ListingCard;
