import serialize from "form-serialize";

export function formSerialize(formid){
    let data=serialize(document.querySelector("#"+formid));
    let obj={};
    data.split("&").forEach((item)=>{
        let key=item.split("=")[0];
        let value=item.split("=")[1];
        obj[key]=value;
    });
    return obj;
}