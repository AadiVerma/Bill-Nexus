"use client";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

export function SearchButton() {
  const placeholders = [
    "Search About Invoices",
    "Search About Customers",
    "Search About Services",
    "Search About Payments",
    "Search About Reports",
    "Search About Settings"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
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
