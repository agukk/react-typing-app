import { Footer } from "../organizms/Footer";
import { Header } from "../organizms/Header";

export const DefaultLayout = ({ children }) => {
    return(
        <>
            <Header/>
            { children }
            <Footer/>
        </>
    );
}