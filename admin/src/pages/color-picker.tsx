import { Input } from "@/components/ui/input"

interface ColorPickerProps {
    id: string
    color: string
    onChange: (color: string) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ id, color, onChange }) => {
    return (
        <div className="flex items-center space-x-2">
            <Input
                id={id}
                type="color"
                value={color}
                onChange={(e) => onChange(e.target.value)}
                className="w-12 h-12 p-1 rounded-md"
            />
            <Input
                type="text"
                value={color}
                onChange={(e) => onChange(e.target.value)}
                className="flex-grow"
                placeholder="#000000"
            />
        </div>
    )
}

