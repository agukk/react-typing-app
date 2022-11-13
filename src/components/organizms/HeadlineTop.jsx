import { Link } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { StrongPoint } from "../molecules/StrongPoint";

export const HeadlineTop = () => {
    return(
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                        This site is Typing practice website
                    </h1>

                    <div className="mt-8 space-y-5">
                        <StrongPoint>Easy to use</StrongPoint>
                        <StrongPoint>Learn English</StrongPoint>
                        <StrongPoint>Responsive Web design</StrongPoint>
                    </div>
                </div>
                <div class="w-full mt-8 bg-transparent lg:max-w-sm">
                    <Link to='typing'>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="" />
            </div>
        </div>
    );
}