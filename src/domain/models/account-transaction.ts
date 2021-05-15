import { Vendor } from "./vendor";

export type AccountTransaction = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  description: string;
  amount: number;
  type: string;
  vendor: Vendor;
};