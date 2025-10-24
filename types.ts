
export interface Artist {
  id: number;
  name: string;
  style: string;
  // Allow jueves as well
  day: 'Jue' | 'Vie' | 'Sáb' | 'Dom';
  image: string;
  description: string;
  schedule: string;
  stage: string;
}

export interface Faq {
  question: string;
  answer: string;
}
