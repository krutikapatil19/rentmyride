"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form),
    });

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        role: form.role
      })
    );
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 p-8 rounded-xl"
      >
        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <select
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="USER">User</option>
          <option value="OWNER">Owner</option>
        </select>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
