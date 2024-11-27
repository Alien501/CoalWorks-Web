//@ts-nocheck
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, XAxis } from "recharts";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "bg-black",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(210, 20%, 70%)",
    },
} satisfies ChartConfig

const BarGraph = () => {
    return (
        <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} width={10} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} width={10} />
            </BarChart>
        </ChartContainer>
    )
}

const PieGraph = () => {
    const totalVisitors = chartData.reduce((sum, item) => sum + item.desktop + item.mobile, 0);

    const pieData = [
        {
            name: "Desktop",
            value: chartData.reduce((sum, item) => sum + item.desktop, 0),
            color: chartConfig.desktop.color
        },
        {
            name: "Mobile",
            value: chartData.reduce((sum, item) => sum + item.mobile, 0),
            color: chartConfig.mobile.color
        }
    ];

    return (
        <ChartContainer config={chartConfig}>
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={100}
                    strokeWidth={5}
                    paddingAngle={5}
                >
                    {pieData.map((entry, index) => (
                        <svg key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-3xl font-bold"
                                        >
                                            {totalVisitors.toLocaleString()}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                            Total Visitors
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>
    )
}

const AreaGraph = ({ type = "natural" }: { type?: string }) => {
    return (
        <ChartContainer config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                    dataKey="mobile"
                    type={type}
                    fill="var(--color-mobile)"
                    fillOpacity={0.4}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    dataKey="desktop"
                    type={type}
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
                <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
        </ChartContainer>
    )
}

const LineGraph = ({ type = "monotone" }: { type?: string }) => {
    return (
        <ChartContainer
            config={chartConfig}
        >
            <LineChart
                accessibilityLayer
                data={chartData}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                    dataKey="desktop"
                    type={type}
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    dataKey="mobile"
                    type={type}
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ChartContainer>
    )
}

const SpiderGraph = () => {
    return (
        <ChartContainer config={chartConfig}>
            <RadarChart data={chartData}>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <PolarAngleAxis dataKey="month" />
                <PolarGrid />
                <Radar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    fillOpacity={0.6}
                />
                <Radar dataKey="mobile" fill="var(--color-mobile)" />
            </RadarChart>
        </ChartContainer>
    )
}

const RadialGraph = () => {
    const totalVisitors = chartData.reduce((sum, item) => sum + item.desktop + item.mobile, 0);

    const radialData = [
        {
            name: "Desktop",
            value: chartData.reduce((sum, item) => sum + item.desktop, 0),
            fill: "var(--color-desktop)"
        },
        {
            name: "Mobile",
            value: chartData.reduce((sum, item) => sum + item.mobile, 0),
            fill: "var(--color-mobile)"
        }
    ];

    return (
        <ChartContainer
            config={chartConfig}
        >
            <RadialBarChart
                data={radialData}
                endAngle={180}
                innerRadius={80}
                outerRadius={130}
            >
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) - 16}
                                            className="fill-foreground text-2xl font-bold"
                                        >
                                            {totalVisitors.toLocaleString()}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 4}
                                            className="fill-muted-foreground"
                                        >
                                            Visitors
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </PolarRadiusAxis>
                <RadialBar
                    dataKey="value"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                />
            </RadialBarChart>
        </ChartContainer>
    )
}

export {
    BarGraph,
    PieGraph,
    AreaGraph,
    LineGraph,
    SpiderGraph,
    RadialGraph
}