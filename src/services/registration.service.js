import getData, { saveData } from "./shared/context.service";

const api="userreg"

export function getUserData(){
    return getData(api);
}
export function saveUserData(data){
    return saveData(api, data)
}