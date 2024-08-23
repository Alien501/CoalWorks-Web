import { Card, CardContent } from "@/components/ui/card"
import React from "react"

interface MenuCardItemProps {
  menuName: string,
  onMenuClicked: (path: any) => void
}

const MenuCardItem: React.FC<MenuCardItemProps> = ({menuName, onMenuClicked}) => {
  return(
    <Card onClick={onMenuClicked} className="hover:bg-slate-950 hover:text-slate-400 hover:cursor-pointer">
      <CardContent className="p-2 flex justify-center items-center h-full">
        <p className="text-sm font-bold">{menuName}</p>
      </CardContent>
    </Card>
  )
}

export default MenuCardItem;