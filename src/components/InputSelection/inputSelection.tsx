/* eslint-disable react/prop-types */

import { useState, ChangeEvent } from "react";

interface InputSelectionProps {
   label: string;
   data: any;
   setData: any;
   field: string;
   options: string[];
   selectOp: string;
}

const InputSelection = ({
   label,
   data,
   setData,
   field,
   options,
   selectOp,
}: InputSelectionProps) => {
   const [selected, setSelected] = useState("");

   const handleSelecdtion = (e: ChangeEvent<HTMLSelectElement>) => {
      const items: string = e.target.value;
      const name: string = e.target.name;
      if (!(items === "")) {
         return;
      }

      setSelected(items);
      setData({ ...data, [name]: items.trim().toLowerCase() });
      return;
   };

   return (
      <div className="flex flex-col gap-1 w-full">
         <label className="text-sm capitalize font-semibold text-black">
            {label}
         </label>
         <select
            className="w-full rounded-md border  border-black  -mb-1 p-2  text-black placeholder:text-black font-normal text-sm"
            onChange={handleSelecdtion}
            name={field}
         >
            <option className="text-xs capitalize" value="" selected>
               {selectOp}
            </option>
            {options?.map((option: string, idx: any) => (
               <option
                  className="text-xs capitalize"
                  selected={selected === option}
                  key={idx}
                  value={option}
               >
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
};

export default InputSelection;
