"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { TableHeader as TableHeaderType } from "./form"

interface DynamicTableProps {
  tableHeader: TableHeaderType[]
  onDataChange: (data: any[]) => void
}

export function DynamicTable({ tableHeader = [], onDataChange }: DynamicTableProps) {
  const [rows, setRows] = useState<any[]>([{}])

  const addRow = () => {
    setRows([...rows, {}])
    onDataChange([...rows, {}])
  }

  const updateRow = (rowIndex: number, columnId: string, value: string) => {
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, [columnId]: value }
      }
      return row
    })
    setRows(updatedRows)
    onDataChange(updatedRows)
  }

  const renderTableHeaders = (headers: TableHeaderType[]) => {
    return headers.map((header, index) => (
      <TableHead key={index} colSpan={header.hasSubHeader ? header.subHeader?.length : 1}>
        {header.headerLabel}
      </TableHead>
    ))
  }
  
  const renderSubHeaders = (headers: TableHeaderType[]) => {
    return headers.map((header) =>
      header.hasSubHeader && header.subHeader
        ? header.subHeader.map((subHeader, subIndex) => (
            <TableCell key={`${header.headerLabel}_${subIndex}`}>
              {subHeader.headerLabel}
            </TableCell>
          ))
        : <TableCell key={header.headerLabel}></TableCell>
    )
  }
  

  const renderInputCells = (rowIndex: number, headers: TableHeaderType[]) => {
    return headers.flatMap((header) =>
      header.hasSubHeader && header.subHeader
        ? header.subHeader.map((subHeader, subIndex) => (
            <TableCell key={`${header.headerLabel}_${subIndex}`}>
              <Input
                type={subHeader.fieldType === "number" ? "number" : "text"}
                value={rows[rowIndex][`${header.headerLabel}_${subHeader.headerLabel}`] || ""}
                onChange={(e) =>
                  updateRow(rowIndex, `${header.headerLabel}_${subHeader.headerLabel}`, e.target.value)
                }
              />
            </TableCell>
          ))
        : [
            <TableCell key={header.headerLabel}>
              <Input
                type={header.fieldType === "number" ? "number" : "text"}
                value={rows[rowIndex][header.headerLabel] || ""}
                onChange={(e) => updateRow(rowIndex, header.headerLabel, e.target.value)}
              />
            </TableCell>
          ]
    )
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>{renderTableHeaders(tableHeader)}</TableRow>
            <TableRow>{renderSubHeaders(tableHeader)}</TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((_, rowIndex) => (
              <TableRow key={rowIndex}>{renderInputCells(rowIndex, tableHeader)}</TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button onClick={addRow} variant="outline" className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add Row
      </Button>
    </div>
  )
}
