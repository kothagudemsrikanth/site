
 const url="http://localhost:3000/";
//GET
export default function getData(api){
    return fetch(url+api).then(res=>res.json());
}
//SAVE
export function saveData(api, data){
    let options={
        method:"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(data)
    }
    return fetch(url+api,options).then(res=>res.json());
}
//UPDATE
export function updateData(api, data){
    let options={
        method:"PUT",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(data)
    }
    return fetch(url+api,options).then(res=>res.json());
}
