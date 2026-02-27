"use client";

import Link from "next/link";

export default function VehicleCard({ vehicle }) {
  return (

   <Link href={`/vehicles/${vehicle.id}`} className = "block">
    <div className="relative bg-white dark:bg-slate-800 rounded shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
  
  <img
    src={vehicle.image}
    alt={vehicle.name}
    className="w-full h-48 object-cover"
    />

    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm shadow">
    ⭐ {vehicle.rating}
    </div>

  
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
      {vehicle.name}
    </h2>

    <p className="text-sm text-gray-600 dark:text-gray-300">
      {vehicle.type} • {vehicle.location}
    </p>

    <p className="text-blue-600 font-bold mt-1">
      ₹{vehicle.price}/day
    </p>
      </div>
  </div>
</Link>
  );
}