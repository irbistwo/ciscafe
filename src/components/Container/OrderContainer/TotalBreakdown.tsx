import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from "../../../utils/scale";
import {BLUE_GREEN, LINE_COLOR} from "../../../utils/colorsConstant";
type TotalBreakdownProps = {
    totalLabel: string;
    forPaymentPage: boolean;
    isPointsCapped?: boolean;
    totalPrice?:number;
};

const BreakdownItem = ({
                           label,
                           value,
                           noBorder,
                           isFontLarge

                       }: {
    noBorder?: boolean;
    label: string;
    value: string;
    isFontLarge?: boolean;
}) => {
    return (
        <View
            style={[
                styles.orderItemContainer,
                styles.row,
                {
                    borderBottomWidth: noBorder ? 0 : 1,
                    marginTop: scale(20),
                    alignItems: noBorder ? 'center' : 'flex-end',
                },
            ]}>
            <Text
                style={[
                    isFontLarge
                        ? styles.md_hermes_regular
                        : styles.sm_hermes_regular,
                    {flex: 1},
                ]}>
                {label}
            </Text>
            <Text
                style={[
                    isFontLarge
                        ? styles.md_hermes_regular
                        : styles.sm_hermes_regular,
                ]}>
                {value}
            </Text>
        </View>
    );
};

export const TotalBreakdown = ({
                                   totalLabel,
                                   forPaymentPage,
                                   isPointsCapped,
                                   totalPrice
                               }: TotalBreakdownProps) => {
    //const [totalPrice ]= useState(0);
    const [appliedPoints] = useState(0);

    return (
        <View>
            {appliedPoints === 0 && (
                <>
                    {/* CAPPED POINTS DESCSRIPTION */}
                    {isPointsCapped && (
                        <View
                            style={[
                                styles.orderItemContainer,
                                styles.row,
                                {
                                    borderBottomWidth: 1,
                                    paddingBottom: scale(20),
                                    alignItems: 'flex-end',
                                },
                            ]}>
                            <Text
                                style={[
                                    styles.sm_hermes_regular,
                                    {marginTop: scale(6)},
                                ]}>
                                <Text style={[styles.sm_hermes_bold]}>
                                    {/*locale.t('points_capped_bold') */ 'points_capped_bold'}
                                </Text>{' '}
                                {/*locale.t('points_capped')*/ 'points_capped'}
                            </Text>
                        </View>
                    )}

                    {/* SUB TOTAL PRICE */}
                    <BreakdownItem
                        noBorder={false}
                        label={/*locale.t('sub_total')*/'sub_total'}
                        value={` KR. ${totalPrice}`}
                    />

                    {/* DISCOUNT APPLIED */}
                    <BreakdownItem
                        noBorder={false}
                     //   label={locale.t('points_applied')}
                        label={'points_applied'}
                        value={` -${appliedPoints}`}
                    />
                </>
            )}

            {/* NEW POINTS */}
            <BreakdownItem
                noBorder={false}
                //label={locale.t('new_points')}
                label={'new_points'}
                //value={` +${Math.floor((totalPrice - appliedPoints) / 10)} ${locale.t('point',)}`}
                value={` +${Math.floor((totalPrice - appliedPoints) / 10)} 'point'`}
            />

            {/* TOTAL PRICE */}
            <BreakdownItem
                isFontLarge={true}
                label={totalLabel}
                value={`${totalPrice - appliedPoints}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderItemContainer: {
        width: '100%',
        borderBottomColor: LINE_COLOR,
        borderBottomWidth: 1,
        paddingTop: scale(10),
    },
    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(22),
        color: BLUE_GREEN,
    },
    sm_hermes_bold: {
        fontFamily: 'Hermes-Bold',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },
});
