import { Feature } from "../molecules/Feature";
import { HeadlineButtom } from "../molecules/HeadlineButtom";
import { HeadlineTop } from "../organizms/HeadlineTop";

export const Top = () => {
    return (
        <>
            <HeadlineTop />
            <Feature />
            <HeadlineButtom />
        </>
    );
};
