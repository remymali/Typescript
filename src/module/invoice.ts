import { HasFormatter } from "../interface/HasFormatter";
export class invoice implements HasFormatter
{
    constructor(    
       readonly client:string,
       public details:string,
       public amount:number
    ){}
    format()
    {
        return `${this.client} ows ${this.amount} for ${this.details}`
    }
}

