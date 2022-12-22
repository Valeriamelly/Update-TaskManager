import { ValueFromArray } from "rxjs";

export interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  status: any[];
  category: any[];
}
