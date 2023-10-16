"use client";
import TableCol from "@/components/Table/TableCol";
import TableHeader from "@/components/Table/TableHeader";
import TableRow from "@/components/Table/TableRow";
import { useGetUserQuery } from "@/redux/api/authApi";
import { format } from "date-fns";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import { useState } from "react";
import CommonModal from "@/components/CommonModal/CommonModal";
const UserManagement = () => {
  const { data = [], isLoading, isError, error } = useGetUserQuery(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>({});
  console.log(data, isLoading, isError, error);

  return (
    <div>
      <h2 className="text-xl font-semibold text-secondary">All users</h2>
      <div>
        <TableHeader
          fields={[
            "S.I",
            "name",
            "email",
            "phone",
            "createdAt",
            "updatedAt",
            "Action",
          ]}
          containerStyles="table  bg-secondary text-center"
        >
          {data?.map((user: any, idx: number) => (
            <TableRow
              key={user?._id}
              styles={`text-xs ${idx % 2 === 1 && "bg-primary"}`}
            >
              <TableCol styles="text-xs">{idx + 1}</TableCol>
              <TableCol styles="text-xs">{user.name}</TableCol>
              <TableCol styles="text-xs">{user.email}</TableCol>
              <TableCol styles="text-xs">{user.phoneNumber}</TableCol>
              <TableCol styles="text-xs">
                {format(new Date(user?.updatedAt), "yyyy MMM dd")}
              </TableCol>
              <TableCol styles="text-xs">
                {format(new Date(user?.updatedAt), "yyyy MMM dd")}
              </TableCol>
              <TableCol styles="text-xs">
                <div className="flex items-center justify-center gap-1">
                  <RiDeleteBin5Fill size={20}></RiDeleteBin5Fill>
                  <LiaEdit
                    size={20}
                    onClick={() => {
                      setSelected(user);
                      setShowModal(true);
                    }}
                  ></LiaEdit>
                </div>
              </TableCol>
            </TableRow>
          ))}
        </TableHeader>
      </div>
      {showModal && (
        <CommonModal
          selected={selected}
          setShow={setShowModal}
          containerStyles=""
        >
          <h1 className="py-10">{selected.name}</h1>
        </CommonModal>
      )}
    </div>
  );
};

export default UserManagement;
