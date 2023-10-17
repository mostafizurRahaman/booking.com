"use client";

import ActionButton from "@/components/Buttons/ActionButton";
import SubmitButton from "@/components/Buttons/SubmitButton";
import CommonModal from "@/components/CommonModal/CommonModal";
import InputText from "@/components/InputBox/InputBox";
import InputSelection from "@/components/InputSelection/inputSelection";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import { ChangeEventType, OnSubmitType } from "@/types";
import Image from "next/image";
import { useState } from "react";

const RoomDetails = ({ params }: { params: any }) => {
   // console.log(params.roomId);
   const [showModal1, setShowModal1] = useState<boolean>(false);
   const [formData, setFormData] = useState<any>({
      name: "",
      email: "",
      phone: "",
      nidOrBirth: "",
      room: "",
      totalFee: "",
      discount: "",
      checkInDate: "",
      checkOutDate: "",
      status: "",
      payType: "",
      payStatus: "",
      bookingNo: "",
   });
   const [errors, setErrors] = useState<any>({
      name: "",
      email: "",
      phone: "",
      nidOrBirth: "",
      room: "",
      totalFee: "",
      discount: "",
      checkInDate: "",
      checkOutDate: "",
      status: "",
      payType: "",
      payStatus: "",
      bookingNo: "",
   });
   console.log(formData, errors);

   const handleName: ChangeEventType = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (!value?.length) {
         setErrors({ ...errors, [name]: `${name} shouldn't be empty` });
         setFormData({ ...formData, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: `` });
         setFormData({ ...formData, [name]: value });
      }
   };
   const handleEmail: ChangeEventType = (e) => {
      const name = e?.target?.name;
      const value = e.target.value.trim();
      if (!value.length) {
         setErrors({ ...errors, [name]: "email shouldn't be empty" });
         setFormData({ ...formData, [name]: "" });
      } else if (
         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      ) {
         setErrors({ ...errors, [name]: "Please provide a email" });
         setFormData({ ...formData, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setFormData({ ...formData, [name]: value });
      }
   };

   const handlePhone: ChangeEventType = (e) => {
      const phone: string = e.target.value;
      const name: string = e.target.name;
      if (!phone) {
         setErrors({
            ...errors,
            [name]: "phone number should't be empty",
         });
         setFormData({ ...formData, [name]: "" });
      } else if (!/^(((\+|00)?880)|0)(\d){10}$/.test(phone)) {
         setErrors({ ...errors, [name]: "number should be valid" });
         setFormData({ ...formData, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setFormData({ ...formData, [name]: phone });
      }
   };

   const handleNumber: ChangeEventType = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (!value) {
         setErrors({ ...errors, [name]: `${name} shouldn't be empty ` });
         setFormData({ ...formData, [name]: "" });
      } else if (!/^-?\d*\.?\d+$/.test(value)) {
         setErrors({ ...errors, [name]: "Please give a valid number " });
         setFormData({ ...formData, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setFormData({ ...formData, [name]: parseFloat(value) });
      }
   };

   const handleDiscount: ChangeEventType = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (!e.target.value) {
         setErrors({ ...errors, [name]: `Please provide ${name}` });
         setFormData({ ...formData, [name]: "" });
      } else if (!/^(100|\d{1,2}(\.\d+)?)$/.test(value)) {
         setErrors({ ...errors, [name]: `discount should be 0 to 100` });
         setFormData({ ...formData, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: `` });
         setFormData({ ...formData, [name]: parseFloat(value) });
      }
   };

   const handleDate: ChangeEventType = (e) => {
      const name = e.target.name;
      const date = e.target.value;
      if (!date) {
         setErrors({ ...errors, [name]: "Please select a date " });
         setFormData({ ...formData, [name]: "" });
      } else if (
         /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(date)
      ) {
         setErrors({ ...errors, [name]: "please provide a valid date" });
         setFormData({ ...formData, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setFormData({ ...formData, [name]: new Date(date).toISOString() });
      }
   };

   const handleSubmit: OnSubmitType = (e) => {
      e.preventDefault();
      console.log(formData);
   };

   const featuers: { image: string; name: string }[] = [
      {
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeoxJcwhQAgpcrvTy2PWk9cI_MkdepoHFqpb3JBJa7j5uUQGKM",
         name: "Balcony",
      },
      {
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeoxJcwhQAgpcrvTy2PWk9cI_MkdepoHFqpb3JBJa7j5uUQGKM",
         name: "Terrace",
      },
      {
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeoxJcwhQAgpcrvTy2PWk9cI_MkdepoHFqpb3JBJa7j5uUQGKM",
         name: "Washing machine",
      },
      {
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeoxJcwhQAgpcrvTy2PWk9cI_MkdepoHFqpb3JBJa7j5uUQGKM",
         name: "View",
      },
      {
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeoxJcwhQAgpcrvTy2PWk9cI_MkdepoHFqpb3JBJa7j5uUQGKM",
         name: "Washing machine",
      },
      {
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeoxJcwhQAgpcrvTy2PWk9cI_MkdepoHFqpb3JBJa7j5uUQGKM",
         name: "1000 m² size",
      },
      {
         image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeoxJcwhQAgpcrvTy2PWk9cI_MkdepoHFqpb3JBJa7j5uUQGKM",
         name: "Entire apartment",
      },
   ];
   return (
      <div className="flex items-center justify-center flex-col gap-5">
         <div className="w-[95%] my-10 mx-auto bg-secondary md:p-10 p-5 shadow-[5px_5px_5px_5px_#ddd] rounded-lg">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold uppercase">Room title</h2>
               <ActionButton
                  handleAction={() => setShowModal1(true)}
                  containerStyles="bg-black hover:bg-primary duration-300   text-xs rounded-md text-white py-2"
               >
                  Book now
               </ActionButton>
            </div>
            <h5 className="text-2xl font-semibold">Hotel demo images</h5>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 my-3">
               {[
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479678146.jpg?k=a0360896836936a1df357718a283527a9d48fa29a8b6f23952500c7b5a14cbb4&o=&hp=1",
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479678182.jpg?k=7eec6fce42e94ddb1aee3031157ee134fd9d78ab4e3eaec2fac727024fc0d0d2&o=&hp=1",
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/479678185.jpg?k=0e076362a872385687feb02c74f962f5ab878990b7e59face884cecd8c7f7b4a&o=&hp=1",
               ].map((i: string, idx: number) => (
                  <Image
                     src={i}
                     key={idx}
                     alt="hotel image"
                     className={`w-full rounded-xl h-auto ${
                        idx === 0 && "md:col-span-2 row-span-2  "
                     }`}
                     width={100}
                     height={100}
                  ></Image>
               ))}
            </div>
            <h3>features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between items-center ">
               {featuers.map(
                  (i: { image: string; name: string }, idx: number) => (
                     <div
                        key={idx}
                        className="flex items-center gap-1 px-5 py-2 rounded-lg "
                     >
                        <Image
                           src={i.image}
                           width={20}
                           height={20}
                           alt={i.name}
                           className="w-7 h-7"
                        ></Image>
                        <p className="text-sm capitalize">{i.name}</p>
                     </div>
                  )
               )}
            </div>
         </div>
         <div className="w-[95%] py-3 p-5 rounded-md shadow-[5px_5px_5px_5px_#ddd] mb-10">
            <ReviewForm></ReviewForm>
         </div>
         {showModal1 && (
            <CommonModal selected="data" setShow={setShowModal1}>
               <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-3 md:grid-cols-2"
               >
                  <InputText
                     type="text"
                     name="name"
                     label="name"
                     placeholder="your name"
                     error={errors.name}
                     onChange={handleName}
                  ></InputText>
                  <InputText
                     type="email"
                     name="email"
                     label="email"
                     placeholder="your email"
                     error={errors.email}
                     onChange={handleEmail}
                  ></InputText>
                  <InputText
                     type="text"
                     name="phone"
                     label="phone"
                     placeholder="your phone"
                     error={errors.phone}
                     onChange={handlePhone}
                  ></InputText>
                  <InputText
                     type="date"
                     name="nidOrBirth"
                     label="nidOrBirth"
                     placeholder="your nid or birth"
                     error={errors.nidOrBirth}
                     onChange={handleDate}
                  ></InputText>
                  <InputText
                     type="text"
                     name="room"
                     label="room"
                     placeholder="your room"
                     error={errors.room}
                     onChange={handleName}
                  ></InputText>
                  <InputText
                     type="number"
                     name="totalFee"
                     label="totalFee"
                     placeholder="your total fee"
                     error={errors.totalFee}
                     onChange={handleNumber}
                  ></InputText>
                  <InputText
                     type="number"
                     name="discount"
                     label="discount"
                     placeholder="your discount"
                     error={errors.discount}
                     onChange={handleDiscount}
                  ></InputText>
                  <InputText
                     type="date"
                     name="checkInDate"
                     label="checkInDate"
                     placeholder="your checkInDate"
                     error={errors.checkInDate}
                     onChange={handleDate}
                  ></InputText>
                  <InputText
                     type="date"
                     name="checkOutDate"
                     label="checkOutDate"
                     placeholder="your checkOutDate"
                     error={errors.checkOutDate}
                     onChange={handleDate}
                  ></InputText>
                  <InputSelection
                     label="Status"
                     data={formData}
                     setData={setFormData}
                     field="status"
                     options={["pending", "confirmed", "cancelled"]}
                     selectOp="select status"
                  ></InputSelection>
                  <InputSelection
                     label="payType"
                     data={formData}
                     setData={setFormData}
                     field="payType"
                     options={["bkash", "nagad", "card", "cash"]}
                     selectOp="select payType"
                  ></InputSelection>
                  <InputSelection
                     label="payStaus"
                     data={formData}
                     setData={setFormData}
                     field="payStatus"
                     options={["paid", "unpaid"]}
                     selectOp="select payStatus"
                  ></InputSelection>
                  <InputText
                     type="text"
                     name="bookingNo"
                     label="bookingNo"
                     placeholder="your bookingNo"
                     error={errors.bookingNo}
                     onChange={handleName}
                  ></InputText>
                  <div className="md:cols-span-2 justify-end flex items-center">
                     <SubmitButton
                        text="book"
                        disabled={
                           !formData?.name ||
                           !formData?.email ||
                           !formData?.phone ||
                           !formData?.nidOrBirth ||
                           !formData?.room ||
                           !formData?.totalFee ||
                           !formData.discount ||
                           !formData?.checkInDate ||
                           !formData?.checkOutData ||
                           !formData?.status ||
                           !formData?.payStatus ||
                           !formData?.bookingNo
                        }
                     ></SubmitButton>
                  </div>
               </form>
            </CommonModal>
         )}
      </div>
   );
};

export default RoomDetails;
