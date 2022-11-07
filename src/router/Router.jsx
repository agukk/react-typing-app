import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            </Routes>
        </BrowserRouter>
    );
}