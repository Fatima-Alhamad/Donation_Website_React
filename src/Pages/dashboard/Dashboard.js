
import Sidebar from "../../Components/Sidebar"
import  "../../App.css";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import MainContent from "./MainContent";
function Dashboard({LoggedAdmin,handleDelete,acceptedApp,rejectedApp,handleAccepted}) {
  const {id}=useParams();
  useEffect(() => {
    LoggedAdmin(id);
  }, [LoggedAdmin, id]);
  const[activeOption,setActiveOption]=useState('volunteers');
  function handleActiveOption(option){
    setActiveOption(option);
  }
  return (
    <div className=" count container-fluid mx-0 my-0  ">
      <div className="row mx-0 ">
        <div className="col-md-3 d-none d-md-block column"><Sidebar id={id} handleActiveOption={handleActiveOption}/></div>
    
      <div className="col-md-8 col-12"> <MainContent activeOption={activeOption}  handleDelete={handleDelete} acceptedApp={acceptedApp} rejectedApp={rejectedApp} handleAccepted={handleAccepted} /></div>

      </div>
    </div>
  )
}

export default Dashboard;
