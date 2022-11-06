import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Top />}/>
            </Routes>
        </BrowserRouter>
    );
}