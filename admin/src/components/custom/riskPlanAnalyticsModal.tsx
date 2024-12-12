import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface FormSubmission {
  id: number;
  userId: number;
  formId: number;
  response: {
    enter_the_images: Record<string, unknown>;
    description_of_the_control_plan: string;
  };
  user: {
    userId: number;
    username: string;
    email: string;
    phone: string;
  };
}

interface CompletionData {
  noOfSections: number;
  noOfSectionsCompleted: number;
}

const RiskPlanAnalyticsModal: React.FC<{ id: number; open: boolean; onOpenChange: (open: boolean) => void }> = ({ id, open, onOpenChange }) => {
  const [analyticsData, setAnalyticsData] = useState<FormSubmission[]>([]);
  const [completionData, setCompletionData] = useState<CompletionData | null>(null);

  useEffect(() => {
    const fetchAndSetFormResponse = async () => {
      try {
        const res = await axios.get(`/api/data/smp/rs/${id}`);
        if (res.status === 200) {
          setAnalyticsData(res.data);
        }
        const response = await axios.get(`/api/data/smp/ra/${id}`);
        if(response.status === 200){
          setCompletionData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (open) {
      fetchAndSetFormResponse();
    }
  }, [id, open]);

  const pieChartData = completionData ? [
    { name: 'Completed', value: completionData.noOfSectionsCompleted },
    { name: 'Remaining', value: completionData.noOfSections - completionData.noOfSectionsCompleted }
  ] : [];

  const COLORS = ['#0088FE', '#00C49F'];

  const uniqueSubmissions = analyticsData.reduce((acc, submission) => {
    if (!acc.some(item => item.user.email === submission.user.email)) {
      acc.push(submission);
    }
    return acc;
  }, [] as FormSubmission[]);

  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Risk Plan Report</Text>
          <Text style={styles.subtitle}>Form Submissions</Text>
          {uniqueSubmissions.map((submission, index) => (
            <View key={index} style={styles.submissionItem}>
              <Text style={styles.submissionText}>User: {submission.user.username}</Text>
              <Text style={styles.submissionText}>Email: {submission.user.email}</Text>
              <Text style={styles.submissionText}>Description: {submission.response.description_of_the_control_plan}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Risk Plan Report</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="bg-background p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2 text-primary">Section Completion</h3>
            <ChartContainer
              config={{
                completed: {
                  label: "Completed Sections",
                  color: "hsl(var(--chart-1))",
                },
                remaining: {
                  label: "Remaining Sections",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          
          <div className="bg-background p-4 rounded-lg shadow overflow-x-auto">
            <h3 className="text-lg font-semibold mb-2 text-primary">Submission Details</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uniqueSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>{submission.user.username}</TableCell>
                    <TableCell>{submission.user.email}</TableCell>
                    <TableCell>{submission.response.description_of_the_control_plan}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex justify-end">
            <PDFDownloadLink document={<PDFDocument />} fileName="risk_plan_report.pdf">
              {({ blob, url, loading, error }) => 
                <Button className="bg-red-700 text-white hover:bg-primary-dark">
                  {loading ? 'Generating PDF...' : 'Download PDF Report'}
                </Button>
              }
            </PDFDownloadLink>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
  submissionItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  submissionText: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default RiskPlanAnalyticsModal;

