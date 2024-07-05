import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../Components/api';

function DonationsA() {
  const [donors,setDonors]=useState([]);
  const[err,setErr]=useState("");
  useEffect(()=>{
    async function getData(){
      try{
        const res =await api.get("/donors");
      setDonors(res.data);
     
      }
      catch(error){
        setErr(error);
      }
    }
   
    
    getData();
  },[donors]);

  let totalAmount=0;
  if(donors.length>0){
    for(let i=0;i<donors.length;i++){
      totalAmount+=Number(donors[i].amount);
    }}

  return (
    <div>
       <nav className="navbar navbar-light bg-light d-flex justify-content-between container ">
        <div className="">
      
          <Link className="navbar-brand text-danger demonstrationsContentH" to="/donate">
            donations
          </Link>
        </div>
        <div className="">
          <Link className="navbar-brand " to="/donate">
            {" "}
            <img
              src="../images/plus-solid.svg"
              alt="donate"
              title="donate"
              className="img-fluid plus"
            />
          </Link>
        </div>
      </nav>


    <div className='container my-5'>
      <div className='row gap-5'>
        <div className="col-4 border  border-3 border-success lh-lg p-3 fw-bold rounded-3"> Total Amount : $ {totalAmount}</div>
        <div className="col-4 border  border-3 border-danger lh-lg p-3 fw-bold rounded-3"> Actual  Budget :  $ 300 000</div>
      </div>
    </div>
      {donors.length > 0 ? (
        <table className="table table-hover col-12">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Country</th>
              <th scope="col">More</th>
              
            </tr>
          </thead>
          <tbody>
            {donors.map((ele, index) => (
              <tr key={index}>
                <th scope="row">{ele.id}</th>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>$ {ele.amount}</td>
                <td>{ele.country}</td>
                <td>
                  <Link to={`/dashboard/donors/${ele.id}`}>more</Link>
                </td>
                <td>
                  {" "}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : err ? (
        <p className="alert alert-danger text-center">{err}</p>
      ) : (
        <p className="alert alert-info text-center">Loading..</p>
      )}
    </div>
  )
}

export default DonationsA
