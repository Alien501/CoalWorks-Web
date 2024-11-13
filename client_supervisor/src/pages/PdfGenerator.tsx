import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DownloadIcon, MoveLeftIcon } from "lucide-react";
import { useState } from "react";
import { Document, Text, View, Page, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

const PdfGenerator = () => {
    const [config, setConfig] = useState({
        roundId: false,
        roundTitle: false,
        logo: false,
        taskCompleted: false,
        submittedOn: false,
        submittedBy: false,
        generatedDate: false,
        customCheck: false,
        customText: "",
        customLabel: ""
    });

    const onCheckBoxClicked = (key) => {
        console.log(key)
        setConfig(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const onInputChanged = (e) => {
        setConfig(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const PdfDocument = () => (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    {config.logo && <Text>Company Logo</Text>}
                    {config.roundId && <Text>Round ID: 12345</Text>}
                    {config.roundTitle && <Text>Round Title: Inspection Round</Text>}
                    {config.taskCompleted && <Text>Tasks Completed: 35/35 (100%)</Text>}
                    {config.submittedOn && <Text>Submitted On: 3/18/23, 10:00 PM</Text>}
                    {config.submittedBy && <Text>Submitted By: Sunitha Veeramachaneni</Text>}
                    {config.generatedDate && <Text>PDF Generated Date: {new Date().toLocaleDateString()}</Text>}
                    {config.customLabel && config.customText && (
                        <Text>{`${config.customLabel}: ${config.customText}`}</Text>
                    )}
                </View>
            </Page>
        </Document>
    );

    return (
        <div className="pdf-gen-wrapper">
            <div className="pdf-gen-header w-full h-14 flex items-center">
                <Button id="back-button" variant={'ghost'}>
                    <MoveLeftIcon />
                </Button>
                <Label htmlFor="back-button">
                    Back
                </Label>
            </div>
            <div className="grid grid-cols-[30%_70%] w-full items-center justify-between bg-slate-500/0 p-2">
                <div className="h-screen p-2">
                    <div>
                        <h1 className="font-medium text-sm">Configuration</h1>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <h1 className="font-semibold text-sm">Header</h1>
                        <div className="p-2 space-y-1">
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.roundId} onCheckedChange={() => onCheckBoxClicked('roundId')} id="round-id" />
                                <Label htmlFor="round-id">Round Id</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.roundTitle} onCheckedChange={() => onCheckBoxClicked('roundTitle')} id="round-title" />
                                <Label htmlFor="round-title">Round Title</Label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <h1 className="font-semibold text-sm">Subject</h1>
                        <div className="p-2 space-y-1">
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.logo} onCheckedChange={() => onCheckBoxClicked('logo')} id="logo" />
                                <Label htmlFor="logo">Logo</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.taskCompleted} onCheckedChange={() => onCheckBoxClicked('taskCompleted')} id="task-completed" />
                                <Label htmlFor="task-completed">Task Completed</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.submittedOn} onCheckedChange={() => onCheckBoxClicked('submittedOn')} id="submitted-on" />
                                <Label htmlFor="submitted-on">Submitted On</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.submittedBy} onCheckedChange={() => onCheckBoxClicked('submittedBy')} id="submitted-by" />
                                <Label htmlFor="submitted-by">Submitted By</Label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <h1 className="font-semibold text-sm">Footer</h1>
                        <div className="p-2 space-y-1">
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.generatedDate} onCheckedChange={() => onCheckBoxClicked('generatedDate')} id="date" />
                                <Label htmlFor="date">Generated Date</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox checked={config.customCheck} onCheckedChange={() => onCheckBoxClicked('customCheck')} id="custom-text" />
                                <Label htmlFor="custom-text">Custom Text</Label>
                            </div>
                            {config.customCheck && (
                                <div className="flex space-x-2">
                                    <Input
                                        value={config.customLabel}
                                        onChange={onInputChanged}
                                        placeholder="Label"
                                        name="customLabel"
                                        className="bg-gray-200 focus-visible:ring-0"
                                    />
                                    <Input
                                        value={config.customText}
                                        onChange={onInputChanged}
                                        placeholder="Field"
                                        name="customText"
                                        className="bg-gray-200 focus-visible:ring-0"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="h-screen">
                    <div className="flex items-center justify-between p-2">
                        <div>
                            <p className="font-medium text-sm">PDF setup and preview</p>
                        </div>
                        <div className="space-x-2">
                            <span>Status</span>
                            <PDFDownloadLink document={<PdfDocument />} fileName="report.pdf">
                                <Button>
                                    <DownloadIcon />
                                    Download
                                </Button>
                            </PDFDownloadLink>
                        </div>
                    </div>
                    <div>
                        <PdfDocument />
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { marginBottom: 10, fontSize: 12 }
});

export default PdfGenerator;
