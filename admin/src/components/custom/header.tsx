import { Bell, MessageCircle, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export default function Header() {
  return (
    <header className="bg-white shadow-sm z-10 font-satoshi h-16 px-3 flex items-center">
        Existing Header Component
      {/* <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Fullmoon" />
            <nav className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">Cryptocurrency</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Exchange</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Resources</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Community</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Learn</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-gray-500">
              <MessageCircle className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-gray-500">
              <Settings className="h-6 w-6" />
            </button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div> */}
    </header>
  )
}
