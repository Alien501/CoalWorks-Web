import { useEffect, useState } from "react";
import { CreateMatrix } from "./create-matrix";
import { InputDetails } from "./input-details";
import { FinalMatrix } from "./final-matrix";
import { AddHazardModal } from "./add-hazard-modal";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import axios from "axios";
import { fetchAllRiskMatrix } from "@/utils/fetchAllRiskMatrix";
import { fetchAllHazards } from "@/utils/fetchAllHazards";

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
  const [currentMatrix, setCurrentMatrix] = useState();

  const updateMatrixData = (key, value) => {
    setMatrixData((prev) => ({ ...prev, [key]: value }));
  };

  const onRiskValueChanged = (e) => {
    console.log(e.target.name);
    console.log(e.target.value)
  }

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSaveRiskMatrixClicked = async () => {
    console.log(matrixData)
    const res = await axios.post('/api/data/smp', matrixData);
    if(res.status == 200){
      console.log(res.data);
      toast.success("Risk Matrix created successfully!");
      setMatrixData(() => {
        return {
          dimensions: { row: 0, col: 0 },
          consequences: [],
          probability: [],
          exposure: [],
        }
      });
      setStep(0);
    }else{
      toast.error('Something went wrong while creating a Risk Matrix')
    }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return(
          <div className="w-full h-full grid grid-cols-2 gap-2">
            <div className="p-2">
              <div className="flex justify-between items-center h-16 p-1">
                <p>Created Risk Matrix</p>
                {
                  riskMatrix.length < 1 &&
                  <Button className="h-10 w-10 rounded-full" variant='secondary' onClick={nextStep}><PlusIcon /></Button>
                }
              </div>
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Row</TableHead>
                      <TableHead>Column</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {riskMatrix.length !== 0 && riskMatrix.map(risk => (
                      <TableRow onClick={() => {
                        setCurrentMatrix(risk);
                        setStep(5)
                      }}>
                        <TableCell>{risk.id}</TableCell>
                        <TableCell>{risk.name}</TableCell>
                        <TableCell>{risk.row}</TableCell>
                        <TableCell>{risk.col}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="p-2">
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
                          <TableRow>
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
            </div>
          </div>
        );
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
            // onChange={}
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
              updateMatrixData('exposure', data);
              onSaveRiskMatrixClicked();
            }}
            isEnd={true}
            onPrev={prevStep}
          />
        );
      case 5:
        return <FinalMatrix data={currentMatrix} onPrev={() => setStep(0)} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const getAndSetRiskMatrix = async () => {
      const d = await fetchAllRiskMatrix();
      if(d) {
        setRiskMatrix(d);
        return true;
      }
      return false;
    }

    const getAndSetHazards = async () => {
      const d = await fetchAllHazards();
      if(d) {
        const sortedHazards = d.sort((a, b) => b.riskValue - a.riskValue);
        setHazards(sortedHazards);
        return true;
      }
      return false;
    }

    const d = getAndSetRiskMatrix();
    if(d) {
      toast.success("Data fetched successfully")
    }else{
      toast.error("Something went wrong while fetching data");
    }

    const d1 = getAndSetHazards();
    if(d1) {
      toast.success('Fetched hazards successfully!')
    } else {
      toast.message("Something went wrong!")
    }
  }, [])
  return (
    <section id="riskmatrix-page" className="bg-background border-none h-[87vh]">
      <div className="container h-full mx-auto py-8">
        <div className="h-16 flex justify-between items-center p-2">
            <h1 className="text-3xl font-bold mb-8 text-center">Safety Management Plan</h1>
            {/* <AddHazardModal /> */}
        </div>
        <div className="flex items-center justify-center h-full">{renderStep()}</div>
      </div>
    </section>
  );
};

export default RiskMatrix;
