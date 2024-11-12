import './LBar.css'
import { BackpackIcon, ExclamationTriangleIcon, FileTextIcon, HomeIcon, RocketIcon, CrumpledPaperIcon, CubeIcon } from '@radix-ui/react-icons';
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
        <div className="font-mono font-bold ml-1">
          CoalWorks
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
          <NavMenu to='/sensordata' icon={<CrumpledPaperIcon />} text='Sensors Data' />
          <NavMenu to='/3d' icon={<CubeIcon />} text='Coal Overview' />
        </div>
      </div>
    </>
  )
};
export default LBar;