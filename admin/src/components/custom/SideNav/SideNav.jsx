import "./SideNav.css";
import { HomeIcon } from "@radix-ui/react-icons";
import { MdReportProblem } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { FaFirstAid } from "react-icons/fa";
import { AiOutlineIssuesClose } from "react-icons/ai";
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
            to="/alerts"
            icon={<MdReportProblem />}
            text="Alerts"
          />
          <NavMenu
            to="/events"
            icon={<MdEvent />}
            text="Events"
          />
          <NavMenu to="/injuries" icon={<FaFirstAid />} text="Injuries" />
          <NavMenu to="/issues" icon={<AiOutlineIssuesClose />} text="Issues" />
        </div>
      </div>
    </>
  );
};

export default LBar;
