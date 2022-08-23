
import React from "react";
import { formSerialize } from "../../../services/shared/common.service";
import { saveSiteRegData } from "../../../services/site.service";
import "./site-reg.css"

export class SiteReg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            type:"",
            name:"",
            price:0,
            loaction:"",
            regdate:"",
            homeloan:"",
            personalloan:"",
            landloan:"",
            mortgageloan:"",
            address:"",
            city:"",
            state:"",
            country:"",
            zipCode:0,
            addDetails:"",
            isFormValid:true,
            errors:{
                type:false,
                name:false,
                loantype:false
            }
        };
        this.setState={
            id:0,
            type:"",
            name:"",
            price:0,
            loaction:"",
            regdate:"",
            homeloan:"",
            personalloan:"",
            landloan:"",
            mortgageloan:"",
            address:"",
            city:"",
            state:"",
            country:"",
            zipCode:0,
            addDetails:"",
            isFormValid:true,
            errors:{
                type:false,
                name:false,
                loantype:false
            }
        };
    }

    saveData(event){
        event.preventDefault();
        let data= formSerialize('siteReg');
        // this.state.homeloan=="" || this.state.personalloan==""?
        //     this.state.errors({...this.state.errors, loantype:true}):
        //     this.state.errors({...this.state.errors, loantype:false })
        saveSiteRegData(data).then(
            (res)=>{
                alert("saved successfully");
            },
            (err)=>{alert("save failed")}
        );

    }



    render(){
        return (
            <form id="siteReg" onSubmit={(event)=>{this.saveData(event)}}>
               <h3>Site Registration</h3>
                <div className="form-group">
                    <label htmlFor="site-type">Site Type</label>    
                    <select name="type" id="siteType" className="form-control" onChange={(event)=>{this.setState({type:event.target.value})}}>
                        <option value="0">Select</option>
                        <option value="house">House</option>
                        <option value="villas">Villas</option>
                        <option value="apartment">Apartments</option>
                        <option value="land">Land</option>
                    </select>
                    {!this.isFormValid&&this.state.errors.type&&<div className="text-danger">Site type is required</div>}
                </div>
                <div className="form-group">
                    <label>Site Name</label>
                    <input type="text"name="name"className="form-control"></input>
                    {!this.isFormValid&&this.state.errors.name&&<div className="text-danger">Site Name is required</div>}
                </div>
                <div className="form-group">
                    {this.state.type=="land" ?<label>Price Per Sq yard</label>:<label>Price Per Sq feet</label>}
                    <input type="number" name="price"className="form-control"></input>
                </div>
                <div>
                    <div>
                        <label>Site Location</label>
                    </div>
                </div>
                <div className="ms-5">
                    <div>
                        <input type="radio" id="rural"name="location" value="rural"></input>
                        <label htmlFor="rural">Rural</label>
                    </div>
                </div>
                <div className="ms-5">
                    <div>
                        <input type="radio" id="urban" name="location" value="urban"></input>
                        <label htmlFor="urban">Urban</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Site Registered Date</label>
                    <input type="date" name="regdate" className="form-control"></input>
                </div>
                <div>
                    <div>Loan Availability Type</div>
                    <div className="ms-5">
                        <div>
                            <input type="checkbox" id="homeloan" value="homeloan" name="homeloan"></input>
                            <label htmlFor="homeloan">Home Loan</label>
                        </div>
                        <div>
                            <input type="checkbox" id="personalloan" value="personalloan" name="personalloan"></input>
                            <label htmlFor="personalloan">Personal Loan</label>
                        </div>
                        <div>
                            <input type="checkbox" id="landloan" value="landloan" name="landloan"></input>
                            <label htmlFor="landloan">Land Loan</label>
                        </div>
                        <div>
                            <input type="checkbox" id="mortagageloan" value="mortagageloan" name="mortagageloan"></input>
                            <label htmlFor="mortagageloan">Mortgage Loan</label>
                        </div>
                    </div>
                    {
                        !this.state.isFormValid && this.state.errors.loantype && <div className="text-danger">Any one of the loan type is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Site Address</label>
                    <input type="text" name="address" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label>Zip code</label>
                    <input type="number" name="zipcode" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text"name="country" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="details">More Details About Site</label>
                    <textarea className="form-control" rows="5" id="details" name="addnl_details"></textarea>
                </div>
                <br></br>
                <div>
                    <input type="submit" className="btn btn-outline-primary col-1 mb-5" value="create site" id="createsite"></input>
                    <input type="reset" className="btn ms-2 btn-outline-danger col-1 mb-5" value="Reset" id="reset"></input>
                </div>                 
            </form>
        );
    }
}