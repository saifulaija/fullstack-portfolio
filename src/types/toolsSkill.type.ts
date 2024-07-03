export interface IToolsSkill{
    _id:string;
    name:string;
    createdAt:Date
} 


export interface IToolsSkillUpdateProps {
    data: IToolsSkill | null;
  }