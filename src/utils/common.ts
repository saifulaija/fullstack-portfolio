

import {formatDistanceToNowStrict} from 'date-fns'

export const formateMoney=(amount:string)=>{
    const money=Number(amount)
    return new Intl.NumberFormat('en-BD',{
        style:'currency',
        currency:'BDT'
    }).format(money)
}
export const formateDate=(from:Date)=>{
    return formatDistanceToNowStrict(from,{addSuffix:true})
};


export const dateFormat = (inputDate: string) => {
    const date = new Date(inputDate);
    const options :any = { month: "long" as const, day: "numeric", year: "numeric" as const };
    const formattedDate = date.toLocaleDateString("en-US", options  );
    return formattedDate;
  };

  export const validateString = (
    value: unknown,
    maxLength: number
  ): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
      return false;
    }
  
    return true;
  };
  
  export const getErrorMessage = (error: unknown): string => {
    let message: string;
  
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Something went wrong";
    }
  
    return message;
  };