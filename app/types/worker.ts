export interface Worker {
  id: number;
  name: string;
  position: string;
  experience: number;
  location: string;
  skills: string[];
  salary: string;
  available: boolean;
  email?: string;
  phone?: string;
  description?: string;
  education?: string[];
  certifications?: string[];
  image: string;
}
