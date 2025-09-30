import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ScrollArea } from '../ui/scroll-area';
import { toast } from 'sonner';
import { 
  AlertTriangle, 
  Activity, 
  Zap, 
  TrendingUp, 
  Clock, 
  Mail, 
  Play,
  CheckCircle2,
  Users
} from "lucide-react";

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

interface ActionPlan {
  id: number;
  name: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
}

interface RockfallAlertDialogProps {
  alert: RockfallAlert;
  children: React.ReactNode;
}

export default function RockfallAlertDialog({ alert, children }: RockfallAlertDialogProps) {
  const [actionPlans, setActionPlans] = useState<ActionPlan[]>([]);
  const [selectedActionPlan, setSelectedActionPlan] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTriggering, setIsTriggering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchActionPlans();
    }
  }, [isOpen]);

  const fetchActionPlans = async () => {
    setIsLoading(true);
    try {
      console.log('Fetching action plans...');
      const response = await fetch('http://localhost:3000/api/v1/payload/action-plans');
      const data = await response.json();
      
      console.log('Action plans response:', data);
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setActionPlans(data.data || []);
      console.log('Action plans set:', data.data);
    } catch (error) {
      console.error('Error fetching action plans:', error);
      toast.error('Failed to fetch action plans');
    } finally {
      setIsLoading(false);
    }
  };

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

  const getPriorityColor = (priority: string) => {
    const colorMap = {
      'critical': 'bg-red-600',
      'high': 'bg-orange-500',
      'medium': 'bg-yellow-500',
      'low': 'bg-green-500'
    };
    return colorMap[priority as keyof typeof colorMap] || 'bg-gray-500';
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleTriggerActionPlan = async () => {
    if (!selectedActionPlan) {
      toast.error('Please select an action plan');
      return;
    }

    setIsTriggering(true);
    try {
      const response = await fetch('http://localhost:3000/api/v1/payload/trigger-action-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          alertId: alert.id,
          actionPlanId: parseInt(selectedActionPlan)
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success(`Action plan triggered! ${data.data.emailsSent} emails sent to assigned users.`);
      setIsOpen(false);
      setSelectedActionPlan('');
    } catch (error) {
      console.error('Error triggering action plan:', error);
      toast.error('Failed to trigger action plan');
    } finally {
      setIsTriggering(false);
    }
  };

  const severity = getSeverityLevel(alert);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Rockfall Alert Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Alert Details */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Alert Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Detected at: {formatTimestamp(alert.timestamp)}
                  </p>
                </div>
                <Badge className={`${getSeverityColor(severity)} text-xs font-medium`}>
                  {severity.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      RMS Values
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">X Axis:</span>
                        <span className="font-mono text-sm">{alert.x_RMS.toFixed(3)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Y Axis:</span>
                        <span className="font-mono text-sm">{alert.y_RMS.toFixed(3)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Z Axis:</span>
                        <span className="font-mono text-sm">{alert.z_RMS.toFixed(3)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-orange-500" />
                      Position Changes
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">X Change:</span>
                        <span className="font-mono text-sm">{alert.x_position_change.toFixed(3)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Y Change:</span>
                        <span className="font-mono text-sm">{alert.y_position_change.toFixed(3)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Z Change:</span>
                        <span className="font-mono text-sm">{alert.z_position_change.toFixed(3)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Z STE:</span>
                    <span className="font-mono text-sm">{alert.current_z_ste.toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Z Freq10:</span>
                    <span className="font-mono text-sm">{alert.current_z_freq10.toFixed(3)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Plan Selection */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-blue-500" />
                  <h3 className="text-lg font-semibold text-foreground">Trigger Action Plan</h3>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Select an action plan to notify assigned personnel and execute emergency procedures.
                </p>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Select Action Plan</label>
                  <Select value={selectedActionPlan} onValueChange={setSelectedActionPlan}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an action plan..." />
                    </SelectTrigger>
                    <SelectContent>
                      {isLoading ? (
                        <div className="p-2 text-center text-sm text-muted-foreground">
                          Loading action plans...
                        </div>
                      ) : actionPlans.length === 0 ? (
                        <div className="p-2 text-center text-sm text-muted-foreground">
                          No active action plans available
                        </div>
                      ) : (
                        actionPlans.map((plan) => (
                          <SelectItem key={plan.id} value={plan.id.toString()}>
                            <div className="flex items-center gap-2">
                              <span>{plan.name}</span>
                              <Badge 
                                className={`${getPriorityColor(plan.priority)} text-white text-xs`}
                              >
                                {plan.priority.toUpperCase()}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {selectedActionPlan && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    {(() => {
                      const selectedPlan = actionPlans.find(plan => plan.id.toString() === selectedActionPlan);
                      return selectedPlan ? (
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">{selectedPlan.name}</h4>
                          <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
                          <div className="flex items-center gap-2">
                            <Badge className={`${getPriorityColor(selectedPlan.priority)} text-white text-xs`}>
                              {selectedPlan.priority.toUpperCase()} PRIORITY
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Created: {new Date(selectedPlan.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsOpen(false)}
                    disabled={isTriggering}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleTriggerActionPlan}
                    disabled={!selectedActionPlan || isTriggering || actionPlans.length === 0}
                    className="flex items-center gap-2"
                  >
                    {isTriggering ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Triggering...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        Trigger Action Plan
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
