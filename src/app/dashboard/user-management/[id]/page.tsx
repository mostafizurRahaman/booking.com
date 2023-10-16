import UserInput from "@/components/UserForm.ts/input";
import React from "react";
import { useForm } from "react-hook-form";

const Page = async ({ params }: any) => {
  const { handleSubmit, register, formState } = useForm();
  const res = await fetch(`http://localhost:5000/api/v1/user/${params.id}`, {});
  const data = await res.json();

  const onSubmit = (data: any) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 ml-2 lg:ml-[150px] mt-5 sm:w-[380px] sm:ml-11">
          <div>
            <UserInput
              label="Name"
              name="name"
              inputType="text"
              defaultValue={name}
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="Father's Name"
              name="fathersName"
              inputType="text"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />

            <UserInput
              label="Date of Birth"
              name="dob"
              inputType="date"
              required="required"
              register={register}
              formState={formState}
              customInputStyle=""
              customLabelStyle=""
            />
          </div>
        </div>
        <button
          type="submit"
          // disabled={!isFormValid}
          className="bg-secondary text-white py-1 px-8 cursor-pointer mt-[11px] text-2xl block mx-auto rounded"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default Page;
