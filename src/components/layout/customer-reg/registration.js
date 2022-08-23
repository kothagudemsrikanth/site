import { formSerialize} from "../../../services/shared/common.service";
import { savecustomerData } from "../../../services/customer-reg";
import store from "../../../services/redux/customer-redux";
import './customer-reg.css';
import { CustomerGrid } from "../customer-grid/customergrid";

export function CustomerRegistration(){
    function saveCustomerData(){
        let data=formSerialize("customerForm");
        savecustomerData(data).then(
            (res)=>{
                alert("Data Saved");
                store.dispatch({type:"refresh",data:true});
            },
            ()=>{alert("Error has been occured");}
        );
    }
    return(
        <div>
            <form className="customer-reg" id="customerForm">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name"></input>
                </div>
                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="number" className="form-control" name="phone"></input>
                </div>
                <div>
                    <label>Address</label>
                    <textarea className="form-control" rows="5" name="address"></textarea>
                </div>
                <div>
                    <input type="button" className="btn btn-primary mt-3" value="Register" onClick={()=>{saveCustomerData()}}></input>
                </div>
            </form>
            <div>
                <CustomerGrid></CustomerGrid>
            </div>
        </div>
    );
}