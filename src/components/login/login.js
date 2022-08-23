import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserData } from "../../services/registration.service";
import './login.css'

export function Login(props){
    const email=useRef("");
    const password=useRef("");
    const navigate=useNavigate();
    const login = () =>{
        getUserData().then(
            (res)=>{
                let val=res.some((item)=>item.email==email.current.value && item.password==password.current.value);
                if(val){
                    navigate("/home"); 
                    props.userValid(true);
                }
            },
            (err)=>{alert("error occured")}
        );
    };
    return(
        <div id="container">
            <form id="fromid">
                <h4 className="mt-3 mb-3">LOGIN HERE</h4>
                <div className="form-group mt-3 mb-2">
                    <label>Email</label>
                    <sup className="text-danger">*</sup>
                    <input type="email" className="form-control" ref={email} name='email' ></input>
                </div>
                <div className="form-group mt-2 mb-2">
                    <label>Password</label>
                    <sup className="text-danger">*</sup>
                    <input type="password" className="form-control" ref={password} name='password' ></input>
                </div>
                <div>
                    <input type="button" value="Login" id="btn"className="btn btn-primary mt-2 mb-3" onClick={()=>{login()}}></input>
                    <label>
                        <Link to="/reg"className="btn btn-outline-success mt-2 mb-3 ms-3" id="btn">Registration Page</Link>
                    </label>
                </div>
            </form>
        </div>  
    );
}
