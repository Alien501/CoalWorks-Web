import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"


export const CreateControlPlan = () => {
    const { id } = useParams()

    useEffect(()=> {
        //fetch the hazard by id
    })
    return (
        <div className="min-h-[calc(100vh-65px)] flex justify-center ">
            <Card className="w-[95vw] max-w-[95vw] sm:w-[90vw] sm:max-w-[90vw] overflow-y-auto my-10">
                <CardHeader>
                    <CardTitle>Create Control Plan</CardTitle>
                    <CardDescription>Create control for the risk</CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea placeholder="Enter the control plan details" className="h-[200px]"></Textarea>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
