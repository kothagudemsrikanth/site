import { useEffect, useState } from "react";
import { getCustomerData } from "../../../services/customer-reg";
import store from "../../../services/redux/customer-redux";


export function CustomerGrid(){
    const [customers,setCustomers]=useState([]);
    useEffect(()=>{
        store.subscribe((res)=>{
            getCustomerGridData();
        });
        getCustomerGridData();
    },[]);

    function getCustomerGridData(){
        getCustomerData().then(
            (res)=>{
                setCustomers(res);
            },
            (err)=>{alert(" error")}
        );
    }

    return(
        <div>
            <table className="table table-bordered table-hover table-striped">
                <thead className="table-warning">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers && customers.map(
                            (item)=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}