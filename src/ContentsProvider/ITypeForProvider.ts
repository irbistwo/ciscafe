export type beedType = 'Dine' | 'TakeOff';
export interface IGlobalRestoranItem {
    _id:string,
    id:number,
    name:string
    beedtype?:beedType
}

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