import React from 'react';
import { Map } from 'lucide-react';

interface SectionCardProps {
  section: {
    name: string;
    color: string;
  }
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
        <Map size={20} style={{ color: section.color }} />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Type: Section</p>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Color:</span>
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: section.color }}></div>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;

