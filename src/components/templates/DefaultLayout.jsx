import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = ({ children }) => {
    return(
        <>
            <Header/>
            { children }
            <Footer/>
        </>
    );
}