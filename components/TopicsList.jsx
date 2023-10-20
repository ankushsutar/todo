"use client"

import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useState } from "react";


  
const TopicsList =  () => {
  const [topics, setTopics] = useState([])
  const getTopics = async () => {
    const apiUrl = process.env.BACKEND_URL;
  
    try {
      const res = await fetch("http:localhost:3000/api/topics", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      const data =  res.json();
      setTopics(data.topics)
    } catch (error) {
      console.log("Error loading topics", error);
    }
  };
  useEffect(() => {
    getTopics()
  },[])
  
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start rounded shadow-md hover:scale-105 transition-transform duration-300"
        >
          <div>
            <h2 className="font-bold text-2xl text-white">{t.title}</h2>
            <div className="text-white">{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} className="bg-white rounded" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
