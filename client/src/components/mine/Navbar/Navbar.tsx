import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon as Menu } from '@radix-ui/react-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Manage Workers', path: '/manage-worker' },
    { name: 'Reports', path: '/generate-report' },
    { name: 'Settings', path: '/settings' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="w-full z-50">
      <div className="flex items-center justify-between h-[70px] p-2 backdrop-blur-sm bg-white/75 shadow-sm">
        <div className="flex items-center">
          <p className="mx-2 text-xl font-medium">Coal Works</p>
        </div>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </Button>
          ))}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[200px] sm:w-[300px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;