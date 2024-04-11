import { Route,BrowserRouter,Routes } from "react-router-dom";
import { render } from "react-dom";

import Main from "./main";
import Page2 from "./page2";
function Rotas(){

    return(
       
            <BrowserRouter>
                <Routes>
                    
                    <Route Component={Page2} path="./page2"/>
                </Routes>
            </BrowserRouter>
        ) 
    
}
export default Rotas;