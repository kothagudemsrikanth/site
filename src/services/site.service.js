import getData, { saveData } from "./shared/context.service"

const api="siteReg";

export function saveSiteRegData(data){
    return saveData(api, data);
}

export function getSiteRegData(){
    return getData(api);
}