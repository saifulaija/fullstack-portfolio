export interface IFrontendSkill{
    _id:string;
    name:string;
    createdAt:Date
} 


export interface IFrontendSkillUpdateProps {
    data: IFrontendSkill | null;
  }