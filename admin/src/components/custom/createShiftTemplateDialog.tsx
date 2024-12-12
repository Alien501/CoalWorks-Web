import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from 'axios';
import { ShowShiftTemplates } from './showShiftTemplates';

// Define response 
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
        <Button>Choose Shift Template</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Choose Shift Template</DialogTitle>
        </DialogHeader>
        <ShowShiftTemplates></ShowShiftTemplates>
      </DialogContent>
    </Dialog>
  );
};

export default CreateShiftTemplateDialog;
