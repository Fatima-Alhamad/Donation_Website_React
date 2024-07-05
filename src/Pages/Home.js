import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Main from "../Components/Main";
import CardParent from "../Components/CardParent";
import Causes from "../Components/Causes";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

function Home(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Main/>
            <CardParent/>
            <Causes/>
            <Gallery/>
            <Footer/>

        </div>
    )
}
export default Home;