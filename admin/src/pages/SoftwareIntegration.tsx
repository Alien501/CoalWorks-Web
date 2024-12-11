import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EyeIcon, EyeOffIcon, PlusIcon } from 'lucide-react'

interface Software {
  id: number
  name: string
  key: string
}

export default function SoftwareIntegration() {
  const [softwares, setSoftwares] = useState<Software[]>([
    { id: 1, name: "Coal ERP", key: "generated-key-123" },
    { id: 2, name: "Inventory Manager", key: "generated-key-456" },
  ])
  const [visibleKeys, setVisibleKeys] = useState<{ [key: number]: boolean }>({})

  const toggleKeyVisibility = (id: number) => {
    setVisibleKeys((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const addSoftware = () => {
    const newSoftware: Software = {
      id: softwares.length + 1,
      name: `New Software ${softwares.length + 1}`,
      key: `generated-key-${Math.random().toString(36).substr(2, 9)}`,
    }
    setSoftwares([...softwares, newSoftware])
  }

  return (
    <section id="software-integration" className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Software Integration</h1>
        <Button onClick={addSoftware} className="rounded-md">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Software
        </Button>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Software Name</TableHead>
              <TableHead>Key</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {softwares.map((software) => (
              <TableRow key={software.id}>
                <TableCell>{software.id}</TableCell>
                <TableCell>{software.name}</TableCell>
                <TableCell>
                  <Input
                    value={visibleKeys[software.id] ? software.key : "••••••••••••••••"}
                    disabled
                    className="font-mono"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleKeyVisibility(software.id)}
                    aria-label={visibleKeys[software.id] ? "Hide key" : "Show key"}
                  >
                    {visibleKeys[software.id] ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}