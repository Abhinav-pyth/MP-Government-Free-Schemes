export { schemes } from "./schemes";
export { blogPosts } from "./blog";

export interface Scheme {
  id: string;
  name: { hi: string; en: string };
  category: { hi: string; en: string; key: string };
  overview: { hi: string; en: string };
  eligibility: { hi: string[]; en: string[] };
  benefits: { hi: string[]; en: string[] };
  documents: { hi: string[]; en: string[] };
  applicationProcess: { hi: string[]; en: string[] };
  targetAudience: string[];
  officialLink: string;
  keywords: { hi: string[]; en: string[] };
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: { hi: string; en: string };
  excerpt: { hi: string; en: string };
  content: { hi: string; en: string };
  image?: string;
  date: string;
  readingTime: number;
  author: string;
  category: string;
  relatedSchemes: string[];
}

export const categories = [
  { key: "women-child", en: "Women & Child Welfare", hi: "महिला एवं बाल कल्याण" },
  { key: "education", en: "Education & Student Support", hi: "शिक्षा एवं छात्र सहायता" },
  { key: "agriculture", en: "Agriculture & Farmers", hi: "कृषि एवं किसान" },
  { key: "health-social", en: "Health, Housing & Social Security", hi: "स्वास्थ्य, आवास एवं सामाजिक सुरक्षा" },
];

export const audiences = [
  { key: "students", en: "Students", hi: "छात्र" },
  { key: "farmers", en: "Farmers", hi: "किसान" },
  { key: "women", en: "Women", hi: "महिलाएं" },
  { key: "senior-citizens", en: "Senior Citizens", hi: "वरिष्ठ नागरिक" },
  { key: "workers", en: "Workers", hi: "श्रमिक" },
];
