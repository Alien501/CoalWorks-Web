import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    // { priority: "shutdown", issues: 186},  for now ignoring these priorities for simplicity
    { priority: "medium", issues: 305 },
    { priority: "high", issues: 237},
    { priority: "emergency", issues: 73},
    // { priority: "turnaround", issues: 209},
    { priority: "low", issues: 214},
]

const chartConfig = {
    issues: {
        label: "issues",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
    label: {
        color: "hsl(var(--background))",
    },
} satisfies ChartConfig


export default function IssuesChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Open Issues</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            right: 16,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="priority"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            hide
                        />
                        <XAxis dataKey="issues" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                            dataKey="issues"
                            layout="vertical"
                            fill="var(--color-issues)"
                            radius={4}
                        >
                            <LabelList
                                dataKey="priority"
                                position="insideLeft"
                                offset={8}
                                className="fill-[--color-label]"
                                fontSize={12}
                            />
                            <LabelList
                                dataKey="issues"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Total issues raised 432
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total issues for the last 6 months
                </div>
            </CardFooter>
        </Card>

    )
}