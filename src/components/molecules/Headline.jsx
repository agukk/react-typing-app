import { Link } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { PrimaryText } from "../atoms/text/PrimaryText";

export const Headline = () => {
    return(
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <PrimaryText>Learn English while typing!</PrimaryText>
            <Link to='start'>
                <PrimaryButton>Get Started!</PrimaryButton>
            </Link>
        </div>
    );
}