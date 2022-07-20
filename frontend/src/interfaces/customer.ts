export interface IPoliciesResponse {
  policies: IPolicies[];
  count: number;
  providers: IProvider[];
  insuranceTypes: IInsuranceTypes[];
}

export interface IInsuranceTypes {
  insuranceType: InsuranceType;
}

export interface IProvider {
  provider: string;
}

export interface IPolicies {
  id: string;
  customer: ICustomer;
  provider: string;
  insuranceType: InsuranceType;
  status: PolicyStatus;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export enum InsuranceType {
  LIABILITY = "LIABILITY",
  HOUSEHOLD = "HOUSEHOLD",
  HEALTH = "HEALTH",
}

export enum PolicyStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  DROPPED_OUT = "DROPPED_OUT",
}
