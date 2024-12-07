import React from 'react';
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  AlertTriangle 
} from "lucide-react";

interface AlertEntry {
  title: string;
  date: Date;
  type: 'warning' | 'danger' | 'success' | 'info';
}

export default function SecurityAlertsDashboard() {
  // Sample alerts with enhanced data
  const alerts: AlertEntry[] = [
    {
      title: "Security Warning: Unusual Login Attempt",
      date: new Date('2023-12-11'),
      type: 'warning'
    },
    {
      title: "Potential Breach Detected in Network",
      date: new Date('2023-12-12'),
      type: 'danger'
    },
    {
      title: "Firewall Configuration Resolved",
      date: new Date('2023-12-13'),
      type: 'success'
    },
    {
      title: "System Health Check Completed",
      date: new Date('2023-12-14'),
      type: 'info'
    },
    {
      title: "Network Monitoring Status Update",
      date: new Date('2023-12-15'),
      type: 'info'
    }
  ];

  // Function to get alert icon based on type
  const getAlertIcon = (type: AlertEntry['type']) => {
    const iconProps = { size: 20 };
    const iconMap = {
      'warning': <AlertTriangle {...iconProps} className="text-amber-600" />,
      'danger': <AlertCircle {...iconProps} className="text-red-600" />,
      'success': <CheckCircle {...iconProps} className="text-green-600" />,
      'info': <Info {...iconProps} className="text-blue-600" />
    };
    return iconMap[type];
  };

  // Function to get text color based on alert type
  const getTypeColor = (type: AlertEntry['type']) => {
    const colorMap = {
      'warning': 'text-amber-600',
      'danger': 'text-red-600',
      'success': 'text-green-600',
      'info': 'text-blue-600'
    };
    return colorMap[type];
  };

  return (
    <div className="bg-background shadow-none rounded-lg border-none">
      {/* <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-slate-800">Security Alerts Dashboard</h2>
      </div> */}
      <ScrollArea className="h-full">
        <table className="w-full">
          <thead className="sticky top-0 bg-background-50 z-10">
            <tr>
              <th className="p-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Alert</th>
              <th className="p-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
              <th className="p-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr 
                key={index} 
                className="hover:bg-black-50 transition-colors duration-200 ease-in-out border-b last:border-b-0"
              >
                <td className="p-3 text-sm flex items-center gap-3">
                  {getAlertIcon(alert.type)}
                  <span className="text-slate-50">{alert.title}</span>
                </td>
                <td className="p-3 text-sm text-gray-600">
                  {alert.date.toLocaleDateString('en-US', {
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric'
                  })}
                </td>
                <td className="p-3 text-sm">
                  <span className={cn(
                    "capitalize font-medium",
                    getTypeColor(alert.type)
                  )}>
                    {alert.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
}