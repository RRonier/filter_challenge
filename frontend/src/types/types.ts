import { ChangeEvent } from "react";

export interface PoliciesResponseProps {
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

export interface ParamsProps {
  search: string;
  skip: number;
  take: number;
  provider: string;
  insurance: string;
}

export interface TextFieldProps {
  onHandleChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
  params: ParamsProps;
}

export interface DropDownProps {
  onHandleChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
  providersList?: IProvider[];
  insurancesList?: IInsuranceTypes[];
  name: string;
  value: string;
  placeholder: string;
  text: string;
}

export interface ButtonProps {
  onClick: () => void;
  label: string;
  type: string;
}

export interface TableProps {
  data: IPolicies[];
  count: number;
  params: ParamsProps;
  providersList: IProvider[];
  insurancesList: IInsuranceTypes[];
  loading: boolean;
  paginate: (page: number) => void;
  onHandleChange: (e: ChangeEvent<HTMLInputElement> | any) => void;
  onSearch: () => void;
  onReset: () => void;
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
