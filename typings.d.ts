interface SanityBody {
     _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
 }

interface Image{
    _type: "image";
   asset: {
       _ref:string;
       _type:"reference"
   } 
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    email: string;
    heroImage: Image;
    role: string;
    phoneNumber: string;
    backgroundInformation: string;
    name: string;
    profilePic: Image; 
}

export interface Social extends SanityBody {
     _type: "social";
     title: string;
     url: string; 
 }

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    progress: number; 
    image: Image;
}
export interface Project extends SanityBody {
    _type: "project";
    linkToBuild: string;
    technologies: Technology[]; 
    image: Image;
    title: string;
    summary: string;
}

export interface Technology extends SanityBody {
    _type: "technology";
    linkToBuild: string;
    technologies: Technology[]; 
    image: Image;
    title: string;
}
export interface Experience extends SanityBody {
    _type: "experience";
    technologies: Technology[]; 
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    points: Array;
    jobTitle: string;
    company: string;
    companyImage: Image;
}