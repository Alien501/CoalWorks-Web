import DashboardCard from "@/components/custom/DashboardCard/DashboardCard";
import IconButton from "@/components/custom/IconButton/IconButton";
import InputSelect from "@/components/custom/InputSelect/InputSelect";
import ToggleButton from "@/components/custom/ToggleButton/ToggleButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InputSelectItem, InputToggleItem } from "@/interfaces/interfaces";
import { FileText, MailPlusIcon } from "lucide-react";
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from "@/components/custom/DataTable";

type RoundExecution = {
    id: string,
    fieldName: string,
    scheduled: number,
    adhoc: number,
    submitted: number,
    overdue: number,
    skipped: number,
    completed: number
}

const DataTablevalues: RoundExecution[] = [
    {
        id: "one",
        fieldName: 'Plant Assigned Rounds',
        scheduled: 600,
        adhoc: 91,
        submitted: 14,
        overdue: 671,
        skipped: 1,
        completed: 2.03
    },
    {
        id: "two",
        fieldName: 'ERP Location 1',
        scheduled: 18,
        adhoc: 30,
        submitted: 25,
        overdue: 22,
        skipped: 1,
        completed: 52.08
    },
    {
        id: "three",
        fieldName: 'ERP Location 5',
        scheduled: 61,
        adhoc: 0,
        submitted: 1,
        overdue: 59,
        skipped: 1,
        completed: 1.64
    },
    {
        id: "four",
        fieldName: 'ERP Location 2',
        scheduled: 61,
        adhoc: 26,
        submitted: 3,
        overdue: 67,
        skipped: 14,
        completed: 3.45
    },
]

const columns: ColumnDef<RoundExecution>[] = [
    {
        accessorKey: 'unit',
        header: 'Unit'
    },
    {
        accessorKey: 'scheduled',
        header: 'scheduled'
    },
    {
        accessorKey: 'adhoc',
        header: 'Adhoc'
    },
    {
        accessorKey: 'submitted',
        header: 'Submitted'
    },
    {
        accessorKey: 'overdue',
        header: 'Overdue'
    },
    {
        accessorKey: 'skipped',
        header: 'Skipped'
    },
    {
        accessorKey: 'completed',
        header: 'Completed'
    }
]

const RoundExecutionDatatable = () => {
    return(
        <DataTable columns={columns} data={DataTablevalues} />
    )
}

const plantItems: InputSelectItem[] = [
    {
        name: 'ERP - ERP Plant',
        value: 'eplant'
    },
    {
        name: 'ERP - EPR Plant 2',
        value: 'eplant2'
    }
]

const unitItems: InputSelectItem[] = [
    {
        name: 'All',
        value: 'all'
    },
    {
        name: 'unit 1',
        value: 'unit1'
    },
    {
        name: 'unit 2',
        value: 'unit2'
    }
]

const shiftItems: InputSelectItem[] = [
    {
        name: 'All',
        value: 'all'
    },
    {
        name: 'Shift 1',
        value: 'shift1'
    },
    {
        name: 'Shift 2',
        value: 'shift2'
    }
]

const toggleItems: InputToggleItem[] = [
    {
        name: 'Today',
        value: 'today'
    },
    {
        name: '7D',
        value: '7day'
    },
    {
        name: '30D',
        value: '30day'
    },
    {
        name: '3M',
        value: '3month'
    },
    {
        name: '6M',
        value: '6month'
    },
    {
        name: 'Custom',
        value: 'custom'
    },
]



const ComplianceDashboard = () => {
    return(
        <section id="compliance-dashboard" className="p-2">
            <div className="flex w-full items-center justify-between p-1 h-[60px]">
                <div className="flex space-x-2">
                    <InputSelect
                        selectLabel="Plant"
                        selectItems={plantItems}
                    />
                    <InputSelect
                        selectLabel="Unit"
                        selectItems={unitItems}
                    />
                    <InputSelect
                        selectLabel="Shift"
                        selectItems={shiftItems}
                    />
                    <ToggleButton
                        toggleItems={toggleItems}
                    />
                </div>
                <div className="flex space-x-2">
                    <IconButton
                        Icon={FileText}
                        variant="secondary"
                    />
                    <IconButton
                        Icon={MailPlusIcon}
                        variant="secondary"
                    />
                </div>
            </div>

            <div>
                <Accordion type="multiple" className="p-2">
                    <AccordionItem value="item-1" className="bg-black text-white p-1 rounded-lg">
                        <AccordionTrigger className="flex justify-between items-center"><span>Round Compliance</span></AccordionTrigger>
                        <AccordionContent>
                            Some content will come here
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <DashboardCard cardTitle="Hello" cardContent={<RoundExecutionDatatable />} />
                <DashboardCard cardTitle="Hello" cardContent={<p>YT</p>} />
                <DashboardCard cardTitle="Hello" cardContent={<p>YT</p>} />
                <DashboardCard cardTitle="Hello" cardContent={<p>YT</p>} />
            </div>
        </section>
    );
}

export default ComplianceDashboard;