import {
   ChangeEventType,
   ImageType,
   UserEditInfoType,
   userEditErrorType,
} from "@/types";
import InputText from "../InputBox/InputBox";
import { uploadCouldinary } from "@/utiles/uploadCouldinary";
import { useState } from "react";
import Image from "next/image";
import profileImg from "../../assest/profile.jpg";
import InputSelection from "../InputSelection/inputSelection";
import SubmitButton from "../Buttons/SubmitButton";
import { errorToJSON } from "next/dist/server/render";
const ProfileEdit = () => {
   const [user, setUser] = useState<any>({});
   const [formData, setFormData] = useState<UserEditInfoType>({
      name: "",
      email: "",
      phone: "",
      profileImage: {
         url: "",
         publicLink: "",
      },
      nationality: "",
      language: "",
      address: "",
      gender: "male",
      dob: "",
   });
   const [errors, setErrors] = useState({
      name: "",
      email: "",
      phone: "",
      profileImage: "",
      imgPublicId: "",
      nationality: "",
      language: "",
      address: "",
      gender: "",
      dob: "",
   });
   const handleImageUpload: ChangeEventType = async (e) => {
      if (e.target?.files) {
         const image = e.target.files[0];
         const link: ImageType = await uploadCouldinary(image);
         if (link.publicLink && link.url) {
            setFormData({
               ...formData,
               profileImage: {
                  url: link.url,
                  publicLink: link.publicLink,
               },
            });
         } else {
            setFormData({
               ...formData,
               profileImage: { url: "", publicLink: "" },
            });
            setErrors({
               ...errors,
               profileImage: "please upload  image again",
            });
         }
      } else {
         setFormData({
            ...formData,
            profileImage: { url: "", publicLink: "" },
         });
         setErrors({ ...errors, profileImage: "please select an image" });
      }
   };

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
      if (phone === "") {
         setErrors({ ...errors, phone: "phone number should't be empty" });
         setFormData({ ...formData, phone: "" });
      } else if (!/^(((\+|00)?880)|0)(\d){10}$/.test(phone)) {
         setErrors({ ...errors, phone: "number should be valid" });
         setFormData({ ...formData, phone: "" });
      } else {
         setErrors({ ...errors, phone: "" });
         setFormData({ ...formData, phone: phone });
      }
   };
   return (
      <div>
         <div className="w-[150px] h-[150px] p-1 rounded-md  border border-primary flex flex-col  justify-center">
            {/* <label htmlFor="profile" className="text-xs block mb-3">
               Upload profile
            </label> */}
            <div className="flex items-center justify-center">
               <Image
                  src={formData?.profileImage.url || profileImg}
                  alt="image"
                  width={150}
                  height={150}
                  className="w-[100px] h-[100px] rounded-full"
               ></Image>
            </div>
            <InputText
               type="file"
               name="profile"
               // label="upload profile"
               placeholder=""
               onChange={handleImageUpload}
               styles="w-full border-0 text-xs border-0  flex flex-col"
               error={errors.profileImage}
            ></InputText>
         </div>
         <div>
            <form onSubmit={() => console.log(formData)} className="grid md:grid-cols-2  grid-cols-1 gap-2 mt-5">
               <h2 className="text-lg font-semibold  capitalize lg:col-span-2 ">
                  Personal Information
               </h2>
               <InputText
                  type="text"
                  name="name"
                  label="Your name"
                  placeholder="your name"
                  initialValue={user.name}
                  error={errors.name}
                  onChange={handleName}
               ></InputText>
               <InputText
                  type="email"
                  name="email"
                  label="Your email"
                  placeholder="your email"
                  initialValue={user.email}
                  error={errors.email}
                  onChange={handleEmail}
               ></InputText>
               <InputText
                  type="text"
                  name="phone"
                  label="Your phone"
                  placeholder="your phone"
                  initialValue={user.phone}
                  error={errors.phone}
                  onChange={handlePhone}
               ></InputText>
               <InputText
                  type="date"
                  name="dob"
                  label="birth day"
                  // placeholder="your phone"
                  // initialValue={user.phone}
                  error={errors.dob}
                  onChange={handleName}
               ></InputText>
               <h2 className="text-lg font-semibold  capitalize lg:col-span-2 ">
                  Preference
               </h2>
               <InputText
                  type="text"
                  name="nationality"
                  label="Your nationality"
                  placeholder="your nationality"
                  initialValue={user.nationality}
                  error={errors.nationality}
                  onChange={handleName}
               ></InputText>
               <InputText
                  type="language"
                  name="language"
                  label="Your language"
                  placeholder="your language"
                  initialValue={user.language}
                  error={errors.language}
                  onChange={handleName}
               ></InputText>
               <InputText
                  type="text"
                  name="address"
                  label="Your address"
                  placeholder="your address"
                  initialValue={user.address}
                  error={errors.address}
                  onChange={handleName}
               ></InputText>
               <InputSelection
                  label="Gender"
                  data={formData}
                  setData={setFormData}
                  field="gender"
                  options={["male", "female", "others"]}
                  selectOp="select gender"
               ></InputSelection>
               <SubmitButton
                  text="save"
                  containerStyles="w-[1/2]   ml-auto lg:col-span-2"
                  disabled={
                     !!errors.name ||
                     !!errors.email ||
                     !!errors.dob ||
                     !!errors.imgPublicId ||
                     !!errors.language ||
                     !!errors.nationality ||
                     !!errors.phone
                  }
               ></SubmitButton>
            </form>
         </div>
      </div>
   );
};

export default ProfileEdit;
