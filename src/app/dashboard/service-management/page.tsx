"use client";
import CommonModal from "@/components/CommonModal/CommonModal";
import TableCol from "@/components/Table/TableCol";
import TableHeader from "@/components/Table/TableHeader";
import TableRow from "@/components/Table/TableRow";
// import { useGetserviceQuery } from "@/redux/api/authApi";
import { useGetservicesQuery } from "@/redux/api/serviceApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CreateService = () => {
  const router = useRouter();
  const { data, error, isError, isLoading } = useGetservicesQuery(undefined);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id: string) => {
    console.log(id);
  };
  return (
    <div>
      <div className="flex  justify-between py-2 ">
        <h2 className="text-xl font-semibold text-secondary">All services</h2>
        <button
          onClick={() => router.push("/dashboard/service-management/create")}
          className="btn  btn-sm btn-primary font-bold"
        >
          create a service
        </button>
      </div>
      <div>
        <TableHeader
          fields={[
            "S.I",
            "hotel name",
            "location",
            "category",
            "code",
            "startFrom",
            "maxPrices",
            "Action",
          ]}
          containerStyles="table  bg-secondary text-center"
        >
          {data?.map((service: any, idx: number) => (
            <TableRow
              key={service?._id}
              styles={`text-xs ${idx % 2 === 1 && "bg-primary"}`}
            >
              <TableCol styles="text-xs">{idx + 1}</TableCol>
              <TableCol styles="text-xs">{service.name}</TableCol>
              <TableCol styles="text-xs">{service.location}</TableCol>
              <TableCol styles="text-xs">{service.category}</TableCol>
              <TableCol styles="text-xs">{service.code}</TableCol>
              <TableCol styles="text-xs">{service.minPriceRange}</TableCol>
              <TableCol styles="text-xs">{service.maxPriceRange}</TableCol>

              <TableCol styles="text-xs">
                <div className="flex items-center justify-center gap-1">
                  <button onClick={() => handleDelete(service?._id)}>
                    <RiDeleteBin5Fill size={20}></RiDeleteBin5Fill>
                  </button>
                  <Link href={`/dashboard/service-management/${service?._id}`}>
                    <LiaEdit
                      size={20}
                      // onClick={() => {
                      //   setSelected(service);
                      //   setShowModal(true);
                      // }}
                    ></LiaEdit>
                  </Link>
                </div>
              </TableCol>
            </TableRow>
          ))}
        </TableHeader>
      </div>
    </div>
  );
};

export default CreateService;
