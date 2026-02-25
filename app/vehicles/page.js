"use client";

import Link from "next/link";
import { vehicles } from "@/lib/data";

import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function VehiclesPage() {
  const router = useRouter();

  const [name, setName] = useState("");

  useEffect(() => {
  const user = localStorage.getItem("user");

  if (user) {
    const parsed = JSON.parse(user);
    setName(parsed.name || "");
  }
}, []);

  const handleLogout = async () => {
  localStorage.removeItem("user");
  await signOut({ redirect: false });
  router.push("/login");

};
  return (
    <main className="p-6">

      <button
        onClick={handleLogout}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        LOGOUT
      </button>

        {/* if name exists, show greeting */}
        {name && (
          <p className="text-sm text-gray-500 mb-2">
            Hi {name} 👋
          </p>
      )}

      <h1 className="text-3xl font-bold mb-6">Available Vehicles</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <Link
            key={v.id}
            href={`/vehicles/${v.id}`}
            className="bg-white rounded shadow hover:shadow-lg transition block overflow-hidden"
          >
            <img
              src={v.image}
              alt={v.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {v.name}
              </h2>

              <p className="text-sm text-gray-600">
                {v.type} • {v.location}
              </p>

              <p className="text-blue-600 font-bold mt-1">
                ₹{v.price}/day
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Click to view details →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
