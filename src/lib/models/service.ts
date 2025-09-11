export interface Service {
  name: string;
  summary?: string;
  description: string;
  subservice?: Service[];
  industries?: IndustryType[]; // hospital, restaurant, concessionaire, supermarket, convenience-store
}

// institution: bpo, hospital, bank, school, gov't office, etc...
type IndustryType = "hoReCa" | "supermarket/meat shop" | "convenienceStore" | "concessionaire" | "institution"