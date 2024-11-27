import {
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
export default function MasterConfigDrawer() {
    return (
        <div className="">
            <DrawerHeader>
                <DrawerTitle>Help Documentation: Master Data Configuration</DrawerTitle>
                <DrawerDescription>
                    Manage essential data for coal mining operations, including plants, shifts, locations, assets, positions, roles, and permissions. Use this section to add, edit, or delete records and configure user access securely.
                </DrawerDescription>
            </DrawerHeader>
        </div>
    )
}