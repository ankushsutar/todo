"use client"

import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";


const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const apiUrl = process.env.BACKEND_URL


  const removeTopic = async () => {
    const confirmed = confirm("Are you sure ?");
    
    if(confirmed){
      const res  = await fetch(apiUrl+`/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok){
        router.refresh()
      }
    }

  };

  return (
    <button onClick={removeTopic} className="text-red-400 bg-white rounded">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
