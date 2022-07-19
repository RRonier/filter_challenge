export interface IPoliciesResponse {
  policies: IPolicies[];
  count: number;
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
