export interface Mine {
    mineId: number
    mineName: string
    locationLatitude: number
    locationLongitude: number
    address: string
    productionCapacity: number
    operationalStatus: boolean
    startDate: string
    endDate: string | null
  }
  
  