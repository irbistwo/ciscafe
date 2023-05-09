import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLUE_GREEN, GREEN, LIGHT_BROWN, LINE_COLOR} from "../../../utils/colorsConstant";
import {scale} from "../../../utils/scale";
import ExtraItemForOrder from "./ExtraItemForOrder";
import {ModificatorListForOrder} from "./ModificatorListForOrder";

interface IModificatorItem {
    _id:string;
    id:number;
    is_selected:boolean;
    name:string;
    additionalPrice: number;
    isDefault: boolean;
    limit?: number;
    qty: number;
}
interface IModificatorArray{
    _id: string;
    id:number;
    name: string;
    isMultiple: boolean;
    belongsto?: string;
    options:IModificatorItem[]

}
interface IModificatorProp{
    modificators:IModificatorArray[]
}
const ModificatorOrderContainer= ({modificators}: IModificatorProp) => {
    /*
        const extras = useMemo(
            () => extraarray?.filter((x) => !!x.qty) ?? [],
            [extraarray],
        )
        */
    const attributesFN = () => {
        if (!modificators) return [];

        const selectedAttributes = modificators.filter((x) =>
            x.options.some((x) => x.is_selected/*x.isSelected*/),
        );

        const groomedSelectedAttributes = selectedAttributes.map((attr) => {
            const groomedAttr = {...attr};

            // remove options that is not selected
            groomedAttr.options = groomedAttr.options.filter(
                (x) => x.is_selected/*x.isSelected*/,
            );
            return groomedAttr;
        });

        return groomedSelectedAttributes ?? [];
    }
    const attributes=attributesFN();
    return (
        attributes.length > 0 &&
        attributes.map((attr) => (
            <ModificatorListForOrder key={attr._id} modificator={attr}/>
        )
        )
    )

}

export default ModificatorOrderContainer;