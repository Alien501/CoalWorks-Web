import { DynamicFormBuilder } from "@/components/forms/dynamic-form-builder";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export const formData = [
    {
        "formName": "Shift-wise Production Report (Under Ground)",
        "formNo": "Form 1-A",
        "formSchema": [
            {
                "isTable": false,
                "fieldLabel": "Name of subsidary",
                "fieldName": "nameOfSubsidary",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Area",
                "fieldName": "nameOfArea",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Mine",
                "fieldName": "nameOfMine",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the pit/incline",
                "fieldName": "nameOfThePitOrIncline",
                "fieldType": "text"
            },
            {
                "fieldLabel": "Departmental/Contractual",
                "fieldName": "departmental",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Contratcor",
                "fieldName": "nameOfTheContractor",
                "fieldType": "date"
            },
            {
                "isTable": false,
                "fieldLabel": "Shift",
                "fieldName": "shift",
                "fieldType": "text"
            },
            {
                "isTable": true,
                "tableHeader": [
                    {
                        "headerLabel": "Name of the seam and District",
                        "hasSubHeader": false,
                        "fieldType": "string"
                    },
                    {
                        "headerLabel": "No. of P/R Loader",
                        "hasSubHeader": false,
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "SDL/LHD/Cont. Miner/LW/Other",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "hasSubHeader": false,
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name/No.",
                                "hasSubHeader": false,
                                "fieldType": "number"
                            }
                        ]
                    },
                    {
                        "headerLabel": "Hours",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "Working",
                                "hasSubHeader": false,
                                "fileldType": "number"
                            },
                            {
                                "headerLabel": "BD",
                                "hasSubHeader": false,
                                "fileldType": "number"
                            },
                            {
                                "headerLabel": "IDLE",
                                "hasSubHeader": false,
                                "fileldType": "number"
                            }
                        ]
                    },
                    {
                        "headerLabel": "Shot firing Detail",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "name of the face",
                                "hasSubHeader": false,
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "No. of Hole blasted",
                                "hasSubHeader": false,
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Explosive blasted(kg)",
                                "hasSubHeader": false,
                                "fieldType": "number"
                            }
                        ]
                    },
                    {
                        "headerLabel": "Production",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "TUB/Mine Car Nos.",
                                "hasSubheader": false,
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "SKIP Nos.",
                                "hasSubheader": false,
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "BELTCONV",
                                "hasSubheader": false,
                                "fieldType": "number"
                            }
                        ]
                    },
                    {
                        "headerLabel": "TUB/Mine Car Factor",
                        "hasSubHeader": false,
                        "fieldType": "text"
                    },
                    {
                        "headerLabel": "Total Production (in Te)",
                        "hasSubHeader": false,
                        "fieldType": "text"
                    },
                    {
                        "headerLabel": "Roof Bolting (Nos)",
                        "hasSubHeader": false,
                        "fieldType": "text"
                    }
                ]
            },
            {
                "isTable": false,
                "fieldLabel": "Remarks",
                "fieldName": "remark",
                "fieldType": "textarea"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": ["overman", "Shift Inch", "Shift Engineer/Foreman"],
                "fieldLabel": "image"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": ["Shift Engineer/Foreman"],
                "fieldLabel": "image"
            }
        ]
    },
    {
        "formName": "Shift-wise Production Report (Opencast, Overburden) Departmental",
        "formNo": "Form 1-B",
        "formSchema": [
            {
                "isTable": false,
                "fieldLabel": "Name of Subsidiary",
                "fieldName": "nameOfSubsidiary",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Area",
                "fieldName": "nameOfArea",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Mine",
                "fieldName": "nameOfMine",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Pit/Patch",
                "fieldName": "nameOfPitOrPatch",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Date",
                "fieldName": "date",
                "fieldType": "date"
            },
            {
                "isTable": false,
                "fieldLabel": "Shift",
                "fieldName": "shift",
                "fieldType": "text"
            },
            {
                "isTable": true,
                "tableHeader": [
                    {
                        "headerLabel": "Excavator",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name / No.",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "Bench No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Hours",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Working",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "BD",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Idle",
                                        "fieldType": "number"
                                    }
                                ]
                            },
                            {
                                "headerLabel": "OB Quantity (Cum)",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Solid",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Rehandling",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Total",
                                        "fieldType": "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "headerLabel": "Dragline",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name / No.",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "Bench No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Hours",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Working",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "BD",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Idle",
                                        "fieldType": "number"
                                    }
                                ]
                            },
                            {
                                "headerLabel": "Bucket Capacity (Cu.m)",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Avg. No. of Operating cycle (Nos. / Hr.)",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "OB Quantity (Cum)",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Solid",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Rehandling",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Total",
                                        "fieldType": "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "headerLabel": "Dumper / Tipper",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name / No.",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "Bench No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Hours",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Working",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "BD",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Idle",
                                        "fieldType": "number"
                                    }
                                ]
                            },
                            {
                                "headerLabel": "Dumper Factor",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Trips Nos",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "OB Quantity (cum)",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Solid",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Rehandling",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Total",
                                        "fieldType": "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "headerLabel": "Drill",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name / No.",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "Bench No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Drilling",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "No. of Shot holes drilled",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Drilling meter",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Total",
                                        "fieldType": "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "headerLabel": "Explosive",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Bench",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "No. of holes charged",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "No. of holes blasted",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Explosive charged",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Explosive blasted",
                                "fieldType": "number"
                            }
                        ]
                    }
                ]
            },
            {
                "isTable": false,
                "fieldLabel": "Remarks",
                "fieldName": "remarks",
                "fieldType": "textarea"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": ["Overman", "Shift Inch Designation", "Shift Engineer/Foreman"],
                "fieldLabel": "Authorized representative of contractor"
            }
        ]
    },
    {
        "formName": "Shift-wise Production Report (Opencast, Overburden) Outsourced Patch",
        "formNo": "Form 1-C",
        "formSchema": [
            {
                "isTable": false,
                "fieldLabel": "Name of Subsidiary",
                "fieldName": "nameOfSubsidiary",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Area",
                "fieldName": "nameOfArea",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Mine",
                "fieldName": "nameOfMine",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Pit/Patch",
                "fieldName": "nameOfPitOrPatch",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Contractor",
                "fieldName": "nameOfContractor",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Date",
                "fieldName": "date",
                "fieldType": "date"
            },
            {
                "isTable": false,
                "fieldLabel": "Shift",
                "fieldName": "shift",
                "fieldType": "text"
            },
            {
                "isTable": true,
                "tableHeader": [
                    {
                        "headerLabel": "Excavator",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name / No.",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "Bench No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "OB Quantity (cu meter)",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Solid",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Rehandling",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Total",
                                        "fieldType": "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "headerLabel": "Dumper/Tipper",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name / No.",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "Bench No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Dumper Factor",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Trips Nos",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "OB Quantity (cum)",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "Solid",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Rehandling",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Total",
                                        "fieldType": "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "headerLabel": "Drill",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Name / No.",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "Bench No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Drilling",
                                "hasSubHeader": true,
                                "subHeader": [
                                    {
                                        "headerLabel": "No. of Shot holes drilled",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Drilling meter",
                                        "fieldType": "number"
                                    },
                                    {
                                        "headerLabel": "Total",
                                        "fieldType": "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "headerLabel": "Explosive",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "SI No.",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Bench",
                                "fieldType": "text"
                            },
                            {
                                "headerLabel": "No. of holes charged",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "No. of holes blasted",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Explosive charged",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Explosive blasted",
                                "fieldType": "number"
                            }
                        ]
                    }
                ]
            },
            {
                "isTable": false,
                "fieldLabel": "Remarks",
                "fieldName": "remarks",
                "fieldType": "textarea"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": [
                    "Overman",
                    "Foreman",
                    "Shift Inch (Designation)",
                    "Authorized representative of contractor"
                ],
                "fieldLabel": "Authorized representative of contractor"
            }
        ]
    },
    {
        "formName": "Shift-wise Production Report (Opencast, Coal) Departmental",
        "formNo": "Form 1-D",
        "formSchema": [
            {
                "isTable": false,
                "fieldLabel": "Name of Subsidiary",
                "fieldName": "nameOfSubsidiary",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Area",
                "fieldName": "nameOfArea",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Mine",
                "fieldName": "nameOfMine",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Pit/Patch",
                "fieldName": "nameOfPitOrPatch",
                "fieldType": "text"
            },
            {
                "fieldLabel": "Date",
                "fieldName": "date",
                "fieldType": "date"
            },
            {
                "isTable": false,
                "fieldLabel": "Shift",
                "fieldName": "shift",
                "fieldType": "text"
            },
            {
                "isTable": true,
                "tableHeader": [
                    {
                        "headerLabel": "SI No.",
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "Name / No.",
                        "fieldType": "string"
                    },
                    {
                        "headerLabel": "Bench No.",
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "Hours",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "Working",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "BD",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Idle",
                                "fieldType": "number"
                            }
                        ]
                    },
                    {
                        "headerLabel": "Coal Quantity",
                        "fieldType": "number"
                    }
                ]
            },
            {
                "isTable": false,
                "fieldLabel": "Remarks",
                "fieldName": "remarks",
                "fieldType": "textarea"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": ["Overman", "Shift Inch Designation", "Shift Engineer/Foreman"],
                "fieldLabel": "Authorized representative of contractor"
            }
        ]
    },
    {
        "formName": "Shift-wise Production Report (Opencast, Coal) Outsourced",
        "formNo": "Form 1-E",
        "formSchema": [
            {
                "isTable": false,
                "fieldLabel": "Name of Subsidiary",
                "fieldName": "nameOfSubsidiary",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Area",
                "fieldName": "nameOfArea",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Mine",
                "fieldName": "nameOfMine",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Pit/Patch",
                "fieldName": "nameOfPitOrPatch",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Contractor",
                "fieldName": "nameOfContractor",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Date",
                "fieldName": "date",
                "fieldType": "date"
            },
            {
                "isTable": false,
                "fieldLabel": "Shift",
                "fieldName": "shift",
                "fieldType": "text"
            },
            {
                "isTable": true,
                "tableHeader": [
                    {
                        "headerLabel": "SI No.",
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "Name / No.",
                        "fieldType": "string"
                    },
                    {
                        "headerLabel": "Bench No.",
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "Coal Quantity (Te)",
                        "fieldType": "number"
                    }
                ]
            },
            {
                "isTable": false,
                "fieldLabel": "Remarks",
                "fieldName": "remarks",
                "fieldType": "textarea"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": ["Overman", "Shift Inch Designation", "Shift Engineer/Foreman", "Authorized representative of contractor"],
                "fieldLabel": "Authorized representative of contractor"
            }
        ]
    },
    {
        "formName": "Shift Report – Washery / Deshaling Plant",
        "formNo": "Form 1-F",
        "formSchema": [
            {
                "isTable": false,
                "fieldLabel": "Name of Subsidiary",
                "fieldName": "nameOfSubsidiary",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Area",
                "fieldName": "nameOfArea",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Washery / Deshaling Plant",
                "fieldName": "nameOfWasheryOrDeshalingPlant",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Departmental/Contractual",
                "fieldName": "departmentalOrContractual",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Contractor",
                "fieldName": "nameOfTheContractor",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Date",
                "fieldName": "date",
                "fieldType": "date"
            },
            {
                "isTable": false,
                "fieldLabel": "Shift",
                "fieldName": "shift",
                "fieldType": "text"
            },
            {
                "isTable": true,
                "tableHeader": [
                    {
                        "headerLabel": "Colliery",
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "Grade of Coal",
                        "fieldType": "text"
                    },
                    {
                        "headerLabel": "Quantity received (Te)",
                        "fieldType": "number"
                    }
                ]
            },
            {
                "isTable": false,
                "fieldLabel": "Prepared by",
                "fieldName": "preparedBy",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Signed by (Raw Coal In-charge)",
                "fieldName": "signedByRawCoalInCharge",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": ["Raw Coal In-charge", "Authorized representative of contractor"],
                "fieldLabel": "signature"
            }
        ]
    },
    {
        "formName": "Shift Report – Washery / Deshaling Plant",
        "formNo": "Form 1-G",
        "formSchema": [
            {
                "isTable": false,
                "fieldLabel": "Name of Subsidiary",
                "fieldName": "nameOfSubsidiary",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Area",
                "fieldName": "nameOfArea",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of Washery / Deshaling Plant",
                "fieldName": "nameOfWasheryOrDeshalingPlant",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Departmental/Contractual",
                "fieldName": "departmentalOrContractual",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Name of the Contractor",
                "fieldName": "nameOfTheContractor",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Date",
                "fieldName": "date",
                "fieldType": "date"
            },
            {
                "isTable": false,
                "fieldLabel": "Shift",
                "fieldName": "shift",
                "fieldType": "text"
            },
            {
                "isTable": true,
                "tableHeader": [
                    {
                        "headerLabel": "Colliery",
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "Grade of Coal",
                        "fieldType": "text"
                    },
                    {
                        "headerLabel": "Quantity received (Te)",
                        "fieldType": "number"
                    },
                    {
                        "headerLabel": "Production of washed/deshaled coal (in Te)",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "Clean/Deshaled Coal",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Middling",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Rejects",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Slurry",
                                "fieldType": "number"
                            }
                        ]
                    },
                    {
                        "headerLabel": "Yield (%)",
                        "hasSubHeader": true,
                        "subHeader": [
                            {
                                "headerLabel": "Clean/Deshaled Coal",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Middling",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Reject",
                                "fieldType": "number"
                            },
                            {
                                "headerLabel": "Slurry",
                                "fieldType": "number"
                            }
                        ]
                    }
                ]
            },
            {
                "isTable": false,
                "fieldLabel": "Prepared by",
                "fieldName": "preparedBy",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "fieldLabel": "Signed by (Shift Incharge)",
                "fieldName": "signedByShiftIncharge",
                "fieldType": "text"
            },
            {
                "isTable": false,
                "isSignature": true,
                "signatureLabels": ["Shift Incharge", "Authorized representative of contractor"],
                "fieldLabel": "signature"
            }
        ]
    }
]

const YellowBook = () => {
    const [currentForm, setCurrentForm] = useState(null);

    const handleFormSelect = (index) => {
        setCurrentForm(index);
    };

    const handleBackToList = () => {
        setCurrentForm(null);
    };

    if (currentForm !== null) {
        return (
            <DynamicFormBuilder
                formData={formData[currentForm]}
            />
        );
    }

    return (
        <section id="yellow-book" className="p-4">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">Yellow Book Forms</h1>
            </div>
            <div className="w-full max-w-4xl mx-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Form Number</TableHead>
                            <TableHead>Form Name</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {formData.map((form, index) => (
                            <TableRow key={index}>
                                <TableCell>{form.formNo}</TableCell>
                                <TableCell>{form.formName}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleFormSelect(index)}
                                        className="rounded-full"
                                    >
                                        Select Form
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default YellowBook;