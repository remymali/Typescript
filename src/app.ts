import { HasFormatter } from './interface/HasFormatter.js'
import { ListTemplate } from './module/ListTemplate.js'
import {invoice} from './module/invoice.js'
import { payment } from './module/payment.js'
// interface person{
//     name:string,
//     age:number,
//     speak(a:string):void;
//     spend(a:number):number;
// }
// let per:person={
//     name:"Remy",
//     age:37,
//     speak(name:string){
//         console.log(name)
//     },
//     spend(amount:number){
//         console.log("he spend an amount ",amount)
//         return amount
//     }
// }
// console.log("Inteface output",per.speak("Rayees"),per.spend(1000))
// const invOne=new invoice("Remo","work on website",259)
// const invTwo=new invoice("Minnu","work for styling",400)

 let invoices: invoice[]=[]
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices)
const  form=document.querySelector('.new-item-form')!


invoices.forEach((inv)=>{ console.log(inv.client,inv.amount,inv.details,inv.format( ))})
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom')as HTMLInputElement;
const details= document.querySelector('#details')as HTMLInputElement;
const amount=document.querySelector('#amount')as HTMLInputElement;
const ul=document.querySelector('ul')!
const list = new ListTemplate(ul);
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter
    if(type.value==='payment')
    {
      doc=new payment(tofrom.value,details.value,amount.valueAsNumber)      
    }
   else{
    doc=new invoice(tofrom.value,details.value,amount.valueAsNumber)      
   }
   list.render(doc,type.value,'end')
})