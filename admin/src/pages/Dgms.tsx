import React, { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  FileUp, 
  Download, 
  Trash2, 
  FileText 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from 'sonner';
import axios from 'axios';

// Types for DGMS File
interface DgmsFile {
  id: number;
  name: string;
  path: string;
  uploadedAt?: Date;
}

const Dgms: React.FC = () => {
  const [files, setFiles] = useState<DgmsFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [books, setBooks] = useState([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file first",
        variant: "destructive"
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setUploadProgress(0);
    const response = await axios.post('/api/data/dgms', formData)
      if (!response.status) {
        throw new Error('File upload failed');
      }

      const newFile = response.data;
      setFiles(prevFiles => [...prevFiles, newFile]);
      

      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setUploadProgress(i);
      }

      toast.success("Uploaded successfully!")

      setSelectedFile(null);
    } catch (error) {
        toast.error("Something went wrong!")
    }
  };


  const handleFileDownload = async (fileId: number) => {
    try {
      const response = await fetch(`/api/data/dgms/${fileId}/download`);
      if (!response.ok) {
        throw new Error('Download failed');
      }
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'downloaded-file';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
        toast.error("Something went wrong!")
    }
  };

  const handleFileDelete = async (fileId: number) => {
    try {
      const response = await fetch(`/api/data/dgms/${fileId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('File deletion failed');
      }

      setFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));

      toast.success("File deleted successfully!")
    } catch (error) {
        toast.error("Something went wrong!")
    }
  };

  useEffect(() => {
    const fetchAndSetBooks = async () => {
      try {
        const res = await axios.get('/api/data/dgms');
        if(res.status === 200) {
          setFiles(res.data);
        }
      } catch (error) {
        console.log(error); 
      }
    }

    fetchAndSetBooks();
  }, [])

  return (
    <section id="dgms-guide-line" className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>DGMS File Management</CardTitle>
          <CardDescription>
            Upload, manage, and download your DGMS files
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* File Upload Section */}
          <div className="flex items-center space-x-4 mb-6">
            <Input 
              type="file" 
              onChange={handleFileSelect}
              className="flex-grow"
            />
            <Button 
              onClick={handleFileUpload} 
              disabled={!selectedFile}
              className="flex items-center gap-2"
            >
              <FileUp className="w-4 h-4" />
              Upload
            </Button>
          </div>

          {/* Upload Progress */}
          {uploadProgress > 0 && (
            <div className="mb-4">
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}

          {/* File List */}
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>File Name</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {files.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-500" />
                      {file.name}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleFileDownload(file.id)}
                        >
                          <Download className="w-4 h-4 mr-2" /> Download
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleFileDelete(file.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}

export default Dgms;