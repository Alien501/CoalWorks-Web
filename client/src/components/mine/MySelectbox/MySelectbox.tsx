import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";

const MySelectBox = ({placeholder, content}) => {
  return(
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {
          content.map(c => <SelectItem value={c.value}>{c.text}</SelectItem>)
        }
      </SelectContent>
    </Select>
  )
}


export default MySelectBox;