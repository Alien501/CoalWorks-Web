import React from 'react';
import { Activity, Battery, Signal } from 'lucide-react';

interface AssetCardProps {
  asset: {
    name: string;
    coordinates: [number, number];
  }
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  return (
    <div className="bg-white rounded-lg p-4 min-w-[280px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{asset.name}</h3>
        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
          {JSON.stringify(asset)}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Activity size={20} className="mr-2" />
          <span>Status: Operational</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Battery size={20} className="mr-2" />
          <span>Battery: 85%</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Signal size={20} className="mr-2" />
          <span>Signal Strength: Strong</span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Last Updated: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default AssetCard;

