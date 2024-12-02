
import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import PlanDetailsForm from '@/components/custom/planDetailForm'
import RoundAndTasks from '@/components/custom/roundAndTasks'
import PDFGenerator from '@/components/custom/pdf-generator'
import axios from 'axios'

const tabsList = [
  { name: 'Plan Details', value: 'plan-details', status: true },
  { name: 'Rounds and Tasks', value: 'round-and-tasks', status: false },
  { name: 'PDF Setup', value: 'pdf-setup', status: false }
]

interface Asset {
  id: string;
  name: string;
  type: { name: string };
  section: { name: string; area: number };
  description: string;
}

interface Section {
  id: string;
  name: string;
  type: { name: string };
}

interface Task {
  id: string;
  sectionId: string;
  name: string;
  responseType: 'text' | 'image';
  type: "task"
}

interface Question {
  id: string;
  sectionId: string;
  name: string;
  responseType: 'text' | 'image';
  type: "question"
}


const CreateRound = () => {
  const [tabs, setTabs] = useState(tabsList)
  const [sections, setSections] = useState([])
  const [assets, setAssets] = useState([])
  const [planDetails, setPlanDetails] = useState({
    planName: '',
    planDescription: '',
    notes: '',
    attachments: []
  })


  const [roundName, setRoundName] = useState("Round Name")
  const [roundDescription, setRoundDescription] = useState("Round Description")
  const [checkedAssets, setCheckedAssets] = useState<string[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [questions, setQuestions] = useState<Question[]>([])

  const [isRoundDetailsDialogOpen, setIsRoundDetailsDialogOpen] = useState(false)
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false)
  const [isAddQuestionDialogOpen, setIsAddQuestionDialogOpen] = useState(false)

  const [selectedSectionId, setSelectedSectionId] = useState<string>('')
  const [taskName, setTaskName] = useState('')
  const [questionName, setQuestionName] = useState('')
  const [responseType, setResponseType] = useState<'text' | 'image'>('text')
  const [selectedAssetsData, setSelectedAssetsData] = useState([])
  console.log(selectedAssetsData)

  const handleCheckAssets = (asset: Asset) => {
    setSelectedAssetsData((prev) => {
      const isAlreadySelected = prev.some(selectedAsset =>
        selectedAsset.assetId === asset.id
      );

      if (isAlreadySelected) {
        return prev.filter(selectedAsset => selectedAsset.assetId !== asset.id);
      } else {
        return [...prev, { assetId: asset.id, assetName: asset.name }];
      }
    });
    setCheckedAssets(prev => {
      const isAlreadyChecked = prev.includes(asset.id);
      if (isAlreadyChecked) {
        return prev.filter(id => id !== asset.id);
      } else {
        return [...prev, asset.id];
      }
    });
  }

  const handleAddTask = () => {
    if (selectedSectionId && taskName) {
      setTasks([...tasks, {
        id: `task-${Date.now()}`,
        sectionId: selectedSectionId,
        name: taskName,
        responseType,
        type: "task"
      }])
      resetTaskDialogState()
    }
  }

  const handleAddQuestion = () => {
    if (selectedSectionId && questionName) {
      setQuestions([...questions, {
        id: `question-${Date.now()}`,
        sectionId: selectedSectionId,
        name: questionName,
        type: "question",
        responseType
      }])
      resetQuestionDialogState()
    }
  }

  const resetTaskDialogState = () => {
    setSelectedSectionId('')
    setTaskName('')
    setResponseType('text')
    setIsAddTaskDialogOpen(false)
  }

  const resetQuestionDialogState = () => {
    setSelectedSectionId('')
    setQuestionName('')
    setResponseType('text')
    setIsAddQuestionDialogOpen(false)
  }

  const handleSaveRoundDetails = () => {
    setIsRoundDetailsDialogOpen(false)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [sectionsRes, assetsRes] = await Promise.all([
          axios.get("/api/data/section"),
          axios.get("/api/data/asset")
        ])
        console.log(sectionsRes.data);
        console.log(assetsRes.data)
        setSections(sectionsRes.data)
        setAssets(assetsRes.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="create-round" className="">
      <Tabs defaultValue={tabsList[0].value}>
        <div id="header" className="h-20 p-1 flex items-center justify-between ">
          <div className="w-full flex items-center justify-center">
            <TabsList className="h-full rounded-full">
              {tabs.map((item, index) => (
                <TabsTrigger
                  key={item.value}
                  className="space-x-2 h-full rounded-full"
                  value={item.value}
                >
                  <span>
                    <Badge className="rounded-full h-6 w-6 font-semibold flex items-center justify-center">
                      <span>{index + 1}</span>
                    </Badge>
                  </span>
                  <span>{item.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="flex space-x-2 items-center h-full">
            <Button variant="secondary" className="rounded-full h-9">Cancel</Button>
            <Button type="submit" form="plan-details-form" className="rounded-full h-9">Save & Next</Button>
          </div>
        </div>
        <TabsContent value="plan-details">
          <PlanDetailsForm formData={planDetails} setFormData={setPlanDetails} />
        </TabsContent>
        <TabsContent value="round-and-tasks">
          <RoundAndTasks
            sections={sections}
            assets={assets}
            roundName={roundName}
            setRoundName={setRoundName}
            roundDescription={roundDescription}
            setRoundDescription={setRoundDescription}
            checkedAssets={checkedAssets}
            handleCheckAssets={handleCheckAssets}
            tasks={tasks}
            setTasks={setTasks}
            questions={questions}
            setQuestions={setQuestions}
            isRoundDetailsDialogOpen={isRoundDetailsDialogOpen}
            setIsRoundDetailsDialogOpen={setIsRoundDetailsDialogOpen}
            isAddTaskDialogOpen={isAddTaskDialogOpen}
            setIsAddTaskDialogOpen={setIsAddTaskDialogOpen}
            isAddQuestionDialogOpen={isAddQuestionDialogOpen}
            setIsAddQuestionDialogOpen={setIsAddQuestionDialogOpen}
            selectedSectionId={selectedSectionId}
            setSelectedSectionId={setSelectedSectionId}
            taskName={taskName}
            setTaskName={setTaskName}
            questionName={questionName}
            setQuestionName={setQuestionName}
            responseType={responseType}
            setResponseType={setResponseType}
            handleAddTask={handleAddTask}
            handleAddQuestion={handleAddQuestion}
            handleSaveRoundDetails={handleSaveRoundDetails}
            selectedAssetsData={selectedAssetsData}
            planDetails={planDetails}
          />
        </TabsContent>
        <TabsContent value="pdf-setup">
          <PDFGenerator
            planName={planDetails.planName}
            planDescription={planDetails.planDescription}
            notes={planDetails.notes}
            tasks={tasks}
            questions={questions}
          />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default CreateRound
