"use client";

import Link from "next/link";
import Image from "next/image";
import ProfileCard from "@/components/profileCard/ProfileCard";
import ProfileRow from "@/components/ProfileRow/ProfileRow";
import ActionButton from "@/components/Buttons/ActionButton";
import { useState } from "react";
import CommonModal from "@/components/CommonModal/CommonModal";
import ProfileEdit from "@/components/ProfileEdit";
const DashboardPage = () => {
   const [showModal, setShowModal] = useState<boolean>(false);
   return (
      <div className="flex items-start justify-center w-full relative">
         <div className=" w-[90%] md:w-[80%] bg-secondary  py-3 rounded-lg">
            <div className="border-b border-black pb-4 px-3 flex items-center justify-between">
               <h1>Profile Information</h1>
               <ActionButton
                  containerStyles="bg-black text-white rounded-md  hover:scale-75 cursor-pointer "
                  handleAction={() => setShowModal(true)}
               >
                  Edit
               </ActionButton>
            </div>
            <div className=" text-xs md:text-base flex flex-col lg:flex-row mt-5 items-center justify-start px-3 w-full">
               <div className="w-full mb-3 flex items-center justify-center  md:w-[240px]">
                  <ProfileCard
                     name="Mostafizur rahaman"
                     email="mostafiz@gmail.com"
                     location="Lakshmipur"
                     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                  />
               </div>
               <div className="w-full ">
                  <ProfileRow
                     propertyName="name"
                     propertyValue="Mostafizur Rahaman"
                     containerStyles="bg-gray-200"
                  />
                  <ProfileRow
                     propertyName="email"
                     propertyValue="mostafiz@gmail.com"
                  />
                  <ProfileRow
                     propertyName="isEmailVerified"
                     propertyValue="pending"
                     containerStyles="bg-gray-200"
                  />
                  <ProfileRow
                     propertyName="Contact"
                     propertyValue="+8801951976238"
                  />
                  <ProfileRow
                     propertyName="Gender"
                     propertyValue="Male"
                     containerStyles="bg-gray-200"
                  />
                  <ProfileRow
                     propertyName="Address"
                     propertyValue="Lakshmipur, Chittagong"
                  />
               </div>
            </div>
         </div>
         {showModal && (
            <CommonModal containerStyles="" setShow={setShowModal}>
               <ProfileEdit></ProfileEdit>
            </CommonModal>
         )}
      </div>
   );
};

export default DashboardPage;

//  961528
