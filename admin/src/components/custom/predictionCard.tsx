import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  HardHat, 
  Gauge, 
  Clock, 
  ArrowRight, 
  AlertCircle,
  Wrench
} from "lucide-react";

interface PredictionCardProps {
  prediction: {
    title: string;
    type: 'Breakdown' | 'Delay' | 'Safety';
    severity: 'Critical' | 'Moderate';
    probability: number;
    recommendation: string;
    timeframe: string;
  };
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const getSeverityColor = (severity: string) => {
    return severity === 'Critical' ? 'text-red-500' : 'text-yellow-500';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Breakdown':
        return <Wrench className="h-5 w-5" />;
      case 'Delay':
        return <Clock className="h-5 w-5" />;
      case 'Safety':
        return <HardHat className="h-5 w-5" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  return (
    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="flex items-center space-x-2">
          <AlertTriangle className={`h-6 w-6 ${getSeverityColor(prediction.severity)}`} />
          <h3 className="font-bold text-lg">Priority Alert</h3>
        </div>
        <Badge 
          variant="outline" 
          className={`${getSeverityColor(prediction.severity)} border-current`}
        >
          {prediction.severity}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-xl font-semibold leading-tight">{prediction.title}</h4>
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center space-x-1">
              {getTypeIcon(prediction.type)}
              <span>{prediction.type}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Gauge className="h-5 w-5" />
              <span>{prediction.probability}% Probability</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 bg-gray-800/50 p-3 rounded-lg">
          <div className="flex items-start space-x-2">
            <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
            <p className="text-sm text-gray-300">
              Timeframe: <span className="text-white">{prediction.timeframe}</span>
            </p>
          </div>
          <div className="border-t border-gray-700 pt-2">
            <p className="text-sm font-medium">Recommended Action:</p>
            <p className="text-sm text-gray-300">{prediction.recommendation}</p>
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Take Action <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PredictionCard;