import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { chartData } from "@/data/data";

const COLORS = ['#2563eb', '#60a5fa', '#93c5fd', '#bfdbfe'];
const chartConfig: ChartConfig = {
  'Part-Time': { label: 'Part-Time', color: COLORS[0] },
  'Full-Time': { label: 'Full-Time', color: COLORS[1] },
  'Contractor': { label: 'Contractor', color: COLORS[2] },
};

const WorkChart = () => {
  return (
    <div className="w-full">
      <ChartContainer config={chartConfig} className="max-h-[400px]">
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="workingHour"
          >
            {chartData.map((entry, index) => (
              <Cell name={entry.workerType} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default WorkChart;