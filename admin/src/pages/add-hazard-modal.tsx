import { useState, useEffect, FormEvent } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, PlusIcon, Trash2 } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { fetchSections } from "@/utils/fetchSections"
import { toast } from "sonner"
import { fetchHazardActivity } from "@/utils/fetchHazardActivity"
import { fetchHazardHazard } from "@/utils/fetchHazardHazard"
import { fetchHazardMechanism } from "@/utils/fetchHazardMechanism"
import { fetchHzardExposedGroup } from "@/utils/fetchHazardExposedGroup"
import { addhazardActivity } from "@/utils/addHazardActivity"
import { addHazardHazard } from "@/utils/addHazardHazard"
import { addHazardMechanism } from "@/utils/addHazardMechanism"
import { addHazardExposedGroup } from "@/utils/addHazardExposedGroup"

interface Section {
  id: number;
  name: string;
}

interface ControlRow {
  type: string;
  details: string;
  person: string;
  dueDate: string;
  completed: boolean;
}

interface RiskAssessmentData {
  activity: string;
  sectionId: number;
  hazard: string;
  mechanism: string;
  exposedGroup: string;
  description: string;
  consequence: number;
  exposure: number;
  probability: number;
  riskValue?: number;
  riskControlPlan?: ControlRow[];
}

const NewHazardTypeModal = ({ title, placeholder, value, onInputChange, onSaveClicked }) => {
  return (
    <div>
      <div className="space-y-2">
        <Label>Add new {title}</Label>
        <Input
          placeholder={placeholder}
          value={value.name}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
      <Button onClick={onSaveClicked} className="m-2">Create</Button>
    </div>
  )
}

export function AddHazardModal({ currentMatrix }: { currentMatrix: any }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [controlRows, setControlRows] = useState<ControlRow[]>([
    { type: '', details: '', person: '', dueDate: '', completed: false }
  ]);
  const consequence = currentMatrix.RiskValues.filter(rv => rv.type == 'Consequence').map(rv => rv.scale)
  const exposure = currentMatrix.RiskValues.filter(rv => rv.type == 'Exposure').map(rv => rv.scale)
  const probability = currentMatrix.RiskValues.filter(rv => rv.type == 'Probability').map(rv => rv.scale)

  const [activity, setActivity] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: ''
  })
  const [hazard, setHazard] = useState([]);
  const [newHazard, setNewHazard] = useState({
    name: ''
  })
  const [mechanism, setMechanism] = useState([]);
  const [newMechanism, setNewMechanism] = useState({
    name: ''
  })
  const [exposedGroup, setExposedGroup] = useState([]);
  const [newExposedGroup, setNewExposedGroup] = useState({
    name: ''
  })

  useEffect(() => {
    const getAndSethazardActivity = async () => {
      const res = await fetchHazardActivity();
      if (res) {
        setActivity(res);
      }
    }
    const getAndSethazardHazard = async () => {
      const res = await fetchHazardHazard();
      if (res) {
        setHazard(res);
      }
    }
    const getAndSethazardMechanism = async () => {
      const res = await fetchHazardMechanism();
      if (res) {
        setMechanism(res);
      }
    }
    const getAndSethazardExposedGroup = async () => {
      const res = await fetchHzardExposedGroup();
      if (res) {
        setExposedGroup(res);
      }
    }

    getAndSethazardActivity()
      .then(() => getAndSethazardHazard())
      .then(() => getAndSethazardMechanism())
      .then(() => getAndSethazardExposedGroup())
  }, [])

  const [formData, setFormData] = useState<RiskAssessmentData>({
    activity: '',
    sectionId: 0,
    hazard: '',
    mechanism: '',
    exposedGroup: '',
    description: '',
    consequence: 1,
    exposure: 1,
    probability: 1,
  });

  const [riskValue, setRiskValue] = useState<number>(0);

  useEffect(() => {
    const fetchAndSetSections = async () => {
      try {
        const data = await fetchSections();
        if (data) {
          setSections(data);
        } else {
          toast.error("No sections found")
        }
      } catch (error) {
        toast.error("Failed to fetch sections")
      }
    }
    fetchAndSetSections();
  }, []);

  useEffect(() => {
    const calculatedRiskValue = formData.consequence * formData.exposure * formData.probability;
    setRiskValue(calculatedRiskValue);
    setFormData(prev => ({ ...prev, riskValue: calculatedRiskValue }));
  }, [formData.consequence, formData.exposure, formData.probability]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: keyof RiskAssessmentData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: field === 'sectionId' ? Number(value) : value }));
  };

  const addControlRow = () => {
    setControlRows([...controlRows, {
      type: '',
      details: '',
      person: '',
      dueDate: '',
      completed: false
    }]);
  };

  const removeControlRow = (index: number) => {
    const newRows = [...controlRows];
    newRows.splice(index, 1);
    setControlRows(newRows);
  };

  const updateControlRow = (index: number, field: keyof ControlRow, value: string | boolean) => {
    const newRows = [...controlRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setControlRows(newRows);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const completeData = {
        ...formData,
        Mechanism: formData.mechanism,
        riskContolPlan: controlRows
      };

      const response = await axios.post('/api/data/smp/ra', completeData);

      toast.success("Risk Assessment Created Successfully");

      resetForm();
    } catch (error) {
      toast.error("Failed to create Risk Assessment");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      activity: '',
      sectionId: 0,
      hazard: '',
      mechanism: '',
      exposedGroup: '',
      description: '',
      consequence: 1,
      exposure: 1,
      probability: 1,
    });
    setControlRows([{ type: '', details: '', person: '', dueDate: '', completed: false }]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">
          Add Hazard
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Risk Assessment</DialogTitle>
          <DialogDescription>Add a new hazard assessment record</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="activity">Main Activity</Label>
              <div className="flex space-x-1">
                <Select
                  value={formData.activity}
                  onValueChange={(e) => {
                    setFormData(prev => {
                      return {
                        ...prev,
                        activity: activity.find(a => a.id == e).id
                      }
                    })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Acitivity" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      activity.map(activity => (
                        <SelectItem key={activity.id} value={activity.id}>{activity.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <Dialog>
                  <DialogTrigger><Button variant='ghost' className="rounded-full w-10 h-10"><PlusIcon /></Button></DialogTrigger>
                  <DialogContent>
                    <NewHazardTypeModal
                      title={'Activity'}
                      placeholder={'Enter new Activity'}
                      onInputChange={(value) => setNewActivity(prev => ({
                        name: value
                      }))}
                      onSaveClicked={async () => {
                        console.log(newActivity)
                        const res = await addhazardActivity(newActivity)
                        if (res) {
                          toast.success("Activity added successfully");
                          setActivity(prev => [...prev, res])
                        }
                      }}
                      value={newActivity}
                    />
                  </DialogContent>
                </Dialog>

              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="section">Section</Label>
              <Select
                value={formData.sectionId.toString()}
                onValueChange={handleSelectChange('sectionId')}
              >
                <SelectTrigger id="section">
                  <SelectValue placeholder="Select Section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map(section => (
                    <SelectItem key={section.id} value={section.id.toString()}>
                      {section.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hazard">Hazard</Label>
              <div className="flex space-x-1">
                <Select
                  value={formData.hazard}
                  onValueChange={(e) => {
                    setFormData(prev => {
                      return {
                        ...prev,
                        hazard: hazard.find(a => a.id == e).id
                      }
                    })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Hazard" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      hazard.map(hazard => (
                        <SelectItem key={hazard.id} value={hazard.id}>{hazard.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <Dialog>
                  <DialogTrigger><Button variant='ghost' className="rounded-full w-10 h-10"><PlusIcon /></Button></DialogTrigger>
                  <DialogContent>
                    <NewHazardTypeModal
                      title={'Hazard'}
                      placeholder={'Enter new Hzazrd'}
                      onInputChange={(value) => setNewHazard(prev => ({
                        name: value
                      }))}
                      onSaveClicked={async () => {
                        const res = await addHazardHazard(newHazard)
                        if (res) {
                          toast.success("Hazard added successfully");
                          setHazard(prev => [...prev, res])
                        }
                      }}
                      value={newHazard}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mechanism">Mechanism</Label>
              <div className="flex space-x-1">
                <Select
                  value={formData.mechanism}
                  onValueChange={(e) => {
                    setFormData(prev => {
                      return {
                        ...prev,
                        mechanism: activity.find(a => a.id == e).id
                      }
                    })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mechanism" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      mechanism.map(mechanism => (
                        <SelectItem key={mechanism.id} value={mechanism.id}>{mechanism.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <Dialog>
                  <DialogTrigger><Button variant='ghost' className="rounded-full w-10 h-10"><PlusIcon /></Button></DialogTrigger>
                  <DialogContent>
                    <NewHazardTypeModal
                      title={'Mechanism'}
                      placeholder={'Enter new Mechanism'}
                      onInputChange={(value) => setNewMechanism(prev => ({
                        name: value
                      }))}
                      onSaveClicked={async () => {
                        const res = await addHazardMechanism(newMechanism)
                        if (res) {
                          toast.success("Mechanism added successfully");
                          setMechanism(prev => [...prev, res])
                        }
                      }}
                      value={newMechanism}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="exposedGroup">Exposed Group</Label>
              <div className="flex space-x-1">
                <Select
                  value={formData.exposedGroup}
                  onValueChange={(e) => {
                    setFormData(prev => {
                      return {
                        ...prev,
                        exposedGroup: activity.find(a => a.id == e).id
                      }
                    })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Exposed Group" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      exposedGroup.map(exp => (
                        <SelectItem key={exp.id} value={exp.id}>{exp.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <Dialog>
                  <DialogTrigger><Button variant='ghost' className="rounded-full w-10 h-10"><PlusIcon /></Button></DialogTrigger>
                  <DialogContent>
                    <NewHazardTypeModal
                      title={'Exposed Group'}
                      placeholder={'Enter new Exposed Group'}
                      onInputChange={(value) => setNewExposedGroup(prev => ({
                        name: value
                      }))}
                      onSaveClicked={async () => {
                        const res = await addHazardExposedGroup(newExposedGroup)
                        if (res) {
                          toast.success("Activity added Exposed Group");
                          setExposedGroup(prev => [...prev, res])
                        }
                      }}
                      value={exposedGroup}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Brief Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the hazard and potential risks"
              className="min-h-[100px]"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="consequence">Consequences</Label>
              <Select
                value={formData.consequence.toString()}
                onValueChange={(value) => setFormData(prev => ({ ...prev, consequence: Number(value) }))}
              >
                <SelectTrigger id="consequence">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {consequence.map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="exposure">Exposure</Label>
              <Select
                value={formData.exposure.toString()}
                onValueChange={(value) => setFormData(prev => ({ ...prev, exposure: Number(value) }))}
              >
                <SelectTrigger id="exposure">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {exposure.map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="probability">Probability</Label>
              <Select
                value={formData.probability.toString()}
                onValueChange={(value) => setFormData(prev => ({ ...prev, probability: Number(value) }))}
              >
                <SelectTrigger id="probability">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {probability.map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="riskLevel">Risk Level</Label>
              <Input
                id="riskLevel"
                value={riskValue}
                readOnly
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Risk Control Plan</Label>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Control Type</TableHead>
                  <TableHead>Control Details</TableHead>
                  <TableHead>Person</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Completed</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {controlRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Select
                        value={row.type}
                        onValueChange={(value) => updateControlRow(index, 'type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ppe">Personal Protective Equipment</SelectItem>
                          <SelectItem value="training">Training</SelectItem>
                          <SelectItem value="engineering">Engineering Controls</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Enter details"
                        value={row.details}
                        onChange={(e) => updateControlRow(index, 'details', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={row.person}
                        onValueChange={(value) => updateControlRow(index, 'person', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select person" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="supervisor">Supervisor</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="worker">Worker</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="date"
                        value={row.dueDate}
                        onChange={(e) => updateControlRow(index, 'dueDate', e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        checked={row.completed}
                        onCheckedChange={(checked) => updateControlRow(index, 'completed', checked)}
                      />
                    </TableCell>
                    <TableCell>
                      {controlRows.length > 1 && (
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeControlRow(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" onClick={addControlRow} className="mt-2">
              <Plus className="mr-2 h-4 w-4" />
              Add Control Measure
            </Button>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
            <Button type="submit">Save Assessment</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddHazardModal;