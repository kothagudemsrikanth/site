import { saveData} from "./shared/context.service";
import getData from "./shared/context.service";

const api="customerReg";
export function savecustomerData(data){
    return saveData(api,data);
}

export function getCustomerData(){
    return getData(api);
}