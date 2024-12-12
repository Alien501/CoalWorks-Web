import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Thermometer,
  Gauge,
  MapPin,
  Wind,
  AlertTriangle,
  ArrowRight,
  CloudRain,
  Waves
} from "lucide-react";

interface SensorData {
  Node: number;
  latitude: number;
  longitude: number;
  accelX: number;
  accelY: number;
  accelZ: number;
  temperature: number;
  pressure: number;
  altitude: number;
  methanePPM: number;
  carbonMonoxidePPM: number;
  alert: string;
}

const mockData: SensorData = {
  Node: 1,
  latitude: 13.108029981761439,
  longitude: 74.78920883115683,
  accelX: -0.24024584079637626,
  accelY: 0.6545699565123465,
  accelZ: 0.9973476786460868,
  temperature: 27.962769089562133,
  pressure: 1007.3471602216696,
  altitude: 44.39806418463238,
  methanePPM: -559,
  carbonMonoxidePPM: -510,
  alert: "no"
};

const PredictionCard = ({ prediction }: { prediction: SensorData }) => {
  const getAlertStatus = (alert: string) => {
    return alert.toLowerCase() === "yes" ? "Critical" : "Normal";
  };

  const getAlertColor = (alert: string) => {
    return alert.toLowerCase() === "yes" ? "text-red-500" : "text-green-500";
  };

  return (
    <div className="bg-gray-100 p-8 dark:bg-gray-900">
      <Card className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <AlertTriangle className={`h-6 w-6 ${getAlertColor(prediction.alert)}`} />
            <div>
              <h3 className="font-bold text-lg dark:text-white">Sensor Node {prediction.Node}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Real-time monitoring</p>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`${getAlertColor(prediction.alert)} border-current`}
          >
            {getAlertStatus(prediction.alert)}
          </Badge>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm dark:text-white">
                    {prediction.latitude.toFixed(6)}, {prediction.longitude.toFixed(6)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Thermometer className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Temperature</p>
                  <p className="text-sm dark:text-white">{prediction.temperature.toFixed(2)}°C</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <CloudRain className="h-5 w-5 text-cyan-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pressure</p>
                  <p className="text-sm dark:text-white">{prediction.pressure.toFixed(2)} hPa</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Waves className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Acceleration</p>
                  <p className="text-sm dark:text-white">
                    X: {prediction.accelX.toFixed(2)}, Y: {prediction.accelY.toFixed(2)}, Z: {prediction.accelZ.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Wind className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Gas Levels</p>
                  <p className="text-sm dark:text-white">
                    CH₄: {prediction.methanePPM} ppm
                    <br />
                    CO: {prediction.carbonMonoxidePPM} ppm
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Gauge className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Altitude</p>
                  <p className="text-sm dark:text-white">{prediction.altitude.toFixed(2)}m</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionCard