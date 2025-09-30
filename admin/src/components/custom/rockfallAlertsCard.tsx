import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  AlertTriangle,
  Activity,
  Zap,
  TrendingUp,
  Clock,
  Play
} from "lucide-react";
import RockfallAlertDialog from "./rockfallAlertDialog";

interface RockfallAlert {
  id: number;
  timestamp: string;
  x_RMS: number;
  y_RMS: number;
  z_RMS: number;
  x_position_change: number;
  y_position_change: number;
  z_position_change: number;
  current_z_ste: number;
  current_z_freq10: number;
  rockfall_detected: boolean;
}

interface RockfallAlertsCardProps {
  refreshInterval?: number; // in milliseconds, default 5000ms (5 seconds)
}

export default function RockfallAlertsCard({ refreshInterval = 5000 }: RockfallAlertsCardProps) {
  const [alerts, setAlerts] = useState<RockfallAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchRockfallAlerts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/payload/rockfall-alerts?limit=20');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setAlerts(data.data || []);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error('Error fetching rockfall alerts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch alerts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchRockfallAlerts();

    // Set up polling
    const interval = setInterval(fetchRockfallAlerts, refreshInterval);

    return () => {
      clearInterval(interval);
    };
  }, [refreshInterval]);

  const getSeverityLevel = (alert: RockfallAlert): 'low' | 'medium' | 'high' | 'critical' => {
    const totalRMS = alert.x_RMS + alert.y_RMS + alert.z_RMS;
    const totalPositionChange = Math.abs(alert.x_position_change) + Math.abs(alert.y_position_change) + Math.abs(alert.z_position_change);
    
    if (totalRMS > 5 || totalPositionChange > 0.5) return 'critical';
    if (totalRMS > 3 || totalPositionChange > 0.3) return 'high';
    if (totalRMS > 2 || totalPositionChange > 0.2) return 'medium';
    return 'low';
  };

  const getSeverityColor = (severity: string) => {
    const colorMap = {
      'critical': 'bg-red-600 text-white',
      'high': 'bg-orange-500 text-white',
      'medium': 'bg-yellow-500 text-black',
      'low': 'bg-green-500 text-white'
    };
    return colorMap[severity as keyof typeof colorMap] || 'bg-gray-500 text-white';
  };

  const getSeverityIcon = (severity: string) => {
    const iconProps = { size: 16 };
    const iconMap = {
      'critical': <AlertCircle {...iconProps} className="text-red-600" />,
      'high': <AlertTriangle {...iconProps} className="text-orange-500" />,
      'medium': <AlertTriangle {...iconProps} className="text-yellow-500" />,
      'low': <Info {...iconProps} className="text-green-500" />
    };
    return iconMap[severity as keyof typeof iconMap] || <Info {...iconProps} className="text-gray-500" />;
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  if (loading && alerts.length === 0) {
    return (
      <div className="bg-background shadow-none rounded-lg border-none">
        <div className="p-4 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-gray-600">Loading rockfall alerts...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background shadow-none rounded-lg border-none">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-500" />
            Rockfall Alerts
          </h2>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
        </div>
        {error && (
          <div className="mt-2 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
            Error: {error}
          </div>
        )}
      </div>
      
      <ScrollArea className="h-[400px]">
        {alerts.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <p className="text-lg font-medium">No Rockfall Alerts</p>
            <p className="text-sm">All systems are operating normally</p>
          </div>
        ) : (
          <div className="space-y-2 p-2">
            {alerts.map((alert) => {
              const severity = getSeverityLevel(alert);
              return (
                <Card key={alert.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getSeverityIcon(severity)}
                        <div>
                          <h3 className="font-medium text-red-500">
                            Rockfall Detected
                          </h3>
                          <p className="text-sm text-white font-semibold">
                            {formatTimestamp(alert.timestamp)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={cn("text-xs font-medium", getSeverityColor(severity))}>
                          {severity.toUpperCase()}
                        </Badge>
                        <RockfallAlertDialog alert={alert}>
                          <Button size="sm" variant="outline" className="flex items-center gap-1">
                            <Play className="h-3 w-3" />
                            Action
                          </Button>
                        </RockfallAlertDialog>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-500" />
                          <span className="text-white">RMS Values:</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          <div className="flex justify-between">
                            <span>X:</span>
                            <span className="font-mono">{alert.x_RMS.toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Y:</span>
                            <span className="font-mono">{alert.y_RMS.toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Z:</span>
                            <span className="font-mono">{alert.z_RMS.toFixed(3)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-orange-500" />
                          <span className="text-white">Position Changes:</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          <div className="flex justify-between">
                            <span>X:</span>
                            <span className="font-mono">{alert.x_position_change.toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Y:</span>
                            <span className="font-mono">{alert.y_position_change.toFixed(3)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Z:</span>
                            <span className="font-mono">{alert.z_position_change.toFixed(3)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white">Z STE:</span>
                          <span className="font-mono">{alert.current_z_ste.toFixed(3)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white">Z Freq10:</span>
                          <span className="font-mono">{alert.current_z_freq10.toFixed(3)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
