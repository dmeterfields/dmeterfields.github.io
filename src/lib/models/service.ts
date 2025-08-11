export interface Service {
  name: string;
  description: string;
  subservice?: Service[];
}