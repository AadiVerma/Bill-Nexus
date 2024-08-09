"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { useNavigate } from "react-router-dom";

export function SearchButton() {
  const [input,setInput]=useState<string>();
  const navigate=useNavigate();
  const placeholders = [
    "Search About AllInvoices",
    "Search About Customers",
    "Search About Services",
    "Search About Payments",
    "Search About Reports",
    "Search About Settings"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(()=>e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`${input}`)
  };
  return (
     <div className="border-2 border-[#212121] rounded-full p-1">
         <PlaceholdersAndVanishInput 
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
     </div>
  );
}
