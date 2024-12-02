'use client'

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

const CreateRound = () => {
  const [tabs, setTabs] = useState(tabsList)
  const [sections, setSections] = useState([])
  const [assets, setAssets] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const [sectionsRes, assetsRes] = await Promise.all([
          axios.get("/api/data/section"),
          axios.get("/api/data/asset")
        ])
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
          <PlanDetailsForm />
        </TabsContent>
        <TabsContent value="round-and-tasks">
          <RoundAndTasks sections={sections} assets={assets} />
        </TabsContent>
        <TabsContent value="pdf-setup">
          {/* <PDFGenerator /> */}
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default CreateRound

