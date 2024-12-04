export interface OwnerDetails {
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
  }
  
  export interface MineDetails {
    mineName: string;
    location: {
      latitude: number;
      longitude: number;
    };
    address: string;
    mineType: 'Open Cast' | 'Underground';
    isActive: boolean;
    productionCapacity: number;
    startDate: Date;
    endDate: Date;
  }
  
  export interface AdminConfig {
    email: string;
    password: string;
    name: string
  }
  
  export interface InitializationData {
    ownerDetails: OwnerDetails;
    mineDetails: MineDetails[];
    adminConfig: AdminConfig;
  }
  
  