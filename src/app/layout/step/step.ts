export class Step {
   stepId: number;
   stepName: string;
   stepDesc:  string;
   stepNo:  string;
   sequence: number;
   takePhoto: boolean;
   elementName: string;
   elementValue: string;
   getType: string;
   doType: string;
   excptValue: string;
   url: string;
   testCase:{
     caseId: number;
   };
   constructor() { 
   }
} 