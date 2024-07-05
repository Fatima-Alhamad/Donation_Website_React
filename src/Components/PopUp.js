import "../PopUp.css";


function PopUp({ trigger, children }) {
 return( trigger?(<div className="popup">
    <div className="popupInner">
      <button className="closeBtn">back to home</button>
      <p>{children}</p>
    </div>
  </div>):null
    
  );
  
  
  

  
}

export default PopUp



