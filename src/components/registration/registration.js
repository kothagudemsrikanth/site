import React from "react";
import { Link } from "react-router-dom";
import { saveUserData } from '../../services/registration.service';
export class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={
            registration:{
                name:"",
                email:"",
                password: "",
                confirmpassword:""
            },
            error:{
                nameIsValid:true,
                emailIsValid:true,
                passwordIsValid:true,
                confirmpasswordIsValid:true
            },
            isFormValid:true
         };
    }
    saveData(){
        this.checkvalidation();
        if(this.state.isFormValid){
            saveUserData(this.state.registration).then(
                (res)=>{alert("Data saved successfully")},
                (err)=>{alert("Error occured")}
            );      
        }
        else{ 
            alert("Mandatory fields are required")
        }
    }
    checkvalidation(){
        let isNameValid=this.state.registration.name.trim()=="" ? false : true;
        let isEmailValid=this.state.registration.email.trim()=="" ? false : true;
        let isPasswordValid=this.state.registration.password.trim()=="" ? false : true;
        let isConfirmPasswordIsValid=this.state.registration.confirmpassword.trim()=="" ? false : true;
        this.setState({error:{nameIsValid : isNameValid, emailIsValid:isEmailValid, passwordIsValid:isPasswordValid, confirmpasswordIsValid: isConfirmPasswordIsValid}});

        let formValid= (isNameValid || isEmailValid || isPasswordValid || isConfirmPasswordIsValid) ? true:false;
        this.setState({isFormValid:formValid});
    } 
    render(){ 
        return(
            <div id="container" >
                <h5 className="mt-3">REGISTRATION</h5>
                <div ></div>
                <form id="formid">
                    <div className="form-group">
                        <label>Name</label>
                        <sup className="text-danger">*</sup>
                        {!this.state.error.nameIsValid && <div className="text-danger">Name is required</div>}
                        <input type="text" className="form-control mt-1 mb-1" name="name"onChange={(event)=>{this.setState({registration:{...this.state.registration,name:event.target.value}})}}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <sup className="text-danger">*</sup>
                        {!this.state.error.emailIsValid && <div className="text-danger">Email is required</div>}
                        <input type="email" className="form-control mt-1 mb-1" name="email" onChange={(event)=>{this.setState({registration:{...this.state.registration,email:event.target.value}});}}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <sup className="text-danger">*</sup>
                        {!this.state.error.passwordIsValid && <div className="text-danger">Password is required</div>}
                        <input type="password" className="form-control mt-1 mb-1" name="password" onChange={(event)=>{this.setState({registration:{...this.state.registration,password:event.target.value}});}}></input>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <sup className="text-danger">*</sup>
                        {!this.state.error.confirmpasswordIsValid && <div className="text-danger">Confirm password</div>}
                        <input type="password" className="form-control mt-1 mb-1" name="confirmpassword" onChange={(event)=>{this.setState({registration:{...this.state.registration,confirmpassword:event.target.value}});}}></input>
                    </div>
                    <div>
                        <input type="button" className="btn btn-primary mt-3 mb-2" value="Register" onClick={()=>{this.saveData()}}></input>
                        <label>
                            <Link to="/" className="btn btn-outline-success mt-3 mb-2 ms-3">Login Page</Link>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

