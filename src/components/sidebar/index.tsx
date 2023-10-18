import { FaUserFriends } from "react-icons/fa";
import SideLink from "../SideLink/SideLink";
import SummeryDetails from "../SummeryDetails/SummeryDetails";
import { GrServices } from "react-icons/gr";
const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`min-w-[250px] duration-500 transition-all absolute  z-[999] top-0 h-screen bg-white  shadow-[2px_2px_2px_2px_#ddd]   ${
        isOpen ? "  left-0 " : "   -left-[999px] "
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
          path="/dashboard/service-management"
          groupName="Service management"
          icon={<GrServices size={20}></GrServices>}
        >
          <SideLink
            text="Hotel Management"
            path="/dashboard/service-management"
            containersStyle="text-black hover:text-primary"
            icon={<FaUserFriends size={20}></FaUserFriends>}
          ></SideLink>
          <SideLink
            text="room management"
            path="/dashboard/room-management"
            containersStyle="text-black hover:text-primary"
            icon={<FaUserFriends size={20}></FaUserFriends>}
          ></SideLink>
        </SummeryDetails>

        <SideLink
          text="booking management"
          path="/dashboard/booking-management/"
          containersStyle="text-black hover:text-primary"
          icon={<GrServices size={20}></GrServices>}
        ></SideLink>

        <SideLink
          text="admin management"
          path="/dashboard/admin-management/"
          containersStyle="text-black hover:text-primary"
          icon={<GrServices size={20}></GrServices>}
        ></SideLink>

        <SummeryDetails
          path="/dashboard/content-management"
          groupName="content management"
          icon={<GrServices size={20}></GrServices>}
        >
          <SideLink
            text="blog"
            path="/dashboard/content-management/blog"
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
