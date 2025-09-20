import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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


interface RealTimeLineGraphProps {
  data: { x: number; y: number }[];
  color: string;
  title: string;
  xLabel: string;
  yLabel: string;
}

interface RealTimeBarGraphProps {
  data: { axis: string; RMS: number; Peak: number; STE: number }[];
  color: string;
  title: string;
}

// Real-time Line Graph Component
export const RealTimeLineGraph: React.FC<RealTimeLineGraphProps> = ({ 
  data, 
  color, 
  title, 
  xLabel, 
  yLabel 
}) => {
  const [animatedData, setAnimatedData] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Animate data points appearing one by one
      let index = 0;
      const interval = setInterval(() => {
        if (index < data.length) {
          setAnimatedData(prev => [...prev, data[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div className="h-full w-full">
      <h4 className="text-sm font-medium text-center mb-2">{title}</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={animatedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="x" 
            stroke="#9CA3AF"
            fontSize={12}
            label={{ value: xLabel, position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            stroke="#9CA3AF"
            fontSize={12}
            label={{ value: yLabel, angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '6px',
              color: '#F9FAFB'
            }}
            formatter={(value: any) => [value.toFixed(4), yLabel]}
            labelFormatter={(label) => `${xLabel}: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="y" 
            stroke={color} 
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
            animationDuration={300}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Real-time Bar Graph Component
export const RealTimeBarGraph: React.FC<RealTimeBarGraphProps> = ({ 
  data, 
  color, 
  title 
}) => {
  const [animatedData, setAnimatedData] = useState<{ axis: string; RMS: number; Peak: number; STE: number }[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Animate bars appearing one by one
      let index = 0;
      const interval = setInterval(() => {
        if (index < data.length) {
          setAnimatedData(prev => [...prev, data[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [data]);

  return (
    <div className="h-full w-full">
      <h4 className="text-sm font-medium text-center mb-2">{title}</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={animatedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="axis" 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <YAxis 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '6px',
              color: '#F9FAFB'
            }}
          />
          <Bar 
            dataKey="RMS" 
            fill={color}
            radius={[4, 4, 0, 0]}
            animationDuration={300}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Environmental Data Card with Animated Values
export const EnvironmentalCard: React.FC<{ data: BMP280Data }> = ({ data }) => {
  const [animatedData, setAnimatedData] = useState({
    temperature: 0,
    pressure: 0,
    altitude: 0
  });

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (end - start) * progress;
        callback(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    animateValue(animatedData.temperature, data.Temperature, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, temperature: value }));
    });
    animateValue(animatedData.pressure, data.Pressure, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, pressure: value }));
    });
    animateValue(animatedData.altitude, data.Altitude, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, altitude: value }));
    });
  }, [data]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Environmental Sensors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {animatedData.temperature.toFixed(1)}°C
            </div>
            <div className="text-sm text-gray-500">Temperature</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {animatedData.pressure.toFixed(1)} hPa
            </div>
            <div className="text-sm text-gray-500">Pressure</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {animatedData.altitude.toFixed(1)} m
            </div>
            <div className="text-sm text-gray-500">Altitude</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Vibration Metrics Card with Animated Values
export const VibrationMetricsCard: React.FC<{ 
  x: AxisData; 
  y: AxisData; 
  z: AxisData; 
}> = ({ x, y, z }) => {
  const [animatedData, setAnimatedData] = useState({
    x: { RMS: 0, Peak: 0, STE: 0 },
    y: { RMS: 0, Peak: 0, STE: 0 },
    z: { RMS: 0, Peak: 0, STE: 0 }
  });

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (end - start) * progress;
        callback(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    // Animate X axis
    animateValue(animatedData.x.RMS, x.RMS, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, x: { ...prev.x, RMS: value } }));
    });
    animateValue(animatedData.x.Peak, x.Peak, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, x: { ...prev.x, Peak: value } }));
    });
    animateValue(animatedData.x.STE, x.STE, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, x: { ...prev.x, STE: value } }));
    });

    // Animate Y axis
    animateValue(animatedData.y.RMS, y.RMS, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, y: { ...prev.y, RMS: value } }));
    });
    animateValue(animatedData.y.Peak, y.Peak, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, y: { ...prev.y, Peak: value } }));
    });
    animateValue(animatedData.y.STE, y.STE, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, y: { ...prev.y, STE: value } }));
    });

    // Animate Z axis
    animateValue(animatedData.z.RMS, z.RMS, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, z: { ...prev.z, RMS: value } }));
    });
    animateValue(animatedData.z.Peak, z.Peak, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, z: { ...prev.z, Peak: value } }));
    });
    animateValue(animatedData.z.STE, z.STE, 1000, (value) => {
      setAnimatedData(prev => ({ ...prev, z: { ...prev.z, STE: value } }));
    });
  }, [x, y, z]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          Detailed Vibration Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries({ x: animatedData.x, y: animatedData.y, z: animatedData.z }).map(([axis, axisData]) => (
            <div key={axis} className="space-y-3">
              <h4 className="font-semibold text-lg uppercase text-center">{axis}-Axis</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">RMS:</span>
                  <span className="font-mono text-sm font-bold text-green-500">
                    {axisData.RMS.toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Peak:</span>
                  <span className="font-mono text-sm font-bold text-blue-500">
                    {axisData.Peak.toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">STE:</span>
                  <span className="font-mono text-sm font-bold text-purple-500">
                    {axisData.STE.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
