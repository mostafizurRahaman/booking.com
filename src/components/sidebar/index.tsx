import { FaUserFriends } from "react-icons/fa";
import SideLink from "../SideLink/SideLink";
import SummeryDetails from "../SummeryDetails/SummeryDetails";
import { GrServices } from "react-icons/gr";
const SideBar = ({ isOpen }: { isOpen: boolean }) => {
   return (
      <div
         className={`min-w-[280px] duration-500 transition-all   z-[999] top-0 h-screen bg-white  shadow-[2px_2px_2px_2px_#ddd]   ${
            isOpen ? "  left-0 " : " absolute  -left-[999px] "
         }`}

         
      >  
         <div className="py-7 px-5  flex flex-col gap-3">
            <SideLink
               text="user management"
               path="/dashboard/user-management"
               containersStyle="text-black hover:text-primary"
               icon={<FaUserFriends size={20}></FaUserFriends>}
            ></SideLink>

            <SummeryDetails
               path="/dashboard/services"
               groupName="Service management"
               icon={<GrServices size={20}></GrServices>}
            >
               <SideLink
                  text="Hotel Management"
                  path="/dashboard/services/hotel-management"
                  containersStyle="text-black hover:text-primary"
                  icon={<FaUserFriends size={20}></FaUserFriends>}
               ></SideLink>
               <SideLink
                  text="room management"
                  path="/dashboard/services/room-management"
                  containersStyle="text-black hover:text-primary"
                  icon={<FaUserFriends size={20}></FaUserFriends>}
               ></SideLink>
            </SummeryDetails>
            <SummeryDetails
               path="/dashboard/content-management"
               groupName="Service management"
               icon={<GrServices size={20}></GrServices>}
            >
               <SideLink
                  text="about us"
                  path="/dashboard/content-management/about-us"
                  containersStyle="text-black hover:text-primary"
                  icon={<FaUserFriends size={20}></FaUserFriends>}
               ></SideLink>
               <SideLink
                  text="faq"
                  path="/dashboard/content-management/faq"
                  containersStyle="text-black hover:text-primary"
                  icon={<FaUserFriends size={20}></FaUserFriends>}
               ></SideLink>
            </SummeryDetails>
         </div>
      </div>
   );
};

export default SideBar;
