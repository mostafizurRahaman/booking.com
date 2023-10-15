"use client";
import Banner from "@/components/Banner/Banner";
import HotelCard from "@/components/HotelCard/HotelCard";
import InputText from "@/components/InputBox/InputBox";
import InputSelection from "@/components/InputSelection/inputSelection";
import { ChangeEventType } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
   const [searchQuery, setSearchQuery] = useState<any>({
      search: "",
      minPrice: 0,
      maxPrice: 0,
      star: "",
   });

   const handleText: ChangeEventType = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setSearchQuery({ ...searchQuery, [name]: value });
   };

   console.log(searchQuery);
   const handleRange: ChangeEventType = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setSearchQuery({ ...searchQuery, [name]: parseInt(value) });
   };
   return (
      <main className="flex min-h-screen flex-col items-center justify-between pb-10 ">
         <Banner></Banner>
         <div className="grid grid-cols-1 md:grid-cols-3 items-center w-[90%] gap-3 bg-secondary px-10 rounded-md  md:rounded-full py-5 z-[99] -mt-[150px] md:-mt-[80px] shadow-[2px_2px_2px_2px_#ddd]">
            <InputText
               label="Search Keyword"
               type="text"
               name="search"
               placeholder="search hotel"
               onChange={handleText}
               styles="rounded-xl "
            ></InputText>
            <div className="flex flex-col gap-[2px] md:px-5">
               <InputText
                  label="min Price"
                  type="range"
                  name="minPrice"
                  min={0}
                  max={5000}
                  onChange={handleRange}
               ></InputText>
               <InputText
                  label="max price"
                  type="range"
                  name="maxPrice"
                  min={0}
                  max={5000}
                  onChange={handleRange}
               ></InputText>
            </div>
            <InputSelection
               label="By star"
               data={searchQuery}
               setData={setSearchQuery}
               field="star"
               selectOp="select star"
               options={["1 star", "2 star", "3 star", "4 star", "5 star"]}
            ></InputSelection>
         </div>
         <div className="w-full grid  grid-cols-1 md:grid-cols-2 px-10 py-10 gap-5">
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
            <HotelCard></HotelCard>
         </div>
      </main>
   );
}
