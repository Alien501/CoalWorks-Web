import { Card, CardContent, CardHeader } from "@/components/ui/card"
import IconButton from "../IconButton/IconButton"
import { DownloadIcon } from "lucide-react"

const DashboardCard = ({cardTitle, cardContent}: { cardTitle: string, cardContent: JSX.Element }) => {
    return(
        <Card className="p-1 hover:shadow-md">
            <CardHeader className="flex flex-row justify-between items-center">
                <p className="text-base font-medium">{cardTitle}</p>
                <IconButton
                    Icon={DownloadIcon}
                    variant="secondary"
                />
            </CardHeader>
            <CardContent>
                {cardContent}
            </CardContent>
        </Card>
    )
}

export default DashboardCard;