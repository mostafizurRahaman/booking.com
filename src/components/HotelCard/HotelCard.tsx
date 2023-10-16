"use client";

import Image from "next/image";
import Link from "next/link";
import { features } from "process";
import ActionButton from "../Buttons/ActionButton";
import { useRouter } from "next/navigation";

const HotelCard = () => {
   const router = useRouter()
   const featues = [
      "4 beds ( 1 twin, 3 full )",
      "free cancellation",
      "no prepayment need",
   ];


 
   return (
      <div className="w-full flex  md:flex-row flex-col gap-3 rounded-lg shadow-[5px_5px_2px_2px_#ddd] p-3  items-start relative border border-primary ">
         <div className="w-full md:w-1/3">
            <Image
               src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
               width={400}
               height={300}
               alt="booking"
               className="w-full h-full object-cover rounded-md "
            ></Image>
         </div>
         <div className="w-full md:w-2/3">
            <div>
               <h3 className="text-lg font-semibold text-capitalize">
                  Card Name
               </h3>
               <p className="text-blue-600 text-sm capitalize underline">
                  location
               </p>
            </div>
            <div className="mt-3  flex flex-row gap-1 md:gap-2 justify-between items-end  ">
               <div className="flex justify-end items-start absolute top-5 right-5 md:top-3 md:right-3 gap-1 ">
                  <div className="flex flex-col items-end ">
                     <h5 className="text-sm font-medium">Review Score</h5>
                     <p className="text-xs font-medium">2 reviews</p>
                  </div>
                  <div className="p-1 py-1 inline-block bg-blue-500 text-lg rounded-md text-white">
                     6.5
                  </div>
               </div>
               <div>
                  <h3 className="text-sm capitalize font-semibold ">
                     Features
                  </h3>
                  <ul className="text-xs flex flex-col gap-[2px] text-black">
                     {featues.map((i, idx) => (
                        <li key={idx}>
                           <span> - </span>
                           {i}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="flex flex-col gap-2 items-end">
                  <h5 className="text-2xl font-bold uppercase ">BDT 4410</h5>
                  <ActionButton
                     handleAction={()=> router.push("id")}
                     containerStyles="bg-black hover:bg-primary duration-300   text-xs rounded-md text-white py-2"
                  >
                     See Availability
                  </ActionButton>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HotelCard;
