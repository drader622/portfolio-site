import { BrowserRouter } from "react-router-dom";
import {
   Contact,
   Experience,
   Hero,
   Navbar,
   Tech,
   Projects,
} from "./components";

const App = () => {
   return (
      <BrowserRouter>
         <div className="relative z-0">
            <div>
               <Navbar />
               <Hero />
            </div>

            <div className="bg-grayBg">
               <Projects />
            </div>

            <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
               <Tech />
            </div>

            <div
               className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
            >
               <div
                  className="bg-grayBg rounded-tl-[150px] rounded-br-[130px]"
               >
                  <Experience />
               </div>
            </div>
            <div className="relative z-0">
               <Contact />
            </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
