import './LBar.css'
import { BackpackIcon, ExclamationTriangleIcon, FileTextIcon, HomeIcon, RocketIcon, CrumpledPaperIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NavMenu from '../NavMenu/NavMenu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const LBar = () => {
  return (
    <>
      <div className="bg-white horizontal-bar flex flex-row justify-between items-center p-1 border-b">
        <div className="">
          App Name
        </div>
        <div className="right-content">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className='hover:cursor-pointer'>
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
          {/* Place moss logo here */}
        </div>

        <div className="menu-item-container flex flex-col justify-center items-center">
          <NavMenu to='/' icon={<HomeIcon fill='red' fillOpacity={1} />} text='Home' />
          <NavMenu to='/shift-planning' icon={<RocketIcon />} text='Shift Planning' />
          <NavMenu to='/alerts' icon={<ExclamationTriangleIcon />} text='Alerts' />
          <NavMenu to='/shiftlogs' icon={<FileTextIcon />} text='Logs' />
          <NavMenu to='/' icon={<CrumpledPaperIcon />} text='Operator' />
        </div>
      </div>
    </>
  )
};
export default LBar;