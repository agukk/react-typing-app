import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "../components/pages/Error404";
import { Guide } from "../components/pages/Guide";
import { Top } from "../components/pages/Top";
import { Typing } from "../components/pages/Typing";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Top/>}/>
                <Route path={'guide'} element={<Guide/>}/>
                <Route path={'typing'} element={<Typing/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    );
}