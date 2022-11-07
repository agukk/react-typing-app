import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Guide } from "../components/pages/Guide";
import { Top } from "../components/pages/Top";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Top/>}/>
                <Route path={'guide'} element={<Guide/>}/>
            </Routes>
        </BrowserRouter>
    );
}