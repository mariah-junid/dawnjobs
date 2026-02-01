export type Job = {
    id: string
    title: string
    company: string
    location: string
    type: 'Full-time' | 'Part-time' | 'Contract'
  }
  
  export const jobs: Job[] = [
    {
      id: '1',
      title: 'Junior Frontend Developer',
      company: 'Flux',
      location: 'Kuala Lumpur',
      type: 'Full-time',
    },
    {
      id: '2',
      title: 'React Developer',
      company: 'Startup XYZ',
      location: 'Remote',
      type: 'Contract',
    },
  ]
  