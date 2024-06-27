export type Team = {
    id: number;
    icon: string;
    title: string;
    designation: string;
    role:string;
    description: string;
    phone: string;
    email: string;
    linkedin: string;
  };
  
export type TeamSection = {
    title: string;
    subtitle: string;
    description: string;
    teams: Team[];
}