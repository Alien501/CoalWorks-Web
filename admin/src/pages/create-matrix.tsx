import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CreateMatrix = ({ onChange, dimensions, onCreateButtonClicked, onBackButtonClicked }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Configure Risk Matrix</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Enter Name</Label>
          <Input
            placeholder="Name"
            name="name"
            id="name"
            type="text"
            onChange={onChange}
            value={dimensions.name || ''}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="col">Enter No of Columns (Consequences)</Label>
          <Input
            placeholder="Columns"
            name="col"
            id="col"
            type="number"
            onChange={onChange}
            value={dimensions.col || ''}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="row">Enter No of Rows (Probability/Exposure)</Label>
          <Input
            placeholder="Rows"
            name="row"
            id="row"
            type="number"
            onChange={onChange}
            value={dimensions.row || ''}
          />
        </div>
        <div className="flex items-center justify-between p-1">
          <Button variant={'secondary'} onClick={onBackButtonClicked}>
            Back
          </Button>
          <Button onClick={onCreateButtonClicked} className="">
            Create Matrix
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
