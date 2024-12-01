import { useState, useCallback } from 'react';

export const useFieldSelection = (initialFields: string[] = []) => {
  const [selectedFields, setSelectedFields] = useState<string[]>(initialFields);

  const handleFieldSelection = useCallback((field: string) => {
    setSelectedFields(prev => {
      const isSelected = prev.includes(field);
      const [type, sectionId] = field.split('-');
      
      if (isSelected) {
        // If deselecting a section, remove all related tasks and questions
        if (type === 'section') {
          return prev.filter(f => !f.includes(`-${sectionId}`));
        }
        // Otherwise just remove the field
        return prev.filter(f => f !== field);
      } else {
        let newFields = [...prev, field];
        
        // If selecting a task or question, ensure its section is selected
        if ((type === 'task' || type === 'question') && sectionId) {
          const sectionField = `section-${sectionId}-name`;
          if (!prev.includes(sectionField)) {
            newFields = [...newFields, sectionField];
          }
        }
        
        return newFields;
      }
    });
  }, []);

  return {
    selectedFields,
    handleFieldSelection,
    setSelectedFields
  };
};