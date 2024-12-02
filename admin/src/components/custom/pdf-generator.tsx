import React, { useState, useEffect } from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, pdf } from '@react-pdf/renderer'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  title: { fontSize: 24, marginBottom: 10, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginBottom: 10, fontWeight: 'bold' },
  text: { fontSize: 12, marginBottom: 5 },
  table: { display: 'table', width: 'auto', borderStyle: 'solid', borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 },
  tableRow: { margin: 'auto', flexDirection: 'row' },
  tableCol: { width: '25%', borderStyle: 'solid', borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
  tableCell: { margin: 'auto', marginTop: 5, fontSize: 10 }
})

const PDFGenerator = () => {
  const [selectedFields, setSelectedFields] = useState({
    planName: true,
    planDescription: true,
    workArea: true,
    notes: true,
    sections: true,
    companyName: true
  })
  const [companyName, setCompanyName] = useState('Your Company Name')
  const [planDetail, setPlanDetail] = useState<any>({})
  const [roundDetail, setRoundDetail] = useState<any[]>([])

  useEffect(() => {
    const storedPlanDetail = localStorage.getItem('planDetail')
    const storedRoundDetail = localStorage.getItem('roundDetail')
    
    if (storedPlanDetail) {
      setPlanDetail(JSON.parse(storedPlanDetail))
    }
    if (storedRoundDetail) {
      setRoundDetail(JSON.parse(storedRoundDetail))
    }
  }, [])

  const handleCheckboxChange = (field: string) => {
    setSelectedFields(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {selectedFields.companyName && (
          <View style={styles.section}>
            <Text style={styles.title}>{companyName}</Text>
          </View>
        )}
        {selectedFields.planName && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Plan Name: {planDetail.planName}</Text>
          </View>
        )}
        {selectedFields.planDescription && (
          <View style={styles.section}>
            <Text style={styles.text}>Description: {planDetail.planDescription}</Text>
          </View>
        )}
        {selectedFields.workArea && (
          <View style={styles.section}>
            <Text style={styles.text}>Work Area: {planDetail.workArea}</Text>
          </View>
        )}
        {selectedFields.notes && (
          <View style={styles.section}>
            <Text style={styles.text}>Notes: {planDetail.notes}</Text>
          </View>
        )}
        {selectedFields.sections && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Sections:</Text>
            {roundDetail.map((section: any, index: number) => (
              <View key={index} style={styles.section}>
                <Text style={styles.text}>Section {index + 1}: {section.name}</Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}><Text style={styles.tableCell}>Task Name</Text></View>
                    <View style={styles.tableCol}><Text style={styles.tableCell}>Description</Text></View>
                    <View style={styles.tableCol}><Text style={styles.tableCell}>Response Type</Text></View>
                  </View>
                  {section.tasks.map((task: any, taskIndex: number) => (
                    <View style={styles.tableRow} key={taskIndex}>
                      <View style={styles.tableCol}><Text style={styles.tableCell}>{task.name}</Text></View>
                      <View style={styles.tableCol}><Text style={styles.tableCell}>{task.description}</Text></View>
                      <View style={styles.tableCol}><Text style={styles.tableCell}>{task.responseType}</Text></View>
                    </View>
                  ))}
                </View>
                <Text style={styles.text}>Questions:</Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}><Text style={styles.tableCell}>Question</Text></View>
                    <View style={styles.tableCol}><Text style={styles.tableCell}>Response Type</Text></View>
                  </View>
                  {section.questions.map((question: any, questionIndex: number) => (
                    <View style={styles.tableRow} key={questionIndex}>
                      <View style={styles.tableCol}><Text style={styles.tableCell}>{question.name}</Text></View>
                      <View style={styles.tableCol}><Text style={styles.tableCell}>{question.responseType}</Text></View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
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
              onCheckedChange={() => handleCheckboxChange(field)}
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

