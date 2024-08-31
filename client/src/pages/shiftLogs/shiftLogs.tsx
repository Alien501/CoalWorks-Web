import { ShiftLogsTable } from "@/components/mine/shiftlogsTable/ShiftLogsTable"
import LBar from "@/components/mine/LBar/Lbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export const ShiftLogs = (() => {
    return (
        <div className="min-h-screen overflow-hidden">
            <LBar />
            <div className="ml-[80px] mr-[30px] my-16">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="last24Hours">Last 24 hours</TabsTrigger>
                        <TabsTrigger value="lastWeek">Last Week</TabsTrigger>
                        <TabsTrigger value="custom">Custom</TabsTrigger>
                    </TabsList>
                    <TabsContent value="last24Hours">Last 24 hours</TabsContent>
                    <TabsContent value="lastWeek">Last Week</TabsContent>
                    <TabsContent value="custom">Custom</TabsContent>
                </Tabs>
                <ShiftLogsTable />
            </div>
        </div>
    )
})