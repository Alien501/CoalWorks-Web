import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";

const MySelectBox = ({ placeholder, content, selectedValue, setSelectValue }) => {
  return (
    <Select value={selectedValue} onValueChange={(e) => setSelectValue(e)}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {selectedValue || placeholder} {/* Ensure this displays correctly */}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {content.map((c) => (
          <SelectItem key={c.value} value={c.value}>
            {c.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MySelectBox;
