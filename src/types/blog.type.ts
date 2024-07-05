export type TLoginUser = {
    email: string;
    password: string;
  };
  
  export interface Author {
    id: string;
    name: string;
    email: string;
    profilePhoto: string | null;
    contactNumber: string;
    address: string | null;
    gender: "MALE" | "FEMALE" | "OTHER";
    isDeleted: boolean;
    bio?: string;
    website?: string;
    twitter?: string;
    linkedIn?: string;
    facebook?: string;
    language?: string;
    education?: string;
    experience?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export type TComment = {
    id: string;
    content: string;
    commentorId: string;
    
    authorId: string;
    author: Author;
    blogId: string;
    blog: IBlog;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export interface IBlog {
    _id: string;
    title: string;
    content: string;
    category: string;
    conclusion: string;
    image: string; 
    authorId?: string;
    votes?:number;
    
    createdAt: Date;
   
    author?: Author;
   
  }
  
  export interface IBlogUpdateProps {
    data: IBlog | null;
  }
  




  export type TBlogResponse = {
    _id: string;
    title: string;
    content: string;
    category: string;
    image: string;
    conclusion: string;
    authorId: string;
    
    createdAt: string;
  
    
    author: {
        _id: string;
        name: string;
        email: string;
        profilePhoto: string | null;
        
    };
   
};

