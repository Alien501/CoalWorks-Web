import React, { useState } from "react";
import { AddNewLargeSection } from "@/components/custom/addNewLargeSection";
import { LargeSectionTable } from "@/components/custom/largeSectionTable";
// import type { FormData } from "@/types/section";

export function NewPlants() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState("Name");
    const [sortOrder, setSortOrder] = useState("asc");
    const [largeSectionData, setLargeSectionData] = useState([]);

    const handleSort = (column: string) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    const handleSaveSection = (data: FormData) => {
        // Handle saving section
        setLargeSectionData(prev => [...prev, data]);
    };

    const handleDeleteSection = (sectionName: string) => {
        setLargeSectionData(prev => prev.filter(section => section.name !== sectionName));
    };

    return (
        <div className="container mx-auto py-10">
            <AddNewLargeSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSaveClicked={handleSaveSection}
                sectionType="large"
            />
            <LargeSectionTable
                sortColumn={sortColumn}
                sortOrder={sortOrder}
                handleSort={handleSort}
                largeSectionDummyData={largeSectionData}
                deleteSection={handleDeleteSection}
                sectionType="large"
            />
        </div>
    );
}