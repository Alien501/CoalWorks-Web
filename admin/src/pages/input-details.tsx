import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const InputDetails = ({ title, count, onNext, onPrev, onRiskValueChanged, data, onSaveClicked, isEnd = false }) => {
  const [details, setDetails] = useState(Array(count).fill({ name: "", scale: "" }));

  const handleChange = (index, field, value) => {
    const newDetails = [...details];
    newDetails[index] = { ...newDetails[index], [field]: value };
    setDetails(newDetails);
  };

  const handleSubmit = () => {
    if (details.some(detail => !detail.name || !detail.scale)) {
      toast.error("Please fill in all fields");
      return;
    }
    onNext(details);
  };
  useEffect(() => {
    if (data.length != 0) {
      setDetails(data);
    }
  }, []);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{title} Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor={`name-${index}`}>Name</Label>
              <Input
                id={`name-${index}`}
                value={detail.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder={`${title} ${index + 1}`}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor={`scale-${index}`}>Scale</Label>
              <Input
                id={`scale-${index}`}
                type="number"
                value={detail.scale}
                onChange={(e) => handleChange(index, "scale", e.target.value)}
                placeholder="Scale"
              />
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <Button onClick={onPrev} variant="outline">
            Previous
          </Button>
          {
            isEnd ?
              <Button onClick={() => onSaveClicked(details)}>
                Save
              </Button>
              :
              <Button onClick={handleSubmit}>
                Next
              </Button>
          }
        </div>
      </CardContent>
    </Card>
  );
};