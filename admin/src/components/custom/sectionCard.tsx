import React from 'react'
import { Map } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StylizedIndustrialNightScene from "@/assets/img/StylizedIndustrialNightScene.jpeg"

interface SectionCardProps {
  section: {
    name: string;
    color: string;
  }
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{section.name}</span>
          <Map size={20} style={{ color: section.color }} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <image
            src={StylizedIndustrialNightScene}
            alt={`${section.name} section`}
            width={300}
            height={150}
            className="rounded-md object-cover w-full"
          />
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Type: Section</p>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">Color:</span>
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: section.color }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SectionCard

