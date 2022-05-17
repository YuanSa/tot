export type ResumeContacts = {
  phone?: string;
  email?: string;
  address?: string;
  postCode?: string;
};

export type ResumeSectionItemLink = {
  text?: string;
  url: string;
};

export type ResumeSectionItem = {
  title: string;
  subtitle?: string;
  location?: string;
  date?: string;
  highlights?: string[];
  links: ResumeSectionItemLink[];
};

export type ResumeSection = {
  title: string;
  items: ResumeSectionItem[];
};

export type Resume = {
  language: string;
  name: string;
  contacts?: ResumeContacts;
  sections: ResumeSection[];
};
