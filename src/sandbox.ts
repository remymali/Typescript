

const add=(a:number,b:number,c?:Number|string)=>{
    console.log(a+b);
}

add(5,20)
type stringOrNum = string|number;
type userDetails = {name:string,uid:Number|string}
let logDetails=(uid:stringOrNum,item:string)=>{
    console.log(`${item} with id ${uid} `)
}
logDetails('23',"Remy")
let greet=(user:userDetails)=>
{
    console.log(`Hello from ${user.name} with an id: ${user.uid}`);
}
greet({ name:"Preetha",uid:"USR123"})

let cal:(a:number ,b:number,c:string)=>number;

cal=(first:number,second:number,action:string)=>{
    if(action==="add")
    
        return first + second;
        else
        return 0;
    
}