export interface IBackendSkill{
    _id:string;
    name:string;
    createdAt:Date
} 


export interface IBackendSkillUpdateProps {
    data: IBackendSkill | null;
  }