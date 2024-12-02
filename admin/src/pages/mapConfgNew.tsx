import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from 'lucide-react'
import { toast } from 'sonner'
import axios from 'axios'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { HelpCircle } from 'lucide-react'

export function MineInit() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [items, setItems] = useState<{ name: string; description: string }[]>([])
    const [isSaving, setIsSaving] = useState(false)


    const handleAdd = () => {
        if (name && description) {
            setItems([...items, { name, description }])
            setName('')
            setDescription('')
        }
    }

    const handleRemove = (index: number) => {
        setItems(items.filter((_, i) => i !== index))
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            console.log(JSON.stringify(items))
            //include the request here........
            const res = await axios.post("http://localhost:3000/")
            toast.success("Mine Details saved successfully")

        } catch (error) {
            console.error('Failed to save items:', error)
            alert('Failed to save items. Please try again.')
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <main className='h-screen flex justify-center items-center bg-black/95'>
            <Card className="w-full max-w-md mx-auto bg-black text-white">
                <CardHeader className='flex space-x-3 items-center justify-center'>
                    <span>
                        <CardTitle className='text-2xl'>Mine Segregation Details</CardTitle>
                    </span>
                    <span>
                        <Drawer>
                            <DrawerTrigger><HelpCircle size={18}></HelpCircle></DrawerTrigger>
                            <DrawerContent className="bg-black text-white">
                                <DrawerHeader>
                                    <DrawerTitle className='text-2xl'>Mine Segregation Details</DrawerTitle>
                                    <DrawerDescription className='text-lg mt-6'>
                                        Mine segregation details provide the outermost hierarchical representation of a mining operation,
                                        offering a structured overview that begins with broad categories such as the district or subsidiary
                                        to which the mine belongs. This hierarchy then narrows down to specific divisions such as the area
                                        of operation and the individual mine itself. From this structure, multiple types of categorization
                                        or data segregation can be derived to suit specific operational or analytical requirements.
                                    </DrawerDescription>
                                </DrawerHeader>
                            </DrawerContent>

                        </Drawer>
                    </span>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2 border-none">
                        <Input
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <Button onClick={handleAdd} className="w-full bg-white text-black hover:bg-white/60">Add</Button>
                    <div className="flex flex-wrap gap-2">
                        {items.map((item, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={() => handleRemove(index)}
                            >
                                {item.name} <X size={15}></X>
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleSave} disabled={items.length === 0 || isSaving} className="w-full bg-white text-black hover:bg-white/60">
                        {isSaving ? 'Saving...' : 'Save'}
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}

