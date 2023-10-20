"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const apiUrl = process.env.BACKEND_URL
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch(apiUrl+"/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        console.log("created ")
        router.refresh();
        router.push("/")
      } else {
        throw new Error("Failed to crete entry");
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 rounded"
        type="text"
        placeholder="Topic title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 rounded"
        type="text"
        placeholder="Topic description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded"
      >
        Add Topic
      </button>
    </form>
  );
}
