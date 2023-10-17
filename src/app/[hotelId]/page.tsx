import RoomCard from "@/components/RoomCard/RoomCard";
import Image from "next/image";

const SingleHotelDetails = (props: any) => {
   console.log(props.params.hotelId);
   console.log("Data");
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
            <h2 className="text-xl font-bold uppercase">Hotel Name</h2>
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
         <div className="w-[95%] ">
            <h3 className="text-2xl font-medium  capitalize">
               Available Rooms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
               <RoomCard></RoomCard>
            </div>
         </div>
      </div>
   );
};

export default SingleHotelDetails;
