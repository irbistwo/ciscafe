import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ExtraItem from "./ExtraItem";
import Accordion from "./Accordeon";
import ModificatorList from "./ModificatorList";

export interface IModificatorItem {
    _id:string;
    id:number;
    is_selected:boolean;
    name:string;
    additionalPrice: number;
    isDefault: boolean;
    limit?: number;
    qty: number;
}
export interface IModificatorArray{
    _id: string;
    id:number;
    name: string;
    isMultiple: boolean;
    belongsto?: string;
    options:IModificatorItem[]

}
interface IProps {
    modificators: IModificatorArray[];
};

const ModificatorControl = ({modificators}:IProps) => {
    const [qtty,setQtty]=useState(0);
    /*const modtitles= modificators.map((item)=>(
        <Accordion title={('extras')}>
            {menuItem.attributes.map((mofificator) => {
                return <ExtraItem key={extra._id} extra={extra} />;
            })}
        </Accordion>
    ))
    */

    return(
        <>
            {
    modificators.map((item)=>(
        // @ts-ignore
        <Accordion title={/*locale.t*/(item.name)} key={item._id}>
            {/*
            {item.options.map((mofificator) => {
                return <ExtraItem key={mofificator._id} extra={mofificator}/>;
            })
            }
            */}
          <ModificatorList modificator={item}/>
        </Accordion>
    ))
            }
        </>
)
}
export default ModificatorControl;