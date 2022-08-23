import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {getSiteRegData } from '../../../services/site.service';
import './site.css'

export default function Sites(props){
    const [siteData,setSiteData]=useState([]);
    const loc=useLocation();
    useEffect(()=>{
        getSiteRegData().then(
            (res)=>{
                alert(JSON.stringify(loc));
                let type=loc.pathname.replace("/sites/","");
                setSiteData(res.filter(item=>item.type==type));
            }
        );
    },[loc])


    return (
        <div>
            <select>
                <option value="0">Select</option>
                <option value="house">House</option>
                <option value="apartment">Apartments</option>
                <option value="villas">Villas</option>
                <option value="land">Lands</option>
                <option value="commercial-complex">commercial complex</option>
            </select>
            <table className="table table-bordered table-hover table-striped">
                <thead className="tablehead">
                    <tr>
                        <th>Id</th>
                        <th>Site Type</th>
                        <th>Site Name</th>
                        <th>Price(Sq Feet/Sq Foot)</th>
                        <th>Location</th>
                        <th>Reg.Date</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>ZipCode</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Add.Details</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {
                        siteData && siteData.map(
                            (item)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.type}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.location}</td>
                                <td>{item.regdate}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.zipcode}</td>
                                <td>{item.state}</td>
                                <td>{item.country}</td>
                                <td>{item.addnl_details}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
} 