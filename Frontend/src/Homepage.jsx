import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import Categories from "../Components/Categories";
import ListingCard from "../Components/ListingCard";
import Footer from "../Components/Footer";
import './Homepage.css'

function Homepage() {

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {

     const fetchData = async () => {

      const mockProperties = [
        {
          id : 1,
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
          id : 2,
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
          id : 3,
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
          id : 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
          image: "https://a0.muscache.com/im/pictures/miso/Hosting-8525016/original/675c507e-116e-4da7-8c32-976e704cb617.jpeg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        }, {
          id: 8,
          image: "https://a0.muscache.com/im/pictures/airflow/Hosting-21823836/original/87669a54-58c8-4682-a41a-05581fff7ec6.jpg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        }, {
          id: 9,
          image: "https://a0.muscache.com/im/pictures/5a3af603-e470-44ce-ae09-ee67aa1c7614.jpg?im_w=720",
          title: "Luxury City Apartment",
          type: "Apartment",
          guests: 2,
          bedrooms: 1,
          bathrooms: 1,
          price: 300,
          rating: 4.7,
        }, {
          id: 10,
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

      setProperties(mockProperties);
      setFilteredProperties(mockProperties); 
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = properties.filter(
        (property) => property.type === selectedCategory
      );
      setFilteredProperties(filtered);
    } else {
      setFilteredProperties(properties);
    }
  }, [selectedCategory, properties]);

    return (
      <div className="main-div">
        <Navbar />
        <SearchBar />
        <Categories setSelectedCategory={setSelectedCategory}/>
        <div className="listing-cards-container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <ListingCard key={index} property={property} />
          ))
        ) : (
          <p>No listings available for this category.</p>
          
        )}
      </div>
        <Footer />
      </div>
  );
}

export default Homepage;
