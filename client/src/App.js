import "./App.css";
import { useState} from "react";
import { useLocation  } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { CartProvider } from "./Components/ContextReducer";
import AllRoutesUser from "./AllRoutesUser.jsx";
import AllRoutesOwner from "./AllRoutesOwner";
function App() {
  const [selectedValue, setSelectedValue] = useState();
  const handleChange = (e) => {
    setSelectedValue(e.value);
  }
  const location= useLocation();
  return (
    <CartProvider>
     
        <div>
          {
            location.pathname !== "/Auth" && location.pathname !== "/signup"  &&(
              <Navbar selectedValue={selectedValue} />
            )
          }
          
          <AllRoutesUser
            selectedValue={selectedValue}
            handleChange={handleChange}
          />
          <AllRoutesOwner/>
          {
            location.pathname !== "/Auth" && location.pathname !== "/signup"  &&(
              <Footer />
            )
          }
        </div>
    
    </CartProvider>
  );
}

export default App;
