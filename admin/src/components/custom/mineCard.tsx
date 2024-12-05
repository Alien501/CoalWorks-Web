import React from 'react';
import { Mountain } from 'lucide-react';

interface MineCardProps {
  mine: {
    mineName: string;
    locationLatitude: number;
    locationLongitude: number;
  }
}

const MineCard: React.FC<MineCardProps> = ({ mine }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{mine.mineName}</h3>
        <Mountain size={20} className="text-gray-600" />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Latitude: {mine.locationLatitude.toFixed(6)}</p>
        <p className="text-sm text-gray-600">Longitude: {mine.locationLongitude.toFixed(6)}</p>
      </div>
    </div>
  );
}

export default MineCard;

