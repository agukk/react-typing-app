import { Link } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { PrimaryText } from "../atoms/text/PrimaryText";

export const Headline = () => {
    return(
        <>
            <PrimaryText>Learn English while typing!</PrimaryText>
            <Link to='typing'>
                <PrimaryButton>Get Started!</PrimaryButton>
            </Link>
        </>
    );
}