interface Experience {
  company: string;
  companyUrl: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

interface Education {
  institution: string;
  institutionUrl: string;
  degree: string;
  location: string;
  duration: string;
}

interface Contact {
  type: string;
  url: string;
}

export interface GitHubReadmeMarkdownJSON {
  name: string;
  contactInformation: Contact[];
  experience: Experience[];
  education: Education[];
}

export const parseGitHubReadmeMarkdown = (markdown: string): GitHubReadmeMarkdownJSON => {
  const lines = markdown.split('\n');
  const name = lines[0].replace('# ', '');
  const contactInformationStart = lines.indexOf('## Contact Information') + 1;
  const experienceStart = lines.indexOf('## Experience');
  const educationStart = lines.indexOf('## Education');
  const contactInformationLines = lines.slice(contactInformationStart, experienceStart).join(' | ').split(' | ');
  const experienceLines = lines.slice(experienceStart + 1, educationStart);
  const educationLines = lines.slice(educationStart + 1);
  const contactInformation: Contact[] = contactInformationLines.map(contact => {
    const [type, url] = contact.split('](');
    const cleanedType = type.replace('[', '');
    return {type: cleanedType.startsWith('+') ? 'Phone' : cleanedType, url: url ? url.replace(')', '') : ''};
  });
  const experience: Experience[] = [];
  let currentExperience: Experience | null = null;
  for (const line of experienceLines) {
    if (line.startsWith('### ')) {
      if (currentExperience) experience.push(currentExperience);
      currentExperience = {company: '', companyUrl: '', position: '', location: '', duration: '', responsibilities: []};
    } else if (currentExperience) {
      if (line.startsWith('- Company: ')) {
        const [company, companyUrl] = line.replace('- Company: ', '').split('](');
        currentExperience.company = company.replace('[', '');
        currentExperience.companyUrl = companyUrl.replace(')', '');
      } else if (line.startsWith('- Position: ')) {
        currentExperience.position = line.replace('- Position: ', '');
      } else if (line.startsWith('- Location: ')) {
        currentExperience.location = line.replace('- Location: ', '');
      } else if (line.startsWith('- Duration: ')) {
        currentExperience.duration = line.replace('- Duration: ', '');
      } else if (line.startsWith('- Responsibilities:')) {
        currentExperience.responsibilities = [];
      } else if (line.startsWith('    - ')) {
        currentExperience.responsibilities.push(line.replace('    - ', ''));
      }
    }
  }
  if (currentExperience) experience.push(currentExperience);
  const education: Education[] = [];
  let currentEducation: Education | null = null;
  for (const line of educationLines) {
    if (line.startsWith('### ')) {
      if (currentEducation) education.push(currentEducation);
      currentEducation = {institution: '', institutionUrl: '', degree: '', location: '', duration: ''};
    } else if (currentEducation) {
      if (line.startsWith('- Institution: ')) {
        const [institution, institutionUrl] = line.replace('- Institution: ', '').split('](');
        currentEducation.institution = institution.replace('[', '');
        currentEducation.institutionUrl = institutionUrl.replace(')', '');
      } else if (line.startsWith('- Degree: ')) {
        currentEducation.degree = line.replace('- Degree: ', '');
      } else if (line.startsWith('- Location: ')) {
        currentEducation.location = line.replace('- Location: ', '');
      } else if (line.startsWith('- Duration: ')) {
        currentEducation.duration = line.replace('- Duration: ', '');
      }
    }
  }
  if (currentEducation) education.push(currentEducation);
  return {name, contactInformation, experience, education,};
};