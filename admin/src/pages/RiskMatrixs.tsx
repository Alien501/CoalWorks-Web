import { useEffect, useState } from "react";
import { CreateMatrix } from "./create-matrix";
import { InputDetails } from "./input-details";
import FinalMatrix from "./final-matrix";
import { AddHazardModal } from "./add-hazard-modal";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import axios from "axios";
import { fetchAllRiskMatrix } from "@/utils/fetchAllRiskMatrix";
import { fetchAllHazards } from "@/utils/fetchAllHazards";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom";


const RiskMatrix = () => {
  const [step, setStep] = useState(0);
  const [matrixData, setMatrixData] = useState({
    dimensions: { row: 0, col: 0 },
    consequences: [],
    probability: [],
    exposure: [],
  });
  const [riskMatrix, setRiskMatrix] = useState([]);
  const [hazards, setHazards] = useState([]);
  const [currentMatrix, setCurrentMatrix] = useState(null); // New state to store the selected matrix
  const navigate = useNavigate()

  const updateMatrixData = (key, value) => {
    console.log('Updated data', value);
    setMatrixData((prev) => ({ ...prev, [key]: value }));
  };

  const onRiskValueChanged = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSaveRiskMatrixClicked = async (data) => {
    console.log("Before sending", matrixData);
    const res = await axios.post('/api/data/smp', {
      ...matrixData,
      exposure: data
    });
    if (res.status === 200) {
      console.log(res.data);
      toast.success("Risk Matrix created successfully!");
      setMatrixData({
        dimensions: { row: 0, col: 0 },
        consequences: [],
        probability: [],
        exposure: [],
      });
      setStep(0);
    } else {
      toast.error('Something went wrong while creating a Risk Matrix');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        if (!currentMatrix) {
          return (
            <div className="w-full h-full grid grid-cols-2 gap-2">
              <div className="p-2">
                <div className="flex justify-between items-center h-16 p-1">
                  {
                    riskMatrix.length < 1 &&
                    <Button className="" onClick={nextStep}><PlusIcon />Create Risk Matrix</Button>
                  }
                </div>
              </div>
              {/* <div className="p-2">
                <div>
                  <div className="flex justify-between items-center h-16 p-1">
                    <p>Hazards</p>
                    <AddHazardModal />
                  </div>
                  <div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Activity</TableHead>
                          <TableHead>Hazard</TableHead>
                          <TableHead>Mechanism</TableHead>
                          <TableHead>Risk Value</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {
                          hazards.map(hazard => (
                            <TableRow key={hazard.id}>
                              <TableCell>{hazard.id}</TableCell>
                              <TableCell>{hazard.activity}</TableCell>
                              <TableCell>{hazard.hazard}</TableCell>
                              <TableCell>{hazard.Mechanism}</TableCell>
                              <TableCell>{hazard.riskValue}</TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div> */}
            </div>
          );
        } else {
          return (
            <div className="sm:max-w-4xl md:max-w-6xl lg:max-w-7xl shadow-lg rounded-lg w-full">
              <div className="flex justify-end items-center mb-3 space-x-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>View Risk Matrix</Button>
                  </DialogTrigger>
                  <DialogContent className="w-[90vw] h-[90vh] max-w-none max-h-none">
                    <DialogHeader>
                      <DialogTitle>Risk Matrix</DialogTitle>
                    </DialogHeader>
                    <div className="flex-grow overflow-hidden">
                      <FinalMatrix hazards={hazards} data={currentMatrix} onPrev={() => setStep(0)} />
                    </div>
                  </DialogContent>
                </Dialog>
                <Button onClick={nextStep}>Configure Risk Matrix</Button>
                <AddHazardModal currentMatrix={currentMatrix}></AddHazardModal>
                {/* <Dialog>
                  <DialogTrigger><Button>View Hazards</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Here are the potential hazard you have created</DialogTitle>
                      <DialogDescription>
                        <div>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Activity</TableHead>
                                <TableHead>Hazard</TableHead>
                                <TableHead>Mechanism</TableHead>
                                <TableHead>Risk Value</TableHead>
                                <TableHead></TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {
                                hazards.map(hazard => (
                                  <TableRow key={hazard.id}>
                                    <TableCell>{hazard.id}</TableCell>
                                    <TableCell>{hazard.activity}</TableCell>
                                    <TableCell>{hazard.hazard}</TableCell>
                                    <TableCell>{hazard.Mechanism}</TableCell>
                                    <TableCell>{hazard.riskValue}</TableCell>
                                  </TableRow>
                                ))
                              }
                            </TableBody>
                          </Table>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog> */}

              </div>
              <div className="border rounded-lg">

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="py-4 w-[100px]">ID</TableHead>
                      <TableHead className="w-[200px]">Activity</TableHead>
                      <TableHead className="w-[200px]">Hazard</TableHead>
                      <TableHead className="w-[200px]">Mechanism</TableHead>
                      <TableHead className="w-[200px]">Section</TableHead>
                      <TableHead>Risk Value</TableHead>
                      <TableCell className="text-right pr-16">Control Plan</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {
                      hazards.map((hazard, index) => (
                        <TableRow key={hazard.id}>
                          <TableCell className="py-4">{hazard.id}</TableCell>
                          <TableCell>{hazard.activity}</TableCell>
                          <TableCell>{hazard.hazard}</TableCell>
                          <TableCell>{hazard.Mechanism}</TableCell>
                          <TableCell>{hazard.section.name}</TableCell>
                          <TableCell>{hazard.riskValue}</TableCell>
                          {
                            index <= 5 ? (
                              <TableCell className="text-right pr-10"><Button onClick={() => navigate(`/control-plan/${hazard.id}`)}>Add Control Plan</Button></TableCell>
                            ) :
                              null
                          }
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </div >
            </div >
          )
        }
      case 1:
        return (
          <CreateMatrix
            dimensions={matrixData.dimensions}
            onCreateButtonClicked={() => {
              if (matrixData.dimensions.row > 0 && matrixData.dimensions.col > 0) {
                nextStep();
              } else {
                toast.error("Please enter valid dimensions");
              }
            }}
            onChange={(e) =>
              updateMatrixData("dimensions", {
                ...matrixData.dimensions,
                [e.target.name]: e.target.name === "name" ? e.target.value : parseInt(e.target.value),
              })
            }
            onBackButtonClicked={prevStep}
          />
        );
      case 2:
        return (
          <InputDetails
            title="Consequences"
            data={matrixData.consequences}
            count={matrixData.dimensions.col}
            onNext={(data) => {
              updateMatrixData("consequences", data);
              nextStep();
            }}
            key={1}
            onPrev={prevStep}
            onRiskValueChanged={onRiskValueChanged}
          />
        );
      case 3:
        return (
          <InputDetails
            title="Probability"
            data={matrixData.probability}
            count={matrixData.dimensions.row}
            onNext={(data) => {
              updateMatrixData("probability", data);
              nextStep();
            }}
            key={2}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <InputDetails
            title="Exposure"
            data={matrixData.exposure}
            count={matrixData.dimensions.row}
            onNext={(data) => {
              updateMatrixData("exposure", data);
              nextStep();
            }}
            key={3}
            onSaveClicked={(data) => {
              console.log("Exposure data", data)
              updateMatrixData('exposure', data);
              onSaveRiskMatrixClicked(data);
            }}
            isEnd={true}
            onPrev={prevStep}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const getAndSetRiskMatrix = async () => {
      const d = await fetchAllRiskMatrix();
      if (d) {
        setRiskMatrix(d);
        if (d.length > 0) {
          setCurrentMatrix(d[d.length - 1]); // Set the first matrix as the default
        }
        return true;
      }
      return false;
    };

    const getAndSetHazards = async () => {
      const d = await fetchAllHazards();
      if (d) {
        const sortedHazards = d.sort((a, b) => b.riskValue - a.riskValue);
        setHazards(sortedHazards);
        return true;
      }
      return false;
    };

    getAndSetRiskMatrix();
    getAndSetHazards();
  }, []);

  return (
    <section id="riskmatrix-page" className="bg-background border-none">
      <div className="container h-full mx-auto py-8">
        <div className="h-16 flex justify-between items-center p-2">
          <h1 className="text-3xl font-bold mb-8 text-center">Safety Management Plan</h1>
        </div>
        <div className="flex items-center justify-center h-full">{renderStep()}</div>
      </div>
    </section>
  )
};

export default RiskMatrix;
