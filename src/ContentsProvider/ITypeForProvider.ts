export type beedType = 'Dine' | 'TakeOut';
export interface IGlobalRestoranItem {
    _id:string,
    id:number,
    name:string
    beedtype?:beedType
}
export interface IBeedType {
    beedtype:beedType,
    datetime?:string,
    time?:string
}
export const typearray=[{id:"Dine",name:"Dine"},{id:"TakeOut",name:"TakeAway"}];
/*
export interface IRestoran{
    _id:string;
    name:string;
    id:number;
}
export interface IOrder {
    _id:string,
    id:number;
    name:string;
}

interface IMenuExtra{
    _id: string;
    name: string;
    price: number;
    qty:number;
}
interface IGoods
{
   _id:string;
   id:number;
   name:string;
   price:number;
   quantity:number;
   modificatorSets:IModificatorArray[];
   goodsExtraArray:IMenuExtra[];
}
interface IModificatorItem {
    _id:string;
    id:number;
    name:string;
    qty: number;
}
interface IModificatorArray{
    _id: string;
    id:number;
    name: string;
    modificatorItemArray:IModificatorItem[]

}
*/