export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    tags: string[];
  };
  
  export const jobs: Job[] = [
    {
      id: "1",
      title: "Junior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      tags: ["React", "TypeScript"],
    },
    {
      id: "2",
      title: "UI Engineer",
      company: "Design Studio",
      location: "Kuala Lumpur",
      tags: ["Next.js", "Tailwind"],
    },
    {
      id: "3",
      title: "Frontend Developer",
      company: "Startup Labs",
      location: "Hybrid",
      tags: ["React", "CSS"],
    },
  ];
  