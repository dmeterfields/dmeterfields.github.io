export interface Service {
  name: string;
  summary?: string;
  description: string;
  subservice?: Service[];
}