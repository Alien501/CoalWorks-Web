import './LBar.css'
import { BackpackIcon, ExclamationTriangleIcon, FileTextIcon, HomeIcon, RocketIcon } from '@radix-ui/react-icons';
import NavMenu from '../NavMenu/NavMenu';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const LBar = () => {
  return(
    <>
      <div className="bg-white horizontal-bar flex flex-row justify-between items-center p-1">
        <div className="left-content">
          App Name
        </div>
        <div className="right-content">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
        </div>
      </div>
      <div className="vertical-bar bg-white">
        <div className="logo-container h-[30px] w-[30px] bg-slate-700 rounded-full mx-auto my-3">
          {/* Place moss logo here */}
        </div>

        <div className="menu-item-container flex flex-col justify-center items-center">
          <NavMenu to='/' icon={<HomeIcon fill='red' fillOpacity={1} />} text='Home' />
          <NavMenu to='/shift-planning' icon={<RocketIcon />} text='Shift Planning' />
          <NavMenu to='/alerts' icon={<ExclamationTriangleIcon />} text='Alerts' />
          <NavMenu to='/shiftlogs' icon={<FileTextIcon />} text='Logs' />
          <NavMenu to='/' icon={<BackpackIcon />} text='Operator' />
        </div>
      </div>
    </>
  )
};
export default LBar;