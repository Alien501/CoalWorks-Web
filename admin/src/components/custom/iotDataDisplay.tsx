import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RealTimeLineGraph, RealTimeBarGraph, EnvironmentalCard, VibrationMetricsCard } from '@/components/custom/iotGraphs';
import { Activity } from 'lucide-react';

interface FrequencyBin {
  Hz: number;
  Magnitude: number;
}

interface AxisData {
  RMS: number;
  Peak: number;
  STE: number;
  FrequencyBins: FrequencyBin[];
}

interface BMP280Data {
  Temperature: number;
  Pressure: number;
  Altitude: number;
}

interface IoTData {
  x: AxisData;
  y: AxisData;
  z: AxisData;
  bmp280: BMP280Data;
}

interface IoTDataDisplayProps {
  data: IoTData;
}

const IoTDataDisplay: React.FC<IoTDataDisplayProps> = ({ data }) => {
  // Prepare data for frequency response graphs
  const frequencyData = {
    x: data.x.FrequencyBins.map(bin => ({ x: bin.Hz, y: bin.Magnitude })),
    y: data.y.FrequencyBins.map(bin => ({ x: bin.Hz, y: bin.Magnitude })),
    z: data.z.FrequencyBins.map(bin => ({ x: bin.Hz, y: bin.Magnitude }))
  };

  // Prepare data for RMS/Peak/STE comparison
  const axisComparisonData = [
    { axis: 'X', RMS: data.x.RMS, Peak: data.x.Peak, STE: data.x.STE },
    { axis: 'Y', RMS: data.y.RMS, Peak: data.y.Peak, STE: data.y.STE },
    { axis: 'Z', RMS: data.z.RMS, Peak: data.z.Peak, STE: data.z.STE }
  ];

  return (
    <div className="space-y-6">
      {/* Environmental Data */}
      <EnvironmentalCard data={data.bmp280} />

      {/* Vibration Analysis - Frequency Response */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Vibration Frequency Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-48">
              <RealTimeLineGraph 
                data={frequencyData.x} 
                color="#ef4444"
                title="X-Axis"
                xLabel="Frequency (Hz)"
                yLabel="Magnitude"
              />
            </div>
            <div className="h-48">
              <RealTimeLineGraph 
                data={frequencyData.y} 
                color="#22c55e"
                title="Y-Axis"
                xLabel="Frequency (Hz)"
                yLabel="Magnitude"
              />
            </div>
            <div className="h-48">
              <RealTimeLineGraph 
                data={frequencyData.z} 
                color="#3b82f6"
                title="Z-Axis"
                xLabel="Frequency (Hz)"
                yLabel="Magnitude"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vibration Metrics Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Vibration Metrics Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <RealTimeBarGraph 
              data={axisComparisonData}
              color="#8b5cf6"
              title="RMS Values by Axis"
            />
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      <VibrationMetricsCard x={data.x} y={data.y} z={data.z} />
    </div>
  );
};

export default IoTDataDisplay;
