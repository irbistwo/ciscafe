import React, {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {
    Dimensions, RegisteredStyle, SafeAreaView, SectionList, StyleSheet, Text,
    SectionListData, View, ViewStyle, FlatList, SectionListScrollParams, Animated
} from "react-native";

export const ToastContext:React.Context<any> = createContext({});
export const ToastProvider= ( {children}) => {
    const [smessage, setMessage] = useState<string>(null);
    return (
        <ToastContext.Provider value={{smessage,setMessage,
            is_visible:(smessage!==null&& smessage!==undefined),
            setToastMessage:(message:string)=>{
            setMessage(message);setTimeout(()=>setMessage(null),3000);
            }
        }}>
            {children}
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
    const {smessage,setMessage,is_visible} = useContext<any>(ToastContext);
//const [is_visible,setIsvisible]=useState(false);
    /*
 useEffect(()=>{
//if(message===null) return;
     console.log("Toast 26", smessage,message,is_visible);
//if(blockupdate) return;
     //blockupdate=true;
   if(message && (smessage===null))  setMessage(message);
   if(smessage) setTimeout(()=>{setMessage(null)},3000);

    })
    */

    //if(message!==smessage) setMessage(message);
  // const visible:boolean=(message!==null)


    let toastStyle = { bottom :10};
    return (
        (is_visible) ? <View style = {[styles.toast, {...toastStyle}]}
                        pointerEvents = 'box-none'>
            <Animated.View style = {[styles.textView,/* {...style, opacity: opacity}*/]}>
                <Text style = {[styles.text/*, {...textStyle}*/]}>
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
    },
    textView: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        opacity:0.5
    },
    text: {
        color: 'white',
        fontSize: 14,
    },
});
