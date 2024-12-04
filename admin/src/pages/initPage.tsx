'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InitializationData } from '@/types/initialization'
import OwnerDetailsForm from '@/components/custom/OwnerDetailsForm'
import MineDetailsForm from '@/components/custom/MineDetailsForm'
import AdminConfigForm from '@/components/custom/AdminConfigForm'
import { initDb } from '@/utils/initDb'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export default function InitPage() {
  const [activeTab, setActiveTab] = useState('owner');
  const navigate = useNavigate();
  const [initializationData, setInitializationData] = useState<InitializationData>({
    ownerDetails: {
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
    },
    mineDetails: [],
    adminConfig: {
      email: '',
      password: '',
      name: ''
    },
  })

  const handleOwnerDetailsSubmit = (ownerDetails: InitializationData['ownerDetails']) => {
    setInitializationData(prev => ({ ...prev, ownerDetails }))
    setActiveTab('mine')
  }

  const handleMineDetailsSubmit = (mineDetails: InitializationData['mineDetails'], isNextButton: boolean) => {
    setInitializationData(prev => ({ ...prev, mineDetails }))
    if(isNextButton) {
        setActiveTab('admin')
    }
  }

  const handleAdminConfigSubmit = async (adminConfig: InitializationData['adminConfig'], type: boolean) => {
    if(!type) {
        setInitializationData(prev => ({ ...prev, adminConfig }))
    }else {
        const setDbRes = await initDb(initializationData);
        if(setDbRes) {
            toast.success("Databse setup success!");
            localStorage.setItem('isInit', "true");
            navigate('/login');
        }else{
            toast.error("Something went wron while DB initialization")
        }
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className='border-none w-[80%] mx-auto shadow-none'>
        <CardHeader>
          <CardTitle>Initialization</CardTitle>
          <CardDescription>Set up Coalworks</CardDescription>
        </CardHeader>
        <CardContent className='p-2'>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 h-14 rounded-full">
              <TabsTrigger className='h-full rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white' value="owner">Owner Details</TabsTrigger>
              <TabsTrigger className='h-full rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white' value="mine" disabled={!initializationData.ownerDetails.name}>Mine Details</TabsTrigger>
              <TabsTrigger className='h-full rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white' value="admin" disabled={initializationData.mineDetails.length === 0}>Admin Config</TabsTrigger>
            </TabsList>
            <TabsContent value="owner">
              <OwnerDetailsForm data={initializationData.ownerDetails} onSubmit={handleOwnerDetailsSubmit} />
            </TabsContent>
            <TabsContent value="mine">
              <MineDetailsForm data={initializationData.mineDetails} onSubmit={handleMineDetailsSubmit} />
            </TabsContent>
            <TabsContent value="admin">
              <AdminConfigForm data={initializationData.adminConfig} onSubmit={handleAdminConfigSubmit} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

