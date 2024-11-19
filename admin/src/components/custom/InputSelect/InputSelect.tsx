import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputSelectItem } from "@/interfaces/interfaces";

const InputSelect = ({ selectLabel, selectItems }: { selectLabel: string, selectItems: InputSelectItem[] }) => {
    return(
        <Select>
            <SelectTrigger className="w-52">
                <SelectValue placeholder={selectLabel} />
            </SelectTrigger>
            <SelectContent>
                {
                    selectItems.map(selectItem => (
                        <SelectItem value={selectItem.value}>{selectItem.name}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}

export default InputSelect;