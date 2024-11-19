import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { InputToggleItem } from "@/interfaces/interfaces";

const ToggleButton = ({ toggleItems }: { toggleItems: InputToggleItem[] }) => {
    return(
        <ToggleGroup type="single">
            {
                toggleItems.map(toggleItem => (
                    <ToggleGroupItem value={toggleItem.value}>{toggleItem.name}</ToggleGroupItem>
                ))
            }
        </ToggleGroup>
    )
};

export default ToggleButton;