import { HasFormatter } from "../interface/HasFormatter";

export class payment implements HasFormatter{
    constructor(
        readonly recipient:string,
        private details:string,
        public amount:number
    ){}
    format(){
       return `${this.recipient} is owed ${this.details} for ${this.amount}`
    }
}