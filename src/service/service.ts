const api = 'https://vivaldi-backend.azurewebsites.net/api/';
//const api = 'http://158.101.204.112/api/';
export const sendPostData=(postname:string,arraytosend:any)=> {
    const url=api+postname;
    return new Promise((resolve,reject)=> {
        let data= JSON.stringify(arraytosend);
        let is_error=false;
        let statusup:number;
        console.info("spd", data);
        let result= fetch(url,{
            method: "post",
            headers: {'Content-Type':'application/json'},
            body:data
        });
        result.then(function(response) {
            // console.log('response', response)
            let status=response.status;
            if(status!=200) {is_error=true;//throw (" error status "+status);
                statusup=status;}
            let header=response.headers.get('Content-Type');
            if(header===null){throw "Network notify error";}
        return response.text();
        }).then(function(text) {
            let result=text;
            if(is_error) throw ("status:"+statusup+" "+result);
            resolve(result);

        }).catch(function(ex) {
            console.log('(service 33)failed', ex);
             throw new Error('failed send '+ ex)
            //reject(ex);
        });
    });
}

export const sendGetData=(postname:string)=> {
    const url=api+postname;
    return new Promise<string>((resolve,reject)=> {

        let is_error=false;
        let statusup:number;
        console.info("spd get url", url);
        let result= fetch(url,{
            method: "GET",
            headers: {'Content-Type':'application/json'},

        });
        result.then(function(response) {
             //console.log('response', response)
            let status=response.status;
            if(status!=200) {
                is_error=true;//throw (" error status "+status);
                statusup=status;}
            let header=response.headers.get('Content-Type');
            if(header===null){throw "Network notify error";}

            return response.text();
        }).then(function(text) {
            let result=text;
            if(is_error) throw ("status:"+statusup+" "+result);

            resolve(result);

        }).catch(function(ex) {
            console.log('(service 63)failed', ex);
            throw new Error('failed send '+ ex)
            //reject(ex);
        });
    });
}


function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export function guidsmall() {
    return (S4()+S4()+"-"+S4()+"-"+S4());
}