import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from 'axios';

// Define response types
const RESPONSE_TYPES = [
  'text', 
  'image', 
  'video', 
  'audio', 
  'document', 
  'location', 
  'multiple-choice'
] as const;

type ResponseType = typeof RESPONSE_TYPES[number];

interface Shift {
  shiftId: number;
  name: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
}

interface User {
  userId: number;
  username: string;
  role: string;
}

interface TemplateQuestion {
  id?: number;
  question: string;
  responseType: ResponseType;
  multipleChoiceOptions?: string[];
}

interface CreateShiftTemplateDialogProps {
  sectionId: number;
}

export const CreateShiftTemplateDialog: React.FC<CreateShiftTemplateDialogProps> = ({ sectionId }) => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null);
  const [shiftAssignments, setShiftAssignments] = useState<{
    supervisors: User[];
    operators: User[];
  }>({ supervisors: [], operators: [] });
  const [questions, setQuestions] = useState<TemplateQuestion[]>([
    { question: '', responseType: 'text' }
  ]);
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState<string[]>(['']);

  useEffect(() => {
    // Fetch available shifts
    const fetchShifts = async () => {
      try {
        const response = await axios.get('/api/data/shift');
        setShifts(response.data.data);
      } catch (error) {
        console.error('Error fetching shifts:', error);
      }
    };
    fetchShifts();
  }, []);

  const handleShiftSelect = async (shift: Shift) => {
    setSelectedShift(shift);
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/shift/${sectionId}/shifts/${shift.shiftId}/assignments`);
      setShiftAssignments(response.data.data);
    } catch (error) {
      console.error('Error fetching shift assignments:', error);
    }
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', responseType: 'text' }]);
  };

  const updateQuestion = (index: number, field: keyof TemplateQuestion, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], [field]: value };
    setQuestions(newQuestions);
  };

  const updateMultipleChoiceOptions = (options: string[]) => {
    setMultipleChoiceOptions(options);
  };

  const handleCreateTemplate = async () => {
    // Prepare questions with multiple-choice options if applicable
    const preparedQuestions = questions.map(q => {
      if (q.responseType === 'multiple-choice') {
        return {
          ...q,
          multipleChoiceOptions: multipleChoiceOptions.filter(opt => opt.trim() !== '')
        };
      }
      return q;
    });

    try {
      await axios.post('/api/data/shifttemplate/create', {
        shiftId: selectedShift?.shiftId,
        sectionId: sectionId,
        questions: preparedQuestions
      });
      // Handle success (close dialog, show toast, etc.)
    } catch (error) {
      console.error('Error creating shift template:', error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Shift Template</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Create Shift Template</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-grow overflow-y-auto pr-4">
          <div className="space-y-4">
            {/* Shift Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Shift</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                {shifts.map(shift => (
                  <Button 
                    key={shift.shiftId} 
                    variant={selectedShift?.shiftId === shift.shiftId ? 'default' : 'outline'}
                    onClick={() => handleShiftSelect(shift)}
                  >
                    {shift.name} ({shift.startTime} - {shift.endTime})
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Shift Assignments */}
            {shiftAssignments?.supervisors?.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shift Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <h3 className="font-semibold mb-2">Supervisors</h3>
                    {shiftAssignments.supervisors.map(supervisor => (
                      <div key={supervisor.userId} className="mb-1">
                        {supervisor.username}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Operators</h3>
                    {shiftAssignments.operators.map(operator => (
                      <div key={operator.userId} className="mb-1">
                        {operator.username}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Question Creation */}
            <Card>
              <CardHeader>
                <CardTitle>Create Template Questions</CardTitle>
              </CardHeader>
              <CardContent>
                {questions.map((question, index) => (
                  <div key={index} className="mb-4 space-y-2">
                    <Input 
                      placeholder="Enter question" 
                      value={question.question}
                      onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                      className="mb-2"
                    />
                    <Select 
                      value={question.responseType}
                      onValueChange={(value: ResponseType) => 
                        updateQuestion(index, 'responseType', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Response Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {RESPONSE_TYPES.map(type => (
                          <SelectItem key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Multiple Choice Options */}
                    {question.responseType === 'multiple-choice' && (
                      <div className="space-y-2">
                        {multipleChoiceOptions.map((option, optIndex) => (
                          <Input 
                            key={optIndex}
                            placeholder={`Option ${optIndex + 1}`}
                            value={option}
                            onChange={(e) => {
                              const newOptions = [...multipleChoiceOptions];
                              newOptions[optIndex] = e.target.value;
                              updateMultipleChoiceOptions(newOptions);
                            }}
                          />
                        ))}
                        <Button 
                          variant="outline" 
                          onClick={() => updateMultipleChoiceOptions([...multipleChoiceOptions, ''])}
                        >
                          Add Option
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
                <Button onClick={addQuestion} variant="outline" className="mt-4">
                  Add Question
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        <div className="mt-4 flex justify-end">
          <Button onClick={handleCreateTemplate}>Create Template</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateShiftTemplateDialog;