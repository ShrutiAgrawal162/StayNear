import React from "react";
import { MapPin, Star } from "lucide-react";
import {Link} from "react-router-dom";
const PropertyCard = ({
  id,
  image,
  title,
  location,
  price,
  rating,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
      
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg text-gray-800">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2 text-gray-500">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <p className="text-blue-600 font-bold text-lg">
            ₹{price}/month
          </p>
          <Link to={`/property/${id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;