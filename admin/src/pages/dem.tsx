import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, CheckCircle, Loader2, Moon, Sun, MapPin, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { useTheme } from '../components/custom/theme';

interface UploadedFile {
    file: File;
    id: string;
    status: 'uploading' | 'success' | 'error';
    progress: number;
    error?: string;
}

interface ReportResponse {
    report: {
        executive_summary: string;
        terrain_overview: string;
        high_risk_zones: any[];
        medium_risk_zones: any[];
        low_risk_zones: any[];
        contributing_factors: string[];
        recommended_mitigation: string[];
        alert_level: string;
    };
    risk_map_url: string;
    analysis_output_dir: string;
    message: string;
}

const DEMPage = () => {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [sensorData, setSensorData] = useState('');
    const [environmentalData, setEnvironmentalData] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [reportData, setReportData] = useState<ReportResponse | null>(null);
    const { isDarkMode, toggleTheme } = useTheme();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const newFile: UploadedFile = {
                file,
                id: Math.random().toString(36).substr(2, 9),
                status: 'success',
                progress: 100
            };

            setUploadedFiles([newFile]);
            toast.success(`${file.name} ready for processing`);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/tiff': ['.tif', '.tiff']
        },
        multiple: false,
        maxSize: 50 * 1024 * 1024 // 50MB for TIF files
    });

    const handleUploadAndProcess = async () => {
        if (!sensorData.trim() || !environmentalData.trim()) {
            toast.error('Please fill in both sensor data and environmental data fields');
            return;
        }

        if (uploadedFiles.length === 0) {
            toast.error('Please upload a TIF file first');
            return;
        }

        setIsProcessing(true);
        setReportData(null);

        try {
            const formData = new FormData();
            formData.append('file', uploadedFiles[0].file);
            formData.append('sensor_data', sensorData);
            formData.append('environmental_data', environmentalData);

            const response = await fetch('/api/data/dem/process', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result: ReportResponse = await response.json();
                setReportData(result);
                toast.success('Analysis completed successfully!');
            } else {
                throw new Error('Processing failed');
            }
        } catch (error) {
            toast.error('Failed to process the file');
            console.error('Processing error:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const removeFile = (id: string) => {
        setUploadedFiles(prev => prev.filter(f => f.id !== id));
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const getFileIcon = (file: File) => {
        const type = file.type;
        if (type.includes('image')) return '🖼️';
        if (type.includes('pdf')) return '📄';
        if (type.includes('sheet') || type.includes('excel')) return '📊';
        if (type.includes('csv')) return '📈';
        return '📁';
    };

    return (
        <div className="container mx-auto p-6 space-y-6 bg-background text-foreground min-h-screen">
            <div className="flex justify-between items-center">
                <div className="text-center space-y-2 flex-1">
                    <h1 className="text-3xl font-bold text-foreground">DEM File Upload</h1>
                    <p className="text-muted-foreground">Upload your files for processing and analysis</p>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="ml-4 transition-all duration-200 hover:scale-105"
                    title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {isDarkMode ? (
                        <Sun className="h-4 w-4 transition-transform duration-200" />
                    ) : (
                        <Moon className="h-4 w-4 transition-transform duration-200" />
                    )}
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upload Section */}
                <Card className="shadow-lg border-border">
                    <CardHeader className="bg-muted/20">
                        <CardTitle className="flex items-center gap-2 text-foreground">
                            <Upload className="h-5 w-5 text-primary" />
                            File Upload
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div
                            {...getRootProps()}
                            className={`
                                border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300
                                ${isDragActive 
                                    ? 'border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg' 
                                    : 'border-border hover:border-primary/50 hover:bg-muted/20'
                                }
                                ${isProcessing ? 'pointer-events-none opacity-50' : ''}
                            `}
                        >
                            <input {...getInputProps()} />
                            <div className="space-y-4">
                                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                                    <Upload className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-lg font-medium text-foreground">
                                        {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        or click to select files
                                    </p>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    Supports: TIF files only (Max 50MB)
                                </div>
                            </div>
                        </div>

                        {/* File List */}
                        {uploadedFiles.length > 0 && (
                            <div className="space-y-2">
                                <h3 className="font-medium text-foreground">Uploaded File</h3>
                                <div className="space-y-2">
                                    {uploadedFiles.map((fileItem) => (
                                        <div
                                            key={fileItem.id}
                                            className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border"
                                        >
                                            <div className="text-2xl">
                                                {getFileIcon(fileItem.file)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-foreground truncate">
                                                    {fileItem.file.name}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {formatFileSize(fileItem.file.size)}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeFile(fileItem.id)}
                                                    className="h-6 w-6 p-0 hover:bg-destructive/10"
                                                >
                                                    <X className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Fields */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="sensor-data" className="text-foreground">
                                    Sensor Data *
                                </Label>
                                <Textarea
                                    id="sensor-data"
                                    placeholder="Enter sensor readings summary (e.g., rainfall, seismic activity)"
                                    value={sensorData}
                                    onChange={(e) => setSensorData(e.target.value)}
                                    className="min-h-[80px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="environmental-data" className="text-foreground">
                                    Environmental Data *
                                </Label>
                                <Textarea
                                    id="environmental-data"
                                    placeholder="Enter environmental data details"
                                    value={environmentalData}
                                    onChange={(e) => setEnvironmentalData(e.target.value)}
                                    className="min-h-[80px]"
                                />
                            </div>
                            <Button
                                onClick={handleUploadAndProcess}
                                disabled={!sensorData.trim() || !environmentalData.trim() || uploadedFiles.length === 0 || isProcessing}
                                className="w-full"
                            >
                                {isProcessing ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="mr-2 h-4 w-4" />
                                        Process File
                                    </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Output Window */}
                <Card className="shadow-lg border-border">
                    <CardHeader className="bg-muted/20">
                        <CardTitle className="flex items-center gap-2 text-foreground">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            Analysis Results
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isProcessing ? (
                            <div className="h-96 bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Loader2 className="h-10 w-10 text-primary animate-spin" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-foreground">
                                            Processing DEM Analysis
                                        </p>
                                        <p className="text-sm text-muted-foreground/70">
                                            Analyzing terrain data and generating risk assessment...
                                        </p>
                                    </div>
                                    <div className="w-48 mx-auto">
                                        <Progress value={undefined} className="h-2" />
                                    </div>
                                </div>
                            </div>
                        ) : reportData ? (
                            <div className="space-y-4 max-h-96 overflow-y-auto">
                                {/* Executive Summary */}
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <h3 className="font-semibold text-foreground mb-2">Executive Summary</h3>
                                    <p className="text-sm text-muted-foreground">{reportData.report.executive_summary}</p>
                                </div>

                                {/* Alert Level */}
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <h3 className="font-semibold text-foreground mb-2">Alert Level</h3>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                        reportData.report.alert_level === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                        reportData.report.alert_level === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                    }`}>
                                        {reportData.report.alert_level}
                                    </div>
                                </div>

                                {/* Risk Zones */}
                                {reportData.report.medium_risk_zones.length > 0 && (
                                    <div className="p-4 bg-muted/50 rounded-lg">
                                        <h3 className="font-semibold text-foreground mb-2">Medium Risk Zones</h3>
                                        <div className="space-y-2">
                                            {reportData.report.medium_risk_zones.map((zone, index) => (
                                                <div key={index} className="p-3 bg-background rounded border">
                                                    <h4 className="font-medium text-foreground">{zone.region}</h4>
                                                    <p className="text-xs text-muted-foreground mb-2">Risk Factors: {zone.risk_factors.join(', ')}</p>
                                                    <p className="text-xs text-muted-foreground">Actions: {zone.suggested_actions.join(', ')}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Contributing Factors */}
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <h3 className="font-semibold text-foreground mb-2">Contributing Factors</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {reportData.report.contributing_factors.map((factor, index) => (
                                            <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                                {factor}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Recommended Mitigation */}
                                <div className="p-4 bg-muted/50 rounded-lg">
                                    <h3 className="font-semibold text-foreground mb-2">Recommended Mitigation</h3>
                                    <ul className="space-y-1">
                                        {reportData.report.recommended_mitigation.map((action, index) => (
                                            <li key={index} className="text-sm text-muted-foreground flex items-start">
                                                <span className="mr-2">•</span>
                                                {action}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Risk Map */}
                                {reportData.risk_map_url && (
                                    <div className="p-4 bg-muted/50 rounded-lg">
                                        <h3 className="font-semibold text-foreground mb-2">Risk Map</h3>
                                        <img 
                                            src={reportData.risk_map_url} 
                                            alt="Risk Map" 
                                            className="w-full h-48 object-cover rounded border"
                                        />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="h-96 bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                                <div className="text-center space-y-2">
                                    <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                                        <MapPin className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-muted-foreground">
                                            Analysis Results
                                        </p>
                                        <p className="text-sm text-muted-foreground/70">
                                            Upload a TIF file and fill the required fields to start analysis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DEMPage;