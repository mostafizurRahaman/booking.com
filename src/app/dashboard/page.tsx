"use client";

import Link from "next/link";
import Image from "next/image";
import ProfileCard from "@/components/profileCard/ProfileCard";
import ProfileRow from "@/components/ProfileRow/ProfileRow";
import ActionButton from "@/components/Buttons/ActionButton";
import { useState } from "react";
import CommonModal from "@/components/CommonModal/CommonModal";
import ProfileEdit from "@/components/ProfileEdit";
import { useGetuserprofileQuery } from "@/redux/api/authApi";
import { Cookie } from "next/font/google";
import Cookies from "universal-cookie";
const DashboardPage = () => {
  const cookie = new Cookies();
  const id = cookie.get("userId");
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data } = useGetuserprofileQuery(id);

  //   const {
  //     name,
  //     email,
  //     phoneNumber,
  //     profileImg: { url },
  //     preferences: { address, language, nationality },
  //   } = data;
  return (
    <div className="flex items-start justify-center w-full relative">
      <div className=" w-[90%] md:w-[80%] bg-secondary  py-3 rounded-lg">
        <div className="border-b border-black pb-4 px-3 flex items-center  justify-between">
          <h1>Profile Information</h1>
          <ActionButton
            containerStyles="bg-black text-white rounded-md  hover:scale-75 cursor-pointer "
            handleAction={() => setShowModal(true)}
          >
            Edit
          </ActionButton>
        </div>

        <h1 className="flex justify-end me-4 mt-2 text-[#10B981]  font-bold">
          Personal Information
        </h1>

        <div className=" text-xs md:text-base flex flex-col md:flex-row mt-5 items-center justify-start px-3 w-full">
          <div className="w-full mb-3 flex items-center justify-center  md:w-[240px]">
            <ProfileCard
              name={data?.name}
              email={data?.email}
              location={data?.address ? data?.address : "not set yet"}
              image={
                data?.profileImg?.url
                  ? data?.profileImg?.url
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              }
            />
          </div>
          <div className="w-full ">
            <ProfileRow
              propertyName="name"
              propertyValue={data?.name}
              containerStyles="bg-gray-200"
            />
            <ProfileRow propertyName="email" propertyValue={data?.email} />
            <ProfileRow
              propertyName="isEmailVerified"
              propertyValue="pending"
              containerStyles="bg-gray-200"
            />
            <ProfileRow
              propertyName="Contact"
              propertyValue={data?.phoneNumber}
            />
            <ProfileRow
              propertyName="Gender"
              propertyValue={data?.gender ? data?.gender : "not set yet"}
              containerStyles="bg-gray-200"
            />
            <h1 className="flex justify-end me-4 mt-2 text-[#10B981]  font-bold">
              preferences
            </h1>
            <ProfileRow
              propertyName="nationality"
              propertyValue={
                data?.nationality ? data?.nationality : "not set yet"
              }
            />
            <ProfileRow
              propertyName="language"
              propertyValue={data?.language ? data?.language : "not set yet"}
              containerStyles="bg-gray-200"
            />
            <ProfileRow
              propertyName="Address"
              propertyValue={data?.address ? data?.address : "not set yet"}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <CommonModal containerStyles="" setShow={setShowModal}>
          <ProfileEdit setShow={setShowModal} datas={data}></ProfileEdit>
        </CommonModal>
      )}
    </div>
  );
};

export default DashboardPage;

//  961528
