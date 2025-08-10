// Individual conversation data point
export interface DataEntry {
  companySize: 'Startup (1-10)' | 'Small (11-50)' | 'Medium (51-200)' | 'Large (201-1000)' | 'Enterprise (1000+)';
  industry: 'E-Commerce' | 'Media & Marketing' | 'Finance & Banking' | 'SaaS & Technology' | 'Education' | 'Consulting';
  quarter: '2024-Q1' | '2024-Q2' | '2024-Q3' | '2024-Q4';
  responseValue: string; // e.g., "Google Workspace", "REST API Access", "Too Expensive"
  numResponses: number;  // How many times this was mentioned
}

export interface FilterState {
  companySize: string[];
  industry: string[];
  quarter: string[];
}

// Question structure  
export interface Question {
  questionId: 'q1' | 'q2' | 'q3';
  questionNumber: number;
  question: string;
  questionType: 'multi_response';
  description: string;
  data: DataEntry[];
}

// Root data structure
export interface HubSpotData {
  metadata: {
    title: string;
    description: string;
  };
  uniqueValues: {
    companySize: string[];
    industry: string[];  
    quarter: string[];
  };
  questions: Question[];
}

export type FilterCategory = keyof FilterState;