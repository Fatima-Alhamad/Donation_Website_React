import VolunteersA from "./VolunteersA";
import DonationsA from "./DonationsA";
import DemonstrationsA from "./DemonstrationsA";

function MainContent({activeOption ,handleDelete,acceptedApp,rejectedApp,handleAccepted}) {
  
            switch (activeOption) {
            case 'volunteers':
              return <VolunteersA   handleDelete={handleDelete} acceptedApp={acceptedApp} rejectedApp={rejectedApp} handleAccepted={handleAccepted} />;
            case 'donations':
              return <DonationsA />;
            case 'demonstrations':
              return <DemonstrationsA />;
            default:
              return null;
            }
          
   
  
}

export default MainContent;
