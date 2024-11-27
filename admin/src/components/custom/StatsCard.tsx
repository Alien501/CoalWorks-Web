import { Card, CardContent } from "@/components/ui/card"
import {MoveUpRightIcon, MoveDownLeftIcon} from "lucide-react"
export const StatsCard = ({ icon, value, percentage, status, name }: { icon: React.JSX.Element, value: number, percentage: number, status: string, name: string }) => {
    return (
        <Card className="w-max bg-transparent border-none shadow-none p-3">
            <CardContent className="p-1">
                <div className="flex items-center gap-2">
                    <div className="mt-1 w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-500/10 p-1 rounded-full hover:dark:bg-azure-radiance-500/10 hover:dark:border-azure-radiance-500 border-2 cursor-pointer">
                        {icon}
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-semibold tracking-tight">
                                {value}
                            </span>
                            <span className={`text-sm font-medium flex items-center gap-1 ${(status == 'inc') ? 'text-green-500' : 'text-red-500'}`}>
                                {(status == 'inc') ? '+' : ''}{percentage}%
                                {(status == 'inc') ? <MoveUpRightIcon className="h-3 inline-block" /> : <MoveDownLeftIcon className="h-3 inline-block" />}
                            </span>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">
                            {name}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}