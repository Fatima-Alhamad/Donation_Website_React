import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../Components/api';
import { Link,useNavigate } from 'react-router-dom';


function DemoDetails({loggedAdmin}) {
    const navigate=useNavigate()
    const {demoId}=useParams();
    const[selectedDemo,setSelectedDemo]=useState(null);
    useEffect(()=>{
        async function getData(){
            try{
                const res=await api.get(`/demonstrations/${demoId}`);
            setSelectedDemo(res.data);
            }
            catch(error){
                console.log(error.message);
            }
        }
        getData();

    },[demoId])
  return (
    <div className="d-flex justify-content-center align-items-center">
    {selectedDemo ? (
        <div className='row'>
        <div className='col-6'><img
        src={`../${selectedDemo.ImageSrc}`}
        className="card-img-top img-fluid mx-auto  w-100 d-block"
        style={{ width: "100px" }}
        alt="img"
      /></div>
      <div
        className="card text-center border border-danger w-50 col-6"
        style={{ width: "18rem" }}
      >
        
        <div className="card-body">
          <h3 className="card-title">
            {selectedDemo.title}
          </h3>
          <h6 className="">Admin: {selectedDemo.admin}</h6>
          
        </div>
        <ul className="list-group list-group-flush">

          <li className="list-group-item">Description : {selectedDemo.description}</li>
          <li className="list-group-item">Total Participants: {selectedDemo && selectedDemo.Participants && selectedDemo.Participants.length > 0?selectedDemo.Participants.length:0
   
}</li>
          <li className="list-group-item">Location : {selectedDemo.location} </li>
          <li className="list-group-item">
           Date:  {selectedDemo.date} / {selectedDemo.time}
          </li>
        </ul>
        <div className="card-body">
          <Link
            className="btn btn-danger"
            onClick={() => {
              navigate(`/dashboard/${loggedAdmin}`);
            }}
          >
            back to dashboard
          </Link>
        </div>
        </div>
      </div>
    ) : (
      ""
    )}
  </div>
 
  )
}

export default DemoDetails
