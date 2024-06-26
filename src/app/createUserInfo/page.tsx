"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
}

const MyForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("User created successfully");
        setFormData({ name: "", email: "" });
        router.push("/");
        router.refresh();
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Failed to create user", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Link
        href={"/"}
        className="border-2 border-white p-2 m-2 flex bg-blue-500 hover:bg-blue-600 flex-col items-center"
      >
        Home
      </Link>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-8">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full mt-1 px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full mt-1 px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default MyForm;
