export function formatter2(date:Date):string{
    if (!date){return '';}
    // console.log(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    // console.log(d);
   // var sd:string=(d<10?('0'+d):d)+ '.' + (m<10?('0'+m):m)+'.'+y;
    const sd=y+'-'+(m<10?('0'+m):m)+"-"+(d<10?('0'+d):d);
//console.log(sd);
    return sd;
}

export function formatterR(date:Date):string{
    if (!date){return '';}
    // console.log(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    // console.log(d);
    const sd:string=(d<10?('0'+d):d)+ '.' + (m<10?('0'+m):m)+'.'+y;
    //const sd=y+'-'+(m<10?('0'+m):m)+"-"+(d<10?('0'+d):d);
    //console.log(sd);
    return sd;
}

export const is_between=(start:string,end:string):boolean=>{
    let b=true;
    if((!start)||(!end)) return true;
    try{
   // @ts-ignore
        const date:Date=new Date();
        const sdateStart=formatter2(date)+" "+start;
        const sdateEnd=formatter2(date)+" "+end;
        // @ts-ignore
        const datestart:Date=new Date(sdateStart);
        // @ts-ignore
        const dateend:Date=new Date(sdateEnd);
       // console.log("utilsdate39",datestart,dateend,(date<datestart),(date>dateend));
if(date<datestart) return false;
if(date>dateend) return false;
    }catch (e) {
      console.log(e);
    }

    return b;
}