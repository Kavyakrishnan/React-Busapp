import React, { useState } from 'react'
import Header from './Header'


const Addbus = () => {
    var[Route,setRoute]=useState("");
    var[Busname,SetBusname]=useState("");
    var[BusRegNo,setBusRegNo]=useState("");
    var[OwnerName,setOwnerName]=useState("");
    var[ContactNo,setContactNo]=useState("");
    const subData=()=>{
        const data={"Route":Route,"Busname":Busname,"BusRegNo":BusRegNo,"OwnerName":OwnerName,"ContactNo":ContactNo}
        console.log(data)
    }
  return (
    <div>
        <Header/>
    
        <div className="Container">
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(e)=>setRoute(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Bus name</label>
                    <input onChange={(e)=>SetBusname(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <label for="" className="form-label">Bus Reg No</label>
                    <input onChange={(e)=>setBusRegNo(e.target.value)} type="text" className="form-control"/></div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Owner Name</label>
                    <input onChange={(e)=>setOwnerName(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(e)=>setContactNo(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">Register</button>
                </div>
              
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addbus