import { useState } from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, pdf } from '@react-pdf/renderer'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const styles = StyleSheet.create({
  page: { 
    padding: 25, 
    fontFamily: 'Helvetica',
    backgroundColor: '#F5F5F5'
  },
  header: {
    backgroundColor: '#000',
    color: '#FFFFFF',
    padding: 15,
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 5
  },
  companyName: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  section: { 
    margin: 10, 
    padding: 10, 
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 15
  },
  title: { 
    fontSize: 20, 
    marginBottom: 10, 
    fontWeight: 'bold', 
    color: '#2C3E50' 
  },
  subtitle: { 
    fontSize: 16, 
    marginBottom: 10, 
    fontWeight: 'bold', 
    color: '#34495E' 
  },
  text: { 
    fontSize: 12, 
    marginBottom: 5,
    color: '#2C3E50' 
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 5,
    marginVertical: 10,
  },
  tableHeader: {
    backgroundColor: '#3498DB',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#2980B9',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7',
    borderBottomStyle: 'solid',
    backgroundColor: '#F8F9FA'
  },
  tableCol: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#BDC3C7',
    borderRightStyle: 'solid',
    padding: 5,
  },
  tableHeaderCell: {
    margin: 5,
    fontSize: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
    textAlign: 'center',
    color: '#2C3E50'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#7F8C8D'
  }
})

const PDFGenerator = (
  {
    planName,
    planDescription,
    notes,
    tasks,
    questions
  }: {
    planName: string,
    planDescription: string,
    notes: string,
    tasks: any[],
    questions: any[]
  }
) => {
  const [selectedFields, setSelectedFields] = useState({
    planName: true,
    planDescription: true,
    notes: true,
    sections: true,
    companyName: true
  })
  const [companyName, setCompanyName] = useState('Your Company Name')

  const groupBySection = (items: any[]) => {
    return items.reduce((acc, item) => {
      const sectionId = item.sectionId;
      if (!acc[sectionId]) {
        acc[sectionId] = [];
      }
      acc[sectionId].push(item);
      return acc;
    }, {});
  }

  const groupedTasks = groupBySection(tasks);
  const groupedQuestions = groupBySection(questions);

  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {selectedFields.companyName && (
          <View style={styles.header}>
            <Text style={styles.companyName}>{companyName}</Text>
          </View>
        )}
        
        {selectedFields.planName && (
          <View style={styles.section}>
            <Text style={styles.title}>Plan Name</Text>
            <Text style={styles.text}>{planName || "Plan Name"}</Text>
          </View>
        )}
        
        {selectedFields.planDescription && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Description</Text>
            <Text style={styles.text}>{planDescription || "Plan Description"}</Text>
          </View>
        )}
        
        {selectedFields.notes && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Notes</Text>
            <Text style={styles.text}>{notes || "Notes"}</Text>
          </View>
        )}
        
        {selectedFields.sections && (
          <View style={styles.section}>
            <Text style={styles.title}>Sections</Text>
            {Object.keys(groupedTasks).map((sectionId, index) => (
              <View key={sectionId} style={styles.section}>
                <Text style={styles.subtitle}>Section {index + 1}</Text>
                
                {groupedTasks[sectionId].length > 0 && (
                  <>
                    <Text style={styles.text}>Tasks:</Text>
                    <View style={styles.table}>
                      <View style={styles.tableHeader}>
                        <View style={styles.tableCol}><Text style={styles.tableHeaderCell}>Task Name</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableHeaderCell}>Response Type</Text></View>
                      </View>
                      {groupedTasks[sectionId].map((task: any, taskIndex: number) => (
                        <View style={styles.tableRow} key={taskIndex}>
                          <View style={styles.tableCol}><Text style={styles.tableCell}>{task.name}</Text></View>
                          <View style={styles.tableCol}><Text style={styles.tableCell}>{task.responseType}</Text></View>
                        </View>
                      ))}
                    </View>
                  </>
                )}
                
                {groupedQuestions[sectionId] && groupedQuestions[sectionId].length > 0 && (
                  <>
                    <Text style={styles.text}>Questions:</Text>
                    <View style={styles.table}>
                      <View style={styles.tableHeader}>
                        <View style={styles.tableCol}><Text style={styles.tableHeaderCell}>Question</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableHeaderCell}>Response Type</Text></View>
                      </View>
                      {groupedQuestions[sectionId].map((question: any, questionIndex: number) => (
                        <View style={styles.tableRow} key={questionIndex}>
                          <View style={styles.tableCol}><Text style={styles.tableCell}>{question.name}</Text></View>
                          <View style={styles.tableCol}><Text style={styles.tableCell}>{question.responseType}</Text></View>
                        </View>
                      ))}
                    </View>
                  </>
                )}
              </View>
            ))}
          </View>
        )}
        
        <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
          `Page ${pageNumber} of ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  )

  const handleDownload = async () => {
    const blob = await pdf(<PDFDocument />).toBlob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'report.pdf'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/3 space-y-4">
        <h2 className="text-2xl font-bold">Select Fields to Include</h2>
        {Object.entries(selectedFields).map(([field, isChecked]) => (
          <div key={field} className="flex items-center space-x-2">
            <Checkbox
              id={field}
              checked={isChecked}
              onCheckedChange={() => setSelectedFields(prev => ({ ...prev, [field]: !prev[field] }))}
            />
            <Label htmlFor={field} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Label>
          </div>
        ))}
        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-sm font-medium leading-none">
            Company Name
          </Label>
          <Input
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>
        <Button onClick={handleDownload}>Download PDF</Button>
      </div>
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Preview</h2>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <PDFViewer width="100%" height="600px">
            <PDFDocument />
          </PDFViewer>
        </div>
      </div>
    </div>
  )
}

export default PDFGenerator