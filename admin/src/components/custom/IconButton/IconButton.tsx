import { Button } from "@/components/ui/button"
import { FileIcon } from "lucide-react";

const IconButton = ({Icon, variant = "default"}: { Icon: typeof FileIcon, variant?: string }) => {
    return(
        <Button variant={variant}>
            <Icon />
        </Button>
    )
};

export default IconButton;