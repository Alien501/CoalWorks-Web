import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { ChartDataKey } from "@/interfaces/interfaces";
import { Bar, BarChart } from "recharts";

const VerticalBarchart = ({ chartConfig, chartData, chartDataKeys }: { chartConfig: ChartConfig, chartData: any, chartDataKeys: ChartDataKey[] }) => {
    return(
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                {
                    chartDataKeys.map(chartDataKey => (
                        <Bar dataKey={chartDataKey.key} fill={chartDataKey.color} radius={4} />
                    ))
                }
            </BarChart>
        </ChartContainer>
    )
}

export default VerticalBarchart;