import React from 'react'
import Header from './Header'

const View = () => {
  var BUS=[
    {
      "Route"       :"Chengannur to mavelikara",
      "Busname"    :"Karingattil",
      "BusRegNo" :"9856",
      "OwnerName"  :"sudhesh",
      "ContactNo" :"9876543210"
      

    },

  {
    "Route"       :"Pathanamthitta to kozhencherry",
    "Busname"     :"Seenai",
    "BusRegNo" :"87568",
    "OwnerName"  :"kamal",
    "ContactNo" :"857048367",
    

  },

  {
    "Route"       :"Ernakulam to kollam",
    "Busname"     :"KCT",
    "BusRegNo" :"78397",
    "OwnerName"  :"Madhu",
    "ContactNo" :"9877367388",
    

  },

  ]
  return (

    <div>
      <Header/>
         <div className="Container">
    <div className="row g-10">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row g-3">
            <table class="table table-primary">
  <thead>
    <tr>  
      <th scope="col">No</th>

      <th scope="col">Route</th>
      <th scope="col">Busname</th>
      <th scope="col">Bus Reg No</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Contact No</th>

    </tr>

  </thead>
  <tbody>
    {BUS.map((value,key)=>{
      return <tr>
     <th scope="Row">1</th>  
     <td>{value.Route}</td>
     <td>{value.Busname}</td>
     <td>{value.BusRegNo}</td>
     <td>{value.OwnerName}</td>
     <td>{value.ContactNo}</td>

      </tr>
    })}
  </tbody>
</table>
               
               
               
              
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default View