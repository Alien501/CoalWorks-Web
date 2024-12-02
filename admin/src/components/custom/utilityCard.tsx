import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "../ui/button"
import { Ellipsis } from "lucide-react"

export const UtilityCard = ({ title, subTitle, bodyContent, visible }: { title: string, subTitle: string, bodyContent: React.JSX.Element, visible: boolean }) => {
    return (
        <Card className="border-none shadow-none w-full h-[380px] dark:bg-zinc-900/50">
            <CardHeader className="flex flex-row items-center justify-between p-2">
                <div className="font-medium">
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="text-xs text-gray-800 dark:text-slate-400">{subTitle}</p>
                </div>
                <div>

                    {visible && (
                        <Button className="rounded-full h-12 w-12" variant={'secondary'}>
                            <Ellipsis />
                        </Button>
                    )
                    }
                </div>
            </CardHeader>
            <CardContent>
                {bodyContent}
            </CardContent>
        </Card>
    )
}