export interface FormField {
    isTable?: boolean
    fieldLabel: string
    fieldName: string
    fieldType: string
    isSignature?: boolean
    signatureLabels?: string[]
}

export interface SubHeader {
    headerLabel: string
    hasSubHeader: boolean
    fieldType: string
}

export interface TableHeader {
    headerLabel: string
    hasSubHeader: boolean
    fieldType?: string
    subHeader?: SubHeader[]
}

export interface FormSchema {
    formName: string
    formNo: string
    formSchema: FormField[]
}
