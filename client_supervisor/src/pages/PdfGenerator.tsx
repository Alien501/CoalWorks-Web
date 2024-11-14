import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DownloadIcon, MoveLeftIcon } from "lucide-react";
import { useState } from "react";
import { Document, Text, View, Page, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

const PdfGenerator = () => {
    const [config, setConfig] = useState({
        roundId: true,
        roundTitle: true,
        logo: true,
        taskCompleted: true,
        submittedOn: true,
        submittedBy: true,
        generatedDate: true,
        customCheck: false,
        customText: "",
        customLabel: ""
    });

    const onCheckBoxClicked = (key) => {
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

    const PreviewDocument = () => (
        <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-4">
            <div className="bg-blue-50 p-6 rounded-t-lg border-b-2 border-blue-200">
                {config.logo && (
                    <div className="mb-4">
                        <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center">
                            Company Logo
                        </div>
                    </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                    {config.roundId && (
                        <div className="space-y-1">
                            <span className="text-sm font-semibold text-gray-600">Round ID</span>
                            <p className="text-lg font-bold text-blue-800">12345</p>
                        </div>
                    )}
                    {config.roundTitle && (
                        <div className="space-y-1">
                            <span className="text-sm font-semibold text-gray-600">Round Title</span>
                            <p className="text-lg font-bold text-blue-800">Inspection Round</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6 space-y-6">
                {config.taskCompleted && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Task Completion Status</h3>
                        <div className="flex items-center justify-between">
                            <div className="w-64 h-64">
                                {/* <PieChartComponent/> */}
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-green-600">100%</p>
                                <p className="text-gray-600">35/35 Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                    {config.submittedBy && (
                        <div className="space-y-1">
                            <span className="text-sm font-semibold text-gray-600">Submitted By</span>
                            <p className="text-md text-gray-800">Sunitha Veeramachaneni</p>
                        </div>
                    )}
                    {config.submittedOn && (
                        <div className="space-y-1">
                            <span className="text-sm font-semibold text-gray-600">Submitted On</span>
                            <p className="text-md text-gray-800">3/18/23, 10:00 PM</p>
                        </div>
                    )}
                </div>

                {config.customCheck && config.customLabel && config.customText && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-sm font-semibold text-gray-600">{config.customLabel}</span>
                        <p className="text-md text-gray-800">{config.customText}</p>
                    </div>
                )}
            </div>

            {config.generatedDate && (
                <div className="bg-gray-50 p-4 rounded-b-lg border-t-2 border-gray-200">
                    <p className="text-sm text-gray-600">
                        Generated on: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                    </p>
                </div>
            )}
        </div>
    );

    const PdfDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerSection}>
                    {config.logo && (
                        <View style={styles.logo}>
                            <Text>Company Logo</Text>
                        </View>
                    )}
                    <View style={styles.headerGrid}>
                        {config.roundId && (
                            <View style={styles.headerItem}>
                                <Text style={styles.label}>Round ID</Text>
                                <Text style={styles.value}>12345</Text>
                            </View>
                        )}
                        {config.roundTitle && (
                            <View style={styles.headerItem}>
                                <Text style={styles.label}>Round Title</Text>
                                <Text style={styles.value}>Inspection Round</Text>
                            </View>
                        )}
                    </View>
                </View>

                <View style={styles.mainContent}>
                    {config.taskCompleted && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Task Completion Status</Text>
                            <Text style={styles.completionRate}>100% (35/35 Tasks)</Text>
                        </View>
                    )}

                    <View style={styles.submissionDetails}>
                        {config.submittedBy && (
                            <View style={styles.detailItem}>
                                <Text style={styles.label}>Submitted By</Text>
                                <Text style={styles.value}>Sunitha Veeramachaneni</Text>
                            </View>
                        )}
                        {config.submittedOn && (
                            <View style={styles.detailItem}>
                                <Text style={styles.label}>Submitted On</Text>
                                <Text style={styles.value}>3/18/23, 10:00 PM</Text>
                            </View>
                        )}
                    </View>

                    {config.customCheck && config.customLabel && config.customText && (
                        <View style={styles.customSection}>
                            <Text style={styles.label}>{config.customLabel}</Text>
                            <Text style={styles.value}>{config.customText}</Text>
                        </View>
                    )}
                </View>

                {config.generatedDate && (
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Generated on: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                        </Text>
                    </View>
                )}
            </Page>
        </Document>
    );

    return (
        <div className="pdf-gen-wrapper">
            <div className="pdf-gen-header w-full h-14 flex items-center">
                <Button id="back-button" variant="ghost">
                    <MoveLeftIcon />
                </Button>
                <Label htmlFor="back-button">Back</Label>
            </div>
            <div className="grid grid-cols-[30%_70%] w-full items-start justify-between bg-slate-50 p-2">
                <div className="h-screen p-4 bg-white rounded-lg shadow-sm">
                    <div className="mb-4">
                        <h1 className="font-medium text-lg text-gray-800">Configuration</h1>
                    </div>
                    <hr className="mb-4" />
                    <div className="space-y-4">
                        <div>
                            <h2 className="font-semibold text-sm mb-2">Header</h2>
                            <div className="p-2 space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={config.roundId}
                                        onCheckedChange={() => onCheckBoxClicked('roundId')}
                                        id="round-id"
                                    />
                                    <Label htmlFor="round-id">Round Id</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox checked={config.roundTitle} onCheckedChange={() => onCheckBoxClicked('roundTitle')} id="round-title" />
                                    <Label htmlFor="round-title">Round Title</Label>
                                </div>
                            </div>
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
                    </div>
                </div>

                <div className="h-screen overflow-y-auto p-4">
                    <div className="flex items-center justify-between mb-4">
                        <p className="font-medium text-lg text-gray-800">PDF Preview</p>
                        <div className="space-x-2">
                            <span className="text-green-600 font-medium">Ready to download</span>
                            <PDFDownloadLink document={<PdfDocument />} fileName="report.pdf">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    <DownloadIcon className="mr-2 h-4 w-4" />
                                    Download PDF
                                </Button>
                            </PDFDownloadLink>
                        </div>
                    </div>
                    <PreviewDocument />
                </div>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: '#ffffff'
    },
    headerSection: {
        backgroundColor: '#F0F7FF',
        padding: 20,
        marginBottom: 20,
        borderRadius: 8,
    },
    logo: {
        width: 120,
        height: 40,
        backgroundColor: '#E5E7EB',
        marginBottom: 15,
        padding: 10,
        borderRadius: 4,
    },
    headerGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerItem: {
        width: '48%',
    },
    mainContent: {
        marginVertical: 20,
    },
    section: {
        backgroundColor: '#F9FAFB',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1F2937',
    },
    completionRate: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#059669',
    },
    submissionDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F9FAFB',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
    },
    detailItem: {
        width: '48%',
    },
    label: {
        fontSize: 12,
        color: '#4B5563',
        marginBottom: 4,
    },
    value: {
        fontSize: 14,
        color: '#1F2937',
        fontWeight: 'medium',
    },
    customSection: {
        backgroundColor: '#F9FAFB',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 10,
    },
    footerText: {
        fontSize: 10,
        color: '#6B7280',
    },
});

export default PdfGenerator;