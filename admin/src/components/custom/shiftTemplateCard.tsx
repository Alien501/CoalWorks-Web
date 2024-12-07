import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Question = {
  id: number;
  text: string;
  responseType: 'text' | 'number' | 'boolean';
}

export const ShiftTemplateCard = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [newQuestion, setNewQuestion] = useState<Omit<Question, 'id'>>({
    text: '',
    responseType: 'text'
  })

  const handleAddQuestion = () => {
    if (newQuestion.text.trim() === '') return
    setQuestions([...questions, { ...newQuestion, id: Date.now() }])
    setNewQuestion({ text: '', responseType: 'text' })
  }

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Shift Template</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Question</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Question</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  value={newQuestion.text}
                  onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="responseType">Response Type</Label>
                <Select
                  value={newQuestion.responseType}
                  onValueChange={(value: 'text' | 'number' | 'boolean') => setNewQuestion({ ...newQuestion, responseType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select response type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="number">Number</SelectItem>
                    <SelectItem value="boolean">Yes/No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={handleAddQuestion}>Add Question</Button>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {questions.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle>Question: {question.text}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Response Type: {question.responseType}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

