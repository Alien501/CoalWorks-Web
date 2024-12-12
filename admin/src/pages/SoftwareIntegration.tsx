import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EyeIcon, EyeOffIcon, KeyIcon, PlusIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface Software {
  id: number
  name: string
  key: string
}

export default function SoftwareIntegration() {
  const [softwares, setSoftwares] = useState<Software[]>([])
  const [visibleKeys, setVisibleKeys] = useState<{ [key: number]: boolean }>({})
  const [softwareName, setSoftwareName] = useState('');

  const toggleKeyVisibility = (id: number) => {
    setVisibleKeys((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const onGenerateKeyClicked = () => {
    // Generate a cryptographically secure random key
    const generateSecureKey = () => {
      const array = new Uint8Array(16); // 16 bytes = 128 bits
      crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }

    const newKey = generateSecureKey();
    
    // If a software name is entered, create a new software with that name
    if (softwareName.trim()) {
      const newSoftware: Software = {
        id: softwares.length + 1,
        name: softwareName.trim(),
        key: newKey,
      }
      setSoftwares([...softwares, newSoftware]);
      setSoftwareName(''); // Reset the input
    }
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
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon />
              Add New Software
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Software</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <div>
                <Label>Name: </Label>
                <Input
                  name="name"
                  className="rounded-sm"
                  placeholder="Software Name"
                  value={softwareName}
                  onChange={(e) => setSoftwareName(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
               <Button onClick={onGenerateKeyClicked}><KeyIcon /> Generate Key</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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