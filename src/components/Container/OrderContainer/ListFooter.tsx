import React, {useEffect, useState} from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {BLUE_GREEN, LIGHT_BROWN, LINE_COLOR} from "../../../utils/colorsConstant";
import {TotalBreakdown} from "./TotalBreakdown";
import {scale} from "../../../utils/scale";

const POINTS_CAPPED = 1;
export const TOGGLE_SIZE = 20;
type SwitchProps = {
    width?: number;
    onToggle: (isToggle: boolean) => void;
    isToggled?: boolean;
};
const Switch = ({
                    width = 70,
                    onToggle,
                    isToggled = false,
                }: SwitchProps) => {
    const START_POSITION = 4;

    const [toggle, setToggle] = useState(isToggled);

    const animationLeft = React.useRef(
        new Animated.Value(START_POSITION),
    ).current;
/*
   useEffect(() => {
        onToggle(toggle);
        if (toggle) toggleOn();
        else toggleOff();
    }, [toggle]);
*/
    const toggleOn = () => {
        Animated.timing(animationLeft, {
            toValue: width - TOGGLE_SIZE - START_POSITION * 2,
            duration: 200, // the duration of the animation
            easing: Easing.linear, // the style of animation
            useNativeDriver: false,
        }).start();
    };

    const onPres=()=>{
        const tg=!toggle;
        if (tg) toggleOn();
        else toggleOff();
        setToggle(tg);
        onToggle?.(tg);
    }
    const toggleOff = () => {
        Animated.timing(animationLeft, {
            toValue: START_POSITION,
            duration: 200, // the duration of the animation
            easing: Easing.linear, // the style of animation
            useNativeDriver: false,
        }).start();
    };

    return (
        <Pressable
            onPress={onPres}
            style={[
                styles.container,
                {width: width, backgroundColor: toggle ? '#e9fce9' : LIGHT_BROWN},
            ]}>
            <Animated.View
                style={[styles.toggle,{
                        left: animationLeft,
                        backgroundColor: toggle ? BLUE_GREEN : LIGHT_BROWN,
                    },
                ]}></Animated.View>
        </Pressable>
    );
};

export const ListFooter = () => {
   // const dispatch = useDispatch();
    const navigation = useNavigation();

    const totalPrice = 0//useSelector(selectOrderTotalPrice);
    const userPoint = 0;//useSelector(userPoints);
    const appliedPoints = 0;//useSelector(selectAppliedPoints);

    const {applicablePoint, isPointsCapped} = React.useMemo(() => {
        if (userPoint >= totalPrice) {
            // @ts-ignore
            const cappedPoints = totalPrice - POINTS_CAPPED;
            return {
                applicablePoint: cappedPoints < 0 ? 0 : cappedPoints,
                isPointsCapped: true,
            };
        }

        return {applicablePoint: userPoint};
    }, [userPoint, totalPrice]);

    const onToggle = (applyPoints: boolean) => {
        if (applyPoints) {
           // dispatch(addPoint({points: applicablePoint}));
        } else {
            //dispatch(removePoint());
        }
    };

    return (
        <>
            {/* POINTS */}
            {userPoint >= 0 && (
                <View style={[styles.row, styles.pointContainer]}>
                    <Text style={[styles.md_hermes_regular, styles.redeemText]}>
                        {/*locale
                            .t('redeem_points')
                            .replace('${points}', applicablePoint.toString()) */ }
                        {
                            'redeem_points'.replace('${points}', applicablePoint.toString())
                        }
                    </Text>
                    <View style={styles.toggleContainer}>
                        <Switch isToggled={appliedPoints > 0} onToggle={onToggle} />
                        <Text style={[styles.sm_hermes_regular, styles.toggleText]}>
                            {/*locale.t('use_points')*/'use_points'}
                        </Text>
                    </View>
                </View>
            )}

            <TotalBreakdown
                isPointsCapped={isPointsCapped}
                forPaymentPage={false}
                totalLabel={/*locale.t('total_price')*/'total_price'}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: scale(TOGGLE_SIZE),
        display: 'flex',
        flexDirection: 'row',
        borderColor: BLUE_GREEN,
        borderWidth: 1,
        position: 'relative',
        height: 30,
    },
    toggle: {
        top: 3,
        width: scale(TOGGLE_SIZE),
        height: scale(TOGGLE_SIZE),
        backgroundColor: BLUE_GREEN,
        borderRadius: scale(TOGGLE_SIZE),
        borderWidth: 1,
        borderColor: BLUE_GREEN,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointContainer: {
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: LINE_COLOR,
        paddingVertical: scale(30),
    },
    toggleText: {textTransform: 'uppercase', marginTop: scale(6)},
    redeemText: {
        flex: 1,
    },
    md_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(22),
        color: BLUE_GREEN,
    },
    toggleContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    sm_hermes_regular: {
        fontFamily: 'Hermes-Regular',
        fontSize: scale(15),
        color: BLUE_GREEN,
    },

})