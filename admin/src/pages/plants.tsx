import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { hoverContent } from "@/lib/hoverContent"
import { AddNewLargeSection } from "@/components/custom/addNewLargeSection"
import { LargeSectionTable } from "@/components/custom/largeSectionTable"
import { AddNewSection } from "@/components/custom/addNewSection"
import { SectionTable } from "@/components/custom/sectionTable"

export function Plants() {

    const [largeSection, setLargeSection] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [sortColumn, setSortColumn] = useState("")
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
    const [activeHover, setActiveHover] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ left: 0, top: 0 });
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [mediumSection, setMediumSection] = useState([])
    const [smallSection, setSmallSection] = useState([])
    const [microSection, setMicroSection] = useState([])
    const [unitSection, setUnitSection] = useState([])

    const handleSort = (column: string) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        } else {
            setSortColumn(column)
            setSortOrder("asc")
        }
    }

    const addNewSection = (data: any, type: string) => {
        if (type === "large") {
            setLargeSection(prev => {
                return [
                    {
                        sectionId: largeSection.length + 1,
                        ...data
                    },
                    ...prev
                ]
            })
        }
        else if (type === "medium") {
            setMediumSection(prev => {
                return [
                    {
                        sectionId: mediumSection.length + 1,
                        ...data
                    },
                    ...prev
                ]
            })
        }
        else if (type === "small") {
            setSmallSection(prev => {
                return [
                    {
                        sectionId: smallSection.length + 1,
                        ...data
                    },
                    ...prev
                ]
            })
        }
        else if (type === "micro") {
            setMicroSection(prev => {
                return [
                    {
                        sectionId: microSection.length + 1,
                        ...data
                    },
                    ...prev
                ]
            })
        }
        else {
            setUnitSection(prev => {
                return [
                    {
                        sectionId: unitSection.length + 1,
                        ...data
                    },
                    ...prev
                ]
            })
        }
    }


    return (
        <div className="container mx-auto py-10">
            <Tabs defaultValue="section1" className="relative">
                <div className="bg-slate-50/0 flex items-center justify-center h-14">
                    <TabsList className="h-12 bg-gray-100 dark:bg-black border rounded-lg p-1">
                        {Object.keys(hoverContent).map((section) => (
                            <TabsTrigger
                                key={section}
                                className="h-full flex-1 rounded-md text-sm w-20 font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-white/85 data-[state=active]:text-black data-[state=active]:shadow-sm relative overflow-hidden"
                                value={section}
                                onMouseEnter={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setHoverPosition({
                                        left: rect.left,
                                        top: rect.bottom
                                    });
                                    setActiveHover(section);
                                }}
                                onMouseLeave={() => setActiveHover(null)}
                            >
                                <span>{hoverContent[section].title}</span>
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-left transition-transform data-[state=active]:scale-x-100 scale-x-0" />
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                {activeHover && (
                    <HoverCard
                        content={hoverContent[activeHover]}
                        isVisible={true}
                        position={hoverPosition}
                    />
                )}
                <TabsContent value="section1">
                    <AddNewLargeSection sectionType={'large'} onSaveClicked={addNewSection} searchTerm={searchTerm} setSearchTerm={setSearchTerm}></AddNewLargeSection>
                    <LargeSectionTable sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} largeSectionDummyData={largeSection}></LargeSectionTable>
                </TabsContent>
                <TabsContent value="section2">
                    <AddNewSection areaType="Medium Area" sectionType={'medium'} onSaveClicked={addNewSection} searchTerm={searchTerm} setSearchTerm={setSearchTerm} open={open} setOpen={setOpen} value={value} setValue={setValue} outerSection={largeSection}></AddNewSection>
                    <SectionTable sectionData={mediumSection} sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort}></SectionTable>
                </TabsContent>
                <TabsContent value="section3">addNewSection
                    <AddNewSection areaType="Small Area" sectionType={'small'} onSaveClicked={addNewSection} searchTerm={searchTerm} setSearchTerm={setSearchTerm} open={open} setOpen={setOpen} value={value} setValue={setValue} outerSection={mediumSection}></AddNewSection>
                    <SectionTable sectionData={smallSection} sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort}></SectionTable>
                </TabsContent>
                <TabsContent value="section4">
                    <AddNewSection areaType="Micro Area" sectionType={'micro'} onSaveClicked={addNewSection} searchTerm={searchTerm} setSearchTerm={setSearchTerm} open={open} setOpen={setOpen} value={value} setValue={setValue} outerSection={smallSection}></AddNewSection>
                    <SectionTable sectionData={microSection} sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort}></SectionTable>
                </TabsContent>
                <TabsContent value="section5">
                    <AddNewSection areaType="Unit Area" sectionType={'unit'} onSaveClicked={addNewSection} searchTerm={searchTerm} setSearchTerm={setSearchTerm} open={open} setOpen={setOpen} value={value} setValue={setValue} outerSection={microSection}></AddNewSection>
                    <SectionTable sectionData={unitSection} sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort}></SectionTable>
                </TabsContent>
            </Tabs>
        </div >
    )
}

interface HoverCardProps {
    content: any;
    isVisible: boolean;
    position: { left: number; top: number };
}

const HoverCard: React.FC<HoverCardProps> = ({ content, isVisible, position }) => {
    if (!isVisible) return null;
    return (
        // <Card
        //     className="fixed z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-0 w-[500px] mt-2"
        //     style={{ left: `${position.left}px`, top: `${position.top}px` }}
        // >
        //     <CardContent className="p-6">
        //         <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
        //         <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{content.description}</p>
        //         <div className="grid grid-cols-1 gap-4">
        //             {content.links.map((link: any, index: number) => (
        //                 <div key={index} className="group">
        //                     <h4 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">{link.title}</h4>
        //                     <p className="text-xs text-gray-500 dark:text-gray-400">{link.description}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </CardContent>
        // </Card>
        <span className="fixed z-50 text-xs py-1 px-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-0 mt-2" style={{ left: `${position.left}px`, top: `${position.top}px` }}>
            More Info
        </span>
    );
};