import React, {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, FlatList, SectionListScrollParams, Animated
} from "react-native";

export const ToastContext:React.Context<any> = createContext({});
export const ToastProvider= ( {children}) => {
    const [smessage, setMessage] = useState<string>(null);
    const [textStyle,setTextstyle]=useState({});
    return (
        <ToastContext.Provider value={{smessage,setMessage,textStyle,
            is_visible:(smessage!==null&& smessage!==undefined),
            setToastMessage:(message:string)=>{
                setTextstyle({});
            setMessage(message);setTimeout(()=>setMessage(null),3000);
            },
            setToastErrorMessage:(message:string)=>{
                setTextstyle({ backgroundColor: '#ef8686'})
                setMessage(message);setTimeout(()=>setMessage(null),5000);
            }
        }}>
            {children}
            <Toast/>
        </ToastContext.Provider>
    )
};
/*
const ToastWrapper=({message})=> {

//if(message) setMessage(message);
   return <ToastProvider>
       <Toast message={message}/>
     </ToastProvider>
}
*/
const Toast=()=>{
    const {smessage,setMessage,is_visible,textStyle} = useContext<any>(ToastContext);


    let toastStyle = { bottom :10};
    return (
        (is_visible) ? <View style = {[styles.toast, {...toastStyle}]}
                        pointerEvents = 'box-none'>
            <Animated.View style = {[styles.textView,/* {...style, opacity: opacity}*/]}>
                <Text style = {[styles.text, {...textStyle}]}>
                    {smessage}
                </Text>
            </Animated.View>
        </View> : null
    )
}
export default  Toast;
const styles = StyleSheet.create({
    toast: {
        elevation: 1000,
        zIndex: 10000,
        left: 10,
        right: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        opacity:0.5
    },
    textView: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,

    },
    text: {
        color: 'white',
        fontSize: 14,
    },
});
