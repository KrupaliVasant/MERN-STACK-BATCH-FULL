import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";

function DemoSwitchCase(){
    let num = 1;

    switch(num){
        case 1: return <ContactUs />
        break;

        case 2: return <Home/>
        break;

        case 3: return <AboutUs />
        break;

        default :
        console.log("Nothing");
    }
}
export default DemoSwitchCase;