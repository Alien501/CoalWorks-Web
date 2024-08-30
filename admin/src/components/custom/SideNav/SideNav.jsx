import "./SideNav.css";
import { HomeIcon } from "@radix-ui/react-icons";
import { TbReportAnalytics } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserCog, FaUserFriends } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavMenu from "../NavMenu/NavMenu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const LBar = () => {
  return (
    <>
      <div className="bg-white horizontal-bar flex flex-row justify-between items-center p-1 border-b">
        <div><h1 className="font-bold text-3xl px-2">Hello Admin! </h1></div>
        <div className="right-content">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="hover:cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="vertical-bar border-r bg-white">
        <div className="logo-container h-[30px] w-[30px] bg-slate-700 rounded-full mx-auto my-3">
          {/* Place logo here */}
        </div>

        <div className="menu-item-container flex flex-col justify-center items-center">
          <NavMenu
            to="/"
            icon={<HomeIcon fill="red" fillOpacity={1} />}
            text="Home"
          />
          <NavMenu
            to="/supervisors"
            icon={<FaUserFriends />}
            text="Supervisors"
          />
          <NavMenu to="/operators" icon={<FaUserCog />} text="Operators" />
          <NavMenu
            to="/productivity-report"
            icon={<TbReportAnalytics />}
            text="Productivity Report"
          />
          <NavMenu
            to="/safety-report"
            icon={<AiFillSafetyCertificate />}
            text="Safety Report"
          />
          <NavMenu to="/payroll" icon={<MdOutlinePayment />} text="Payroll" />
        </div>
      </div>
    </>
  );
};

export default LBar;
