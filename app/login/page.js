"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
          email,
          password,
          role,
          redirect: false,
        });

    if (res?.error) {
      setError("Invalid email or password");
    } else {

      setError("");
      
      localStorage.setItem(         //saves user info in browser memory
      "user",
      JSON.stringify({
        email,
        role
      })
    );

    if (role === "owner") {
    router.push("/owner");
    } else {
    router.push("/vehicles");
  }
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-800">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to RentMyRide
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex gap-3 mb-2">
            <p className="text-xs text-gray-400">
              Logging in as: {role.toUpperCase()}
            </p>

            <button
              type="button"
              onClick={() => setRole("user")}
              className={`flex-1 py-2 rounded-lg border ${
                role === "user" ? "bg-blue-600 border-blue-500" : "border-slate-700"
              }`}
            >
              User
            </button>

            <button
              type="button"
              onClick={() => setRole("owner")}
              className={`flex-1 py-2 rounded-lg border ${
                role === "owner" ? "bg-blue-600 border-blue-500" : "border-slate-700"
              }`}
            >
              Owner
            </button>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-medium"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}