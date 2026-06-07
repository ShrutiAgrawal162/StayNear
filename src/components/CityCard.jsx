import React from "react";

const CityCard = ({ city }) => {
  return (
    <div className="group relative h-56 overflow-hidden rounded-2xl shadow-sm">
      <img
        src={city.image}
        alt={city.name}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to- from-black/75 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-lg font-semibold">{city.name}</h3>
        <p className="text-sm text-white/80">{city.count}</p>
      </div>
    </div>
  );
};

export default CityCard;