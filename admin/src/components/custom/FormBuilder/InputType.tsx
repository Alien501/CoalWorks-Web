//@ts-nocheck
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon, Trash2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import {  } from '@radix-ui/react-radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';

const DynamicInputField = ({ type }) => {
  const [options, setOptions] = useState([{ value: 'Value', label: 'Label' }]);
  const [sliderConfig, setSliderConfig] = useState({ min: 0, max: 100, step: 1 });

  const addOption = () => {
    setOptions([...options, { value: 'value', label: 'label' }]);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const updateOption = (index: number, field: any, value: any) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  const renderOptionFields = () => (
    <div className="space-y-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            placeholder="Option Label"
            value={option.label}
            onChange={(e) => updateOption(index, 'label', e.target.value)}
            className="flex-1"
          />
          <Input
            placeholder="Value"
            value={option.value}
            onChange={(e) => updateOption(index, 'value', e.target.value)}
            className="flex-1"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeOption(index)}
            className="h-8 w-8"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={addOption}
        className="mt-2"
      >
        <PlusIcon className="h-4 w-4 mr-2" />
        Add Option
      </Button>
    </div>
  );

  const renderSliderConfig = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Min</Label>
          <Input
            type="number"
            value={sliderConfig.min}
            onChange={(e) => setSliderConfig({ ...sliderConfig, min: Number(e.target.value) })}
          />
        </div>
        <div>
          <Label>Max</Label>
          <Input
            type="number"
            value={sliderConfig.max}
            onChange={(e) => setSliderConfig({ ...sliderConfig, max: Number(e.target.value) })}
          />
        </div>
        <div>
          <Label>Step</Label>
          <Input
            type="number"
            value={sliderConfig.step}
            onChange={(e) => setSliderConfig({ ...sliderConfig, step: Number(e.target.value) })}
          />
        </div>
      </div>
      <Slider
        min={sliderConfig.min}
        max={sliderConfig.max}
        step={sliderConfig.step}
        defaultValue={[sliderConfig.min]}
      />
    </div>
  );

  const renderInputPreview = () => {
    switch (type) {
      case 'text':
        return <Input placeholder="Text input" />;
      case 'number':
        return <Input type="number" placeholder="Number input" />;
      case 'textarea':
        return <Textarea placeholder="Textarea input" />;
      case 'radio':
        return (
            <RadioGroup defaultChecked className='space-y-2'>
                {options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem id={`radio-${index}`} value={option.value} />
                    <Label htmlFor={`radio-${index}`}>{option.label || `Option ${index + 1}`}</Label>
                  </div>
                ))}
            </RadioGroup>
        );
      case 'check':
        return (
          <div className="space-y-2">
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`checkbox-${index}`} />
                <Label htmlFor={`checkbox-${index}`}>{option.label || `Option ${index + 1}`}</Label>
              </div>
            ))}
          </div>
        );
      case 'dropdown':
        return (
          <Select>
            <SelectTrigger>
                <SelectValue placeholder="Select One Of the Following"/>
            </SelectTrigger>
            <SelectContent>
                {options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                    {option.label || `Option ${index + 1}`}
                </SelectItem>
                ))}

            </SelectContent>
          </Select>
        );
      case 'file':
        return <Input type="file" />;
      case 'slider':
        return renderSliderConfig();
      default:
        return null;
    }
  };

  const needsOptions = ['radio', 'check', 'dropdown'].includes(type);

  return (
    <div className="space-y-4">
      {needsOptions && renderOptionFields()}
      <div className="mt-4">
        <Label>Preview:</Label>
        <div className="mt-2">
          {renderInputPreview()}
        </div>
      </div>
    </div>
  );
};

export default DynamicInputField;