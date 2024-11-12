import { Pie, PieChart,  } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";


const chartConfig = {
    percentage: {
      label: "Percentage",
    },
    completed: {
      label: " Completed",
      color: "hsl(var(--chart-1))",
    },
    incomplete: {
      label: "Incomplete",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

const data = [
    {
        status: 'Completed',
        percentage: 75
    },
    {
        status: 'Incomplete',
        percentage: 25
    },
]

const Piechart = () => {
    return(
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={data} label nameKey={'status'} dataKey="percentage" />
            </PieChart>
        </ChartContainer>
    )
}

export default Piechart;